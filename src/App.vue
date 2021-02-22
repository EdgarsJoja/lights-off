<template>
  <div class="p-4">
    <div class="flex justify-around">
      <div class="flex">
        <div class="pr-4 text-lg">Cache responses:</div>
        <Toggle></Toggle>
      </div>
      <div class="flex">
        <div class="pr-4 text-lg">Use cached data:</div>
        <Toggle></Toggle>
      </div>
    </div>

    <div class="w-full">
      <Main />
    </div>
  </div>
</template>

<script>
// Common components
import Toggle from './components/common/Toggle';

// Views
import Main from './components/views/Main';

export default {
  name: 'App',
  components: {
    Toggle,
    Main
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style>
#app {
  width: 600px;
}
</style>
