<template>
  <div>
    <div class="flex p-2 pt-8">
      <Input v-model="this.pattern" placeholder="Ignore site (ex. 'example.com')..." class="mr-4 flex-grow text-lg" />
      <Button @click="addPattern(this.pattern)" class="font-medium">Add Pattern</Button>
    </div>
    <div class="pb-2">
      <ul>
        <li v-for="pattern in this.savedPatternsBlacklist" :key="pattern" class="py-1 flex justify-between hover:bg-gray-200 rounded-lg px-2">
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
      savedPatternsBlacklist: []
    };
  },
  created() {
    this.loadSavedPatternsBlacklist();

    chrome.storage.onChanged.addListener(data => {
      if (data.patterns_blacklist) {
        this.savedPatternsBlacklist = data.patterns_blacklist.newValue;
      }
    });
  },
  methods: {
    addPattern(pattern) {
      if (!pattern) {
        return;
      }

      chrome.storage.local.get('patterns_blacklist', data => {
        if (!data.patterns_blacklist) {
          data.patterns_blacklist = [];
        }

        data.patterns_blacklist.push(pattern);

        chrome.storage.local.set(data, () => {
          this.pattern = '';
        });
      });
    },
    deletePattern(pattern) {
      chrome.storage.local.get('patterns_blacklist', data => {
        if (data.patterns_blacklist) {
          data.patterns_blacklist = data.patterns_blacklist.filter(item => item !== pattern);

          chrome.storage.local.set(data, () => {
            // @todo: Add some action
          });
        }
      });
    },
    loadSavedPatternsBlacklist() {
      chrome.storage.local.get('patterns_blacklist', data => {
        this.savedPatternsBlacklist = data.patterns_blacklist || [];
      });
    }
  }
};
</script>
