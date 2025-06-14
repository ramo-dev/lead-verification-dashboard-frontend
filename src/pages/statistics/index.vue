<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Page from '@/components/global-layout/basic-page.vue';
import inquiryService from '@/services/inquiryService';

interface Stats {
  total: number;
  pending: number;
  verified: number;
  rejected: number;
}

const stats = ref<Stats | null>(null);
const isLoading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await inquiryService.getStatistics();
    if (response.data.success) {
      stats.value = response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch statistics');
    }
  } catch (err: any) {
    error.value = err.message || 'An unexpected error occurred.';
  } finally {
    isLoading.value = false;
  }
});

const statCards = [
  { title: 'Total Inquiries', key: 'total', color: 'bg-blue-500' },
  { title: 'Pending Verification', key: 'pending', color: 'bg-yellow-500' },
  { title: 'Verified Leads', key: 'verified', color: 'bg-green-500' },
  { title: 'Rejected Inquiries', key: 'rejected', color: 'bg-red-500' },
];
</script>

<template>
  <Page title="Statistics" description="Displays key statistics about the inquiries.">
    <div v-if="isLoading" class="p-4 bg-gray-100 border border-gray-400 text-gray-700 rounded-lg">
      <p class="font-bold">Loading statistics...</p>
    </div>
    <div v-else-if="error" class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
      <p class="font-bold">Error</p>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="stats" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="card in statCards" :key="card.key" :class="['p-6 rounded-lg border border-zinc-400 text-black shadow-md', card.color]">
        <h3 class="text-lg font-semibold">{{ card.title }}</h3>
        <p class="text-3xl font-bold">{{ stats[card.key as keyof Stats] }}</p>
      </div>
    </div>
  </Page>
</template>
