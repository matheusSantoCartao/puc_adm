<template>

  <template v-if="type == 'default'">
    <label class="block relative">
      <span
        class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"
        >{{ label }}</span
      >
      <input
        v-if="readonly"
        class="border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="(event) => $emit('update:modelValue', event.target.value)"
        readonly
      />
      <input
        v-else
        class="border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="(event) => $emit('update:modelValue', event.target.value)"
        :autocomplete="autocomplete"
      />
    </label>
  </template>


<template v-if="type == 'password'">
  <label class="block relative">
    <span class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm">{{
      label
    }}</span>
    <input
      class="border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    />
    <p
      v-if="modelValue.length > 0 && showTip"
      class="font-bold text-gray-800 mt-1 text-right"
    >
      Nível:
      <span
        :class="
          passwordStrength(modelValue) == 'Forte'
            ? 'text-green-400'
            : passwordStrength(modelValue) == 'Moderada'
            ? 'text-yellow-400'
            : 'text-red-400'
        "
        >{{ passwordStrength(modelValue) }}</span
      >
    </p>
  </label>
</template>

<template v-if="type == 'select'">
  <label class="block relative">
    <span class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm">{{
      label
    }}</span>
    <select
      :value="modelValue"
      @change="(event) => $emit('update:modelValue', event.target.value)"
      class="border rounded-lg bg-white py-4 focus:outline-white form-input mt-1 pl-6 block w-full px-4 form-select"
    >
      <option value="0" selected disabled>{{ placeholder }}</option>
      <template v-for="item in data" :key="item.label">
        <option :value="item.value">{{ item.label }}</option>
      </template>
    </select>
  </label>
</template>

<template v-if="type == 'date'">
  <label class="block relative">
    <span class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm">{{
      label
    }}</span>
    <input
      class="border rounded-lg py-4 appearance-none focus:outline-white form-input mt-1 pl-6 pr-4 block w-full"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :max="maxDate"
      :min="minDate"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    />
  </label>
</template>

<template v-if="type == 'money'">
  <label class="block relative">
    <span class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm">{{
      label
    }}</span>
    <input
      class="border rounded-lg py-4 appearance-none focus:outline-white form-input mt-1 pl-6 block w-full"
      :placeholder="placeholder"
      :value="modelValue"
      @keyup="(event) => $emit('update:modelValue', formaterMoney(event.target.value))"
    />
  </label>
</template>


<template v-if="type == 'textarea'">
  <label class="block relative">
    <span class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm">{{
      label
    }}</span>
    <textarea
      class="border rounded-lg py-4 appearance-none focus:outline-white form-input mt-1 pl-6 block w-full"
      :placeholder="placeholder"
      :value="modelValue"
      @change="(event) => $emit('update:modelValue', (event.target.value))"
    >
    </textarea>
  </label>
</template>

<template v-if="type == 'image'">
    <div class="block relative">
      <img
        :class="width ? `w-${width} rounded-lg shadow-lg` : 'flex-auto rounded-lg shadow-lg'"
        :src="tempImage ? readURL(tempImage) : 'https://via.placeholder.com/700x300'"
      />
      <button
        class="bg-primary rounded-md shadow-md transform hover:scale-105 px-5 py-2 absolute flex justify-center items-center font-bold"
        style="bottom: 20px; left: 20px"
      >
        <label class="text-white" :for="label">{{ placeholder ? `${placeholder}` : `Adicionar`}}</label> <i class="ml-3 text-white gg-camera"></i>
        <input
        @change="(event) => { $emit('update:modelValue', (event.target.files[0])); tempImage = event.target.files[0]}"
        class="absolute hidden" :id="label" type="file" />

      </button>
    </div>
</template>

<template v-if="type == 'color'">
  <label class="block relative">
    <span class="text-gray-700 bg-white rounded-sm px-3 -top-2 left-4 absolute text-sm">{{
      label
    }}</span>
     <input
      class="border w-full p-1 py-1 h-16 rounded-md "
      :placeholder="placeholder"
      :value="modelValue"
      type="color"
      @change="(event) => $emit('update:modelValue', event.target.value)"
    />
  </label>
</template>

</template>

<script>
import { computed, onRenderTracked, ref } from "vue";
import { passwordStrength } from "../../services/util";
export default {
  props: {
    label: String || null,
    placeholder: String || null,
    type: String || null,
    modelValue: String,
    data: Array || null,
    showTip: Boolean,
    width: Number || null,
    maxDate: String || null,
    minDate: String || null,
    readonly: Boolean || null,
    autocomplete: String || null,
  },
  setup(props, { emit }) {
      const tempImage = ref();
      computed({
        get: () => props.modelValue,
        set: (value) => emit("update:modelValue", value),
      });


      onRenderTracked(() => {
        if(props.type == 'image'){
          tempImage.value = props.modelValue
        }
      })


      const readURL = file => {
        if(typeof(file) == 'string'){
          return file
        }
        return window.URL.createObjectURL(file)
      };
    
    const formaterMoney = (num) => {
      if(num){
        let valor =  num;
        

        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        return valor
      } else return "";
    }

    return { props, passwordStrength, formaterMoney, tempImage, readURL };
  },
};
</script>

<style>
</style>