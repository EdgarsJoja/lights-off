<template>
  <button type="button" class="p-2 min-w-60px bg-gray-400 rounded-lg focus:outline-none hover:opacity-75 text-md text-gray-50">
    <slot></slot>
  </button>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  button {
    min-width: 6rem;
  }
</style>