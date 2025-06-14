<template>
  <div class="fixed inset-0 bg-opacity-50 flex justify-center items-center">
    <div class="p-6 space-y-4 dark:text-white bg-white dark:bg-background text-black dark:border-zinc-800 border rounded-lg shadow-lg max-w-md">
      <h3 class="text-lg font-bold mb-4">{{ inquiry.title }}</h3>
      <p><strong>Description:</strong> {{ inquiry.description }}</p>
      <p><strong>Value: </strong> KES {{ inquiry.estimatedValue }}</p>
      <div class="mt-4 flex justify-end space-x-2">
        <button @click="$emit('close')" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white me-auto">Close</button>
        <button @click="$emit('deleted', inquiry.id)" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
        <button @click="$emit('verified', inquiry.id)" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white">Verify Lead</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Inquiry } from '@/types/inquiry';
import type { PropType } from 'vue';
import { defineProps, defineEmits } from 'vue';

defineProps({
  inquiry: {
    type: Object as PropType<Inquiry>,
    required: true,
  },
});

defineEmits(['close', 'verified', 'deleted']);
</script>
