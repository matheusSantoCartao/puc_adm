


<template>
<div class="relative" style="height: 100vh;">
  <aside
    class="z-20 w-64 sidebar overflow-y-auto fixed shadow-sm h-full bg-white dark:bg-gray-800 flex-shrink-0"
  >
    <div
      class="text-gray-500 bar dark:text-gray-400 h-full flex flex-col justify-between"
    >
      <div class="list">
        <div
          class="text-lg h-16 logo flex justify-center items-center font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          <router-link to="/" class="flex justify-center items-center">
            <h2>Puc Minas</h2>
          </router-link>
        </div>
        <template v-if="Labels.length > 0">
          <ul class="mt-6">
            <template v-for="(item, index) in Labels" :key="index">
              <li v-if="item.show != false" class="relative px-6 py-3 my-2">
                <span
                  class="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg hover:text-primary"
                  aria-hidden="true"
                  v-if="item.path == route.path"
                ></span>
                <a
                  :class="` inline-flex items-center w-full select-none text-sm font-semibold transition-colors duration-150 hover:text-primary ${
                    item.path == route.path ? 'text-primary active' : ''
                  }`"
                >
                  <div class="flex items-center justify-between w-full ">
                    <router-link
                      class="flex items-center"
                      :to="{ name: item.name }"
                    >
                      <i :class="`gg-${item.icon} hover:text-primary`"></i>
                      <span class="ml-4 text-item">{{ item.label }}</span>
                    </router-link>

                    <i
                      :id="`submenu-${index}`"
                      class="gg-chevron-down hover:text-primary  cursor-pointer"
                      @click="handleSubmenu(`submenu-${index}`)"
                      v-if="item.submenu"
                    ></i>
                  </div>
                </a>
                <div :id="`list-submenu-${index}`" class="mt-3 menu-closed " v-if="item.submenu">
                  <template v-for="submenu in item.submenu" :key="submenu.path">
                    <div class="ml-9 my-3 ">
                       <router-link
                      class="flex items-center"
                      :to="submenu.path"
                    >
                      <span class="hover:text-primary cursor-pointer show-animation text-sm">{{
                        submenu.name
                      }}</span>
                       </router-link>
                    </div>
                  </template>
                </div>
              </li>
            </template>
          </ul>
        </template>
      </div>
    </div>
  </aside>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
// import  router  from "../../router";
import Labels from "../../router/labels.ts";
export default {
  name: "Sidebar",
  setup() {
    const route = useRoute();
   
    const handleSubmenu = (item) => {
      if(document.getElementById(`list-${item}`).classList.contains("menu-closed")){
        document.getElementById(`list-${item}`).classList.remove("menu-closed");
        document.getElementById(`list-${item}`).classList.add("menu-open");
        document.getElementById(item).classList.remove("gg-chevron-down");
        document.getElementById(item).classList.add("gg-chevron-up");
      }else{
        document.getElementById(`list-${item}`).classList.remove("menu-open");
        document.getElementById(`list-${item}`).classList.add("menu-closed");
        document.getElementById(item).classList.add("gg-chevron-down");
        document.getElementById(item).classList.remove("gg-chevron-up");
      }
    };
    return { Labels, route, handleSubmenu };
  },
};
</script>

<style scoped>
.gg-dollar {
  margin-left: 5px;
}



.menu-closed{
  display: none;
}

.menu-open{
  display: block;
}

@keyframes showlabels{
  0% {
    margin-top: -20px;
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.show-animation{
  animation-name: showlabels;
  animation-duration: 1s;
}

@media only screen and (max-width: 600px) {
  .sidebar {
    position: fixed;
    width: 100vw;
    height: 10vh;
    background-color: #fbca01;
    bottom: 0;
    box-shadow: -5px 0px 20px #fbca01;
  }

  .menu-open{
    position: fixed;
    background-color: black;
    justify-content: center;
    width: 100vw;
    height: 90vh;
    left: 0;
    top: 0;
  }

  .menu-open div{
    margin-left: 0;
  }

  i:hover{
    color: black;
  }
  i{
    color: black;
  }

  .logo {
    display: none;
  }

  .list {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 0;
  }

  .bar {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    color: white;
  }

  i:hover {
    color: black;
  }

  .text-item {
    display: none;
  }

  .sidebar ul {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-open a{
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sidebar img {
    display: none;
  }
}
</style>