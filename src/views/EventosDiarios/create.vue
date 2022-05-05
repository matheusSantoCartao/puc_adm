<template>
  <div class="my-6">
    <h3 class="font-bold">Criar Evento diário</h3>
    <span class="text-sm text-gray-500"
      >Preencha as informações abaixo e clique no botão <b>criar</b> para salvar
      as alterações.
    </span>
  </div>

  <div class="card shadow-sm border p-8 bg-white">
    <div class="flex">
      <div class="flex-1">
        <Input
          type="default"
          v-model="data.titulo"
          label="Título"
          placeholder="Título da publicação"
        />
      </div>
      <div class="flex-1 mx-3">
        <Input
          type="date"
          v-model="data.data"
          label="Data de Publicação"
        />
      </div>
      <div class="flex-1">
        <Input
          type="color"
          v-model="data.cor"
          label="Cor"
        />
      </div>
    </div>
    <div class="flex mt-5">
       <div class="flex-1">
        <Input
          type="textarea"
          v-model="data.descricao"
          label="Descrição"
          placeholder="Descrição do evento"
        />
      </div>
    </div>
  </div>

  <div class="flex justify-end mt-5">
    <Button @click="create" color="primary" text="Criar" />
  </div>
</template>

<script>
import Input from "../../components/Elements/Input.vue";
import Button from "../../components/Elements/Button.vue";
import { inject, ref } from "vue";
import { POST } from "../../services/api";
import { isEmpty } from "../../services/validate";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "CriarEventoDiario",
  components: {
    Input,
    Button,
  },

  setup() {
    const alertProps = inject("alert");
    const data = ref({
      titulo: "",
      descricao: "",
      data: "",
      cor: "#000",
    });

    const content = ref("");
    const loader = inject("loading");
    const alert = inject("alert");
    const router = useRouter();
    const route = useRoute();

    const create = async () => {
      const validate = isEmpty(data.value);
      if (validate) {
        alert.open("Atenção!", validate, "warning");
      } else {
        loader.open();
        try {
          const response = await POST("eventos_diarios", data.value);
          alert.open(
            "Sucesso!",
            `Evento <b>${response.titulo}</b> criada com sucesso!`,
            "success"
          );
          loader.close();
          router.push("/eventos-diarios");
        } catch (e) {
          alert.open("Atenção!", `${e.charAt(0).toUpperCase()}${e.slice(1)}`, "danger");
          loader.close();
        }
      }
    };
    return {
      alertProps,
      data,
      create,
      route,
      content,
    };
  },
};
</script>

<style>
</style>