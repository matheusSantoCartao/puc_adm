<template>
  <button
    type="button"
    :class="`btn-outline-primary 
    transition duration-300 ease-in-out 
    bg-${color} text-white
    focus:outline-none focus:shadow-outline border
    font-bold py-2 w-5/4 px-4 text-sm rounded-md flex items-center`"
  >
{{text}} 
  </button>
</template>

<script>
export default {
    props:{
        color: String || null,
        text: String || null,
    },
    setup(props){
        return {props}
    }
};
</script>

<style>
</style>