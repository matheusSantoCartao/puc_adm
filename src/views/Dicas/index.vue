<template>
  <div class="my-6">
    <h3 class="font-bold">Lista de {{ route.name }}</h3>
    <span class="text-sm text-gray-500"
      >Aqui você pode observar todos os itens relacionados as {{ route.name.toLowerCase() }} como
      suas respectivas ações.
    </span>
  </div>
  <div class="flex mb-6 justify-end">
    <router-link to="/dicas/criar">
      <Button color="primary" :text="`Criar nova ${(route.name.slice(0, -1)).toLowerCase()}`" />
    </router-link>
  </div>
  <div class="card">
    <DataTable
      :headers="headers"
      :data="data"
      :options="options"
      color="primary"
    />
  </div>
</template>

<script>
import DataTable from "../../components/Elements/Datatable.vue";
import Button from "../../components/Elements/Button.vue";
import { inject, onMounted, ref } from "vue";
import { GET, DELETE } from "../../services/api";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "dicas",
  components: {
    DataTable,
    Button,
  },
  setup() {
    const headers = [
      { key: "Id", value: "id" },
      { key: "Título", value: "titulo" },
      { key: "Subtítulo", value: "subtitulo" },
      { key: "Data de Publicação", value: "data_publicacao", date: true },
      { key: "Options", value: "" },
    ];

    const route = useRoute();
    const router = useRouter();
    const modal = inject("modal");
    const alert = inject("alert");
    const loader = inject("loading");
    const data = ref([]);

    onMounted(async () => {
      try {
        loader.open();
        data.value = await GET("dicas");
        loader.close();
      } catch (e) {
        loader.close();
        alert.open("Erro", e, "danger");
      }
    });

    const deleteItem = (dica) => {
      loader.open();
      const deleteFunction = async function() {
        try{
          loader.open();
          await DELETE(`dicas/${dica.id}`);
          data.value = data.value.filter((item) => item.id != dica.id);
          loader.close();
          alert.open("Sucesso!", `Dica deletada com sucesso!`, "success");
        }catch(e){
          loader.close();
          alert.open("Erro", `${e.charAt(0).toUpperCase()}${e.slice(1)}`, "danger");
        }
      }
      modal.open(
        "Atenção",
        "Deseja realmente excluir esse item?",
        "warning",
        "Sim",
        () => deleteFunction(),
        modal.close()
      );
      loader.close();
    };

    const show = (r) => {
      router.push(`/dicas/edit/${r.id}`);
    };

    const options = [
      { icon: "pen", action: (param) => show(param) },
      { icon: "trash", action: (param) => deleteItem(param) },
    ];

    return { headers, data, options, route };
  },
};
</script>

<style>
</style>