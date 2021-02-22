<template>
  <div>
    <div class="flex p-2 pt-8">
      <Input v-model="this.pattern" class="mr-4 flex-grow text-lg" />
      <Button @click="addPattern(this.pattern)" class="font-medium">Add pattern</Button>
    </div>
    <div class="pb-2">
      <ul>
        <li v-for="pattern in this.savedPatterns" :key="pattern" class="py-1 flex justify-between hover:bg-gray-200 rounded-lg px-2">
          <span class="text-lg">{{ pattern }}</span>
          <img src="@/assets/icons/trash.svg" class="w-6 h-6 cursor-pointer" @click="deletePattern(pattern)"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// Common
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

export default {
  components: {
    Button,
    Input
  },
  data() {
    return {
      pattern: '',
      savedPatterns: []
    };
  },
  created() {
    this.loadSavedPatterns();

    chrome.storage.onChanged.addListener(data => {
      if (data.patterns) {
        this.savedPatterns = data.patterns.newValue;
      }
    });
  },
  methods: {
    addPattern(pattern) {
      if (!pattern) {
        return;
      }

      chrome.storage.local.get('patterns', data => {
        if (!data.patterns) {
          data.patterns = [];
        }

        data.patterns.push(pattern);

        chrome.storage.local.set(data, () => {
          this.pattern = '';
        });
      });
    },
    deletePattern(pattern) {
      chrome.storage.local.get('patterns', data => {
        if (data.patterns) {
          data.patterns = data.patterns.filter(item => item !== pattern);

          chrome.storage.local.set(data, () => {
            // @todo: Add some action
          });
        }
      });
    },
    loadSavedPatterns() {
      chrome.storage.local.get('patterns', data => {
        this.savedPatterns = data.patterns || [];
      });
    }
  }
};
</script>
