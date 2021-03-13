<template>
  <div class="p-4 bg-gray-100">
    <div class="flex">
      <div class="pr-4 text-lg">Turn off the lights:</div>
      <Toggle v-model="extensionEnabled"></Toggle>
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
    return {
      extensionEnabled: false
    };
  },
  watch: {
    extensionEnabled(newValue, oldValue) {
      chrome.storage.local.set({ enabled: newValue }, () => {});
    }
  },
  created() {
    chrome.storage.local.get('enabled', data => {
      this.extensionEnabled = data.enabled || false;
    });
  }
};
</script>

<style>
#app {
  width: 600px;
}
</style>
