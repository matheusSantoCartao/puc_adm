<template>
  <div class="my-6 flex items-center justify-between">
    <div>
      <h3 class="font-bold">
        Editar evento diário > <span class="text-primary">{{ data.titulo }}</span>
      </h3>

      <span class="text-sm text-gray-500"
        >Verifique as informações abaixo e clique no botão <b>salvar</b> para
        editar para confirmar as modificações.
      </span>
    </div>
    <div class="flex justify-end">
      <Button @click="edit" color="primary" text="Salvar" />
    </div>
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

</template>

<script>
import Input from "../../components/Elements/Input.vue";
import Button from "../../components/Elements/Button.vue";
import { GET, PUT } from "../../services/api";
import { toDate, toDateUS } from "../../services/formater";
import { inject, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { isEmpty } from "../../services/validate";

export default {
  name: "editUsers",
  components: {
    Input,
    Button,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const loader = inject("loading");
    const alert = inject("alert");
    const modal = inject("modal")
    const data = ref({});
    const profiles = ref([]);
    const preview = ref(null);
  

    onMounted(async () => {
      loader.open();
      data.value = { ...(await GET(`eventos_diarios/${route.params.id}`)) };
      data.value["data"] = toDateUS(data.value.data)
      loader.close();
    });

    const setPreview = (profile) => {
      preview.value = profile
    }

    const edit = async () => {
      const validate = isEmpty(data.value);
      if (validate) {
        alert.open("Atenção!", validate, "warning");
      } else {
        modal.open("Atenção", "Deseja realmente editar esse item?", "warning", "Sim" , async () => {
          try {
          loader.open();
          const response = await PUT(`eventos_diarios/${route.params.id}`, data.value);
          alert.open(
            "Sucesso!",
            `O evento ${data.value.titulo} foi editado com sucesso!`,
            "success"
          );
          loader.close();
          router.push("/eventos-diarios");
          return response;
        } catch (e) {
          loader.close();
          alert.open("Atenção!", `${e.message.charAt(0).toUpperCase()}${e.message.slice(1)}`, "warning");
        }
        },
        modal.close())
      }
      
    };
    return { edit, data, profiles, toDate, setPreview, preview };
  },
};
</script>

<style>
</style>