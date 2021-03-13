<template>
  <div
    class="flex justify-between items-center cursor-pointer"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <div
      class="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
      :class="{ 'bg-red-400': modelValue }"
    >
      <div
        class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
        :class="{ 'translate-x-6': modelValue }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
