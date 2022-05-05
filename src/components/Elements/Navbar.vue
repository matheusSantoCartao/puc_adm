<template>
<div class="flex flex-col  w-full">
        <header class="z-10 py-4 bg-white shadow-sm dark:bg-gray-800 flex justify-between px-5">
          <div
            class="container flex items-center font-bold justify-start h-full px-6 text-sm  text-primary dark:text-purple-300"
          >
           <button @click="router.back()" class="relative text-sm hover:text-primary align-middle rounded-md focus:outline-none focus:shadow-outline-purple mr-4" aria-label="Notifications" aria-haspopup="true">
                  <i class="gg-arrow-left"></i>
                </button>
            {{$store.state.name.replaceAll('/', ' > ')}}
          </div>

          <div class="flex">
            <p class="text-sm mr-5 text-gray-500">{{info.email}}</p>
             <button @click="logout" class="relative text-sm hover:text-primary align-middle rounded-md focus:outline-none focus:shadow-outline-purple mr-4" aria-label="Notifications" aria-haspopup="true">
                  <i class="gg-arrow-right-r"></i>
                </button>
          </div>
                
     
        </header>
        </div>
</template>

<script>
import { onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';
export default {
    name:'Navbar',
    setup(){
      const router = useRouter()
      const info = ref({})
      const logout = () => {
        localStorage.removeItem('token')
        router.push('/login');
      }
      onMounted(() => {
        info.value = JSON.parse(localStorage.getItem("info"))
      })
      return { logout, router, info }
    }
    
}
</script>

<style>

</style>