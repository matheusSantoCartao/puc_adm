<template>
  <div class="my-6">
    <h3 class="font-bold">
      Criar uma nova {{ route.name.split("/")[0].slice(0, -1).toLowerCase() }}
    </h3>
    <span class="text-sm text-gray-500"
      >Preencha as informações abaixo e clique no botão <b>criar</b> para salvar
      as alterações.
    </span>
  </div>

  <div class="card shadow-sm border p-8">
    <div class="flex justify-between">
      <div class="flex flex-wrap w-1/2 flex-col">
        <div class="flex">
          <div class="flex-auto mr-3">
            <Input
              type="default"
              v-model="data.titulo"
              label="Título"
              placeholder="Título da publicação"
            />
          </div>
        </div>
        <div class="mt-3 flex">
          <div class="flex-auto pr-3">
            <Input
              type="default"
              v-model="data.subtitulo"
              label="Subtítulo"
              placeholder="Subtítulo da publicação"
            />
          </div>
        </div>
        <div class="mt-3 flex-auto">
          <div class="flex-auto pr-3">
            <Input
              type="date"
              v-model="data.data_publicacao"
              label="Data de Publicação"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-wrap w-1/2 mx-3 justify-end">
        <div class="block relative">
          <img
            class="flex-auto rounded-lg shadow-lg"
            :src="data.foto ? readURL(data.foto) : 'https://via.placeholder.com/700x300'"
          />
          <button
            class="bg-primary rounded-md shadow-md transform hover:scale-105 px-5 py-2 absolute flex justify-center items-center font-bold"
            style="bottom: 20px; left: 20px"
          >
            <label class="text-white" for="logo">Adicionar</label> <i class="ml-3 text-white gg-camera"></i>
            <input
            @change="changeImage"
            class="absolute hidden" id="logo" type="file" />

          </button>
        </div>

      </div>
      
    </div>
  </div>
  <div class="flex">
    <div class="flex-1 p-3">
      <label class="text-sm text-gray-600">Contéudo:</label>
      <ckeditor :editor="editor" v-model="data.conteudo" :config="editorConfig"></ckeditor>
    </div>
    <div class="flex-1 p-3">
      <label class="text-sm text-gray-600">Demonstração</label>
      <span class="conteudo-dica" v-html="data.conteudo">

      </span>
    </div>
  </div>
  
  <div class="flex justify-end mt-5">
    <Button @click="create" color="primary" text="Criar" />
  </div>
</template>

<script>
import Input from "../../components/Elements/Input.vue";
import Button from "../../components/Elements/Button.vue";
import { inject, ref} from "vue";
import { POST } from "../../services/api";
import { isEmpty } from "../../services/validate";
import { useRoute, useRouter } from "vue-router";
import { decodeJwt } from "../../services/util"
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';

export default {
  name: "criarDica",
  components: {
    Input,
    Button,
  },

  data() {
      return {
          editor: ClassicEditor,
          editorData: '',
          editorConfig: {
              plugins: [
                  EssentialsPlugin,
                  BoldPlugin,
                  ItalicPlugin,
                  ParagraphPlugin,
                  Base64UploadAdapter,
                  Image,
                  ImageUpload,
                  Heading,
                  Alignment,
                  Font
              ],
              toolbar: {
                  items: [
                      'undo',
                      'redo',
                      'heading',
                      'fontColor', 
                      'fontBackgroundColor',
                      'bold',
                      'italic',                      
                      'uploadImage',
                      'alignment',
                  ]
              }
          }
      };
  },


  setup() {
    const alertProps = inject("alert");
    const data = ref({
      "titulo": "",
      "subtitulo": "",
      "conteudo": "",
      "users_id": "",
      "data_publicacao": "",
      "foto": "",
    });

    const content = ref("");
    const loader = inject("loading");
    const alert = inject("alert");
    const router = useRouter();
    const route = useRoute();

    // onMounted(()=> {
    //   console.log(ClassicEditor.);
    // })


    const changeImage = (event) => {
      const obj = {
        titulo: data.value.titulo,
        subtitulo: data.value.subtitulo,
        conteudo: data.value.conteudo,
        ['users_id']: data.value['users_id'],
        ['data_publicacao']: data.value['data_publicacao'],
        foto: event.target.files[0],
      }
      data.value = obj;
    }

    const readURL = file => {
      if(typeof(file) == 'string'){
        return file
      }
      return window.URL.createObjectURL(file)
    };

    const create = async () => {
      data.value["users_id"] = decodeJwt(localStorage.getItem('token')).usr.id
      const validate = isEmpty(data.value);
      if (validate) {
        alert.open("Atenção!", validate, "warning");
      } else {
        data.value.conteudo = '<span style="font-family:Lato; line-height: 24px;">' + data.value.conteudo + '</span>';
        const objRequest = new FormData();
        const item = data.value;
        for (const key in item) {
          objRequest.append(key, item[key]);
        }
        loader.open();
        try {
          const response = await POST("dicas", objRequest);
          alert.open(
            "Sucesso!",
            `Dica <b>${response.titulo}</b> criada com sucesso!`,
            "success"
          );
          loader.close();
          router.push("/dicas");
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
      changeImage,
      readURL
    };
  },
};

</script>

<style>
.ck-content {
  font-family:Lato;
  line-height: 24px;
}
.ck-editor__editable_inline {
    min-height: 400px;
}
.ck-content h2 {
  font-size: 22px;
}
.ck-content h3 {
  font-size: 20px;
}
.ck-content h4 {
  font-size: 18px;
}
.conteudo-dica {
  font-family:Lato;
  line-height: 24px;
}
.conteudo-dica h2 {
  font-size: 22px;
}
.conteudo-dica h3 {
  font-size: 20px;
}
.conteudo-dica h4 {
  font-size: 18px;
}
figure img {
  margin: 0 auto;
}
</style>