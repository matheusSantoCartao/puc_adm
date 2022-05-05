<template>
  <div
    class="flex border items-center p-4 my-3 bg-white rounded-lg shadow-lg dark:bg-gray-800"
  >
    <div
      class="p-3 mr-4 rounded-full dark:text-orange-100 dark:bg-orange-500"
    >
      <i :style="`color: ${color}`" :class="`gg-${icon} `"></i>
    </div>
    <div>
      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
        {{label}}
      </p>
      <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">{{number ? number : 0}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    label: String,
    icon: String,
    color: String,
    number: Number, 
  },
};
</script>
