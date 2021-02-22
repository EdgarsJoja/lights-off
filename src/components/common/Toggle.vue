<template>
  <div
    class="flex justify-between items-center cursor-pointer"
    @click="toggleActive = !toggleActive"
  >
    <div
      class="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
      :class="{ 'bg-green-400': toggleActive }"
    >
      <div
        class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
        :class="{ 'translate-x-6': toggleActive }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
        type: Boolean,
        default: false,
        required: false
      }
  },
  data() {
    return {
      toggleActive: this.active
    };
  }
};
</script>

<style scoped></style>
