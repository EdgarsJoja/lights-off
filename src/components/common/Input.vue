<template>
  <input
    type="text"
    :bind="$attrs"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    class="border-2 rounded-md outline-none p-1"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      default: '',
      required: false,
    },
    placeholder: {
      default: '',
      required: false,
    }
  },
};
</script>
