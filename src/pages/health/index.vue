<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Page from '@/components/global-layout/basic-page.vue';
import inquiryService from '@/services/inquiryService';

const healthInfo = ref({ message: 'Checking status...', data: 'UNKNOWN' });
const isLoading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await inquiryService.getHealth();
    if (response.data.success) {
      healthInfo.value = response.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch health status');
    }
  } catch (err: any) {
    error.value = err.message || 'An unexpected error occurred.';
    healthInfo.value = { message: 'Failed to retrieve status', data: 'ERROR' };
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <Page title="System Health" description="Displays the current status of the system.">
    <div v-if="isLoading" class="p-4 bg-gray-100 border border-gray-400 text-gray-700 rounded-lg">
      <p class="font-bold">Loading system status...</p>
    </div>
    <div v-else-if="error" class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
      <p class="font-bold">Error</p>
      <p>{{ error }}</p>
    </div>
    <div v-else :class="['p-4 rounded-lg border', healthInfo.data === 'OK' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700']">
      <p class="font-bold">System Status: {{ healthInfo.data }}</p>
      <p>{{ healthInfo.message }}</p>
    </div>
  </Page>
</template>
