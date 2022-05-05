<template>
  <div class="flex items-center min-h-screen p-6 bg-primary dark:bg-gray-900">
    <div
      class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img
            aria-hidden="true"
            class="object-cover w-full h-full dark:hidden"
            src="../assets/images/brasao-grande.png"
            alt="Office"
          />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <h1
              class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
            >
              Bem vindo ao <strong class="text-primary">Adm Puc</strong>
              <p class="text-sm text-gray-400 opacity-80">
                Painel Adminstrativo
              </p>
            </h1>
            <div class="mb-5">
              <Input type="default"  v-model="user.email" placeholder="Email" label="Email" autocomplete="off" />
            </div>

            <Input
              v-model="user.password"
              type="password"
              :showTip="false"
              placeholder="*******"
              label="Senha"
              autocomplete="off"
            />

            <!-- You should use a button here, as the anchor is only used for the example  -->
            <a
              @click="login"
              class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white rounded transition-colors duration-150 bg-primary border border-transparent active:bg-purple-600 hover:bg-primary focus:outline-none focus:shadow-outline-purple"
            >
              Entrar
            </a>

            <hr class="my-8" />

            <!-- <p class="mt-4">
              <a
                class="text-sm font-medium text-primary dark:text-purple-400 hover:underline"
                href="./forgot-password.html"
              >
                Esqueceu sua senha?
              </a>
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";
import Input from "../components/Elements/Input";
import { useRouter } from "vue-router";
import { LOGIN, instance } from "../services/api";
import { decodeJwt } from '../services/util'
export default {
  name: "Login",
  components: {
    Input,
  },
  setup() {
    const user = ref({
      email: "",
      password: "",
    });

    const alert = inject("alert");
    const loader = inject("loading");
    const router = useRouter();

    const login = async () => {
      loader.open();
      try {
        const token = await LOGIN("login/adm", user.value);
        localStorage.setItem("token", token);
        instance.defaults.headers.Authorization = (token) ? `Bearer ${token}` : '';
        localStorage.setItem("info", JSON.stringify(decodeJwt(token).usr))
        router.push({ path: "/dicas" });
        loader.close();
      } catch (e) {
        alert.open("Atenção!", `${e.charAt(0).toUpperCase()}${e.slice(1)}`, "warning");
        loader.close();
      }
    };

    return { login, user };
  },
};
</script>

<style>
</style>