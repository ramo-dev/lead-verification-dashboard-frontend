<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useInquiryStore } from '@/stores/inquiry';
import Page from '@/components/global-layout/basic-page.vue';
import { columns } from './components/columns';
import DataTable from '@/components/data-table/index.vue';

const inquiryStore = useInquiryStore();

const verifiedInquiries = computed(() => inquiryStore.verifiedInquiries);

onMounted(() => {
  inquiryStore.fetchInquiries();
});
</script>

<template>
  <Page title="Verified Leads" description="A list of all verified inquiries." sticky>
    <div class="overflow-x-auto">
      <DataTable :data="verifiedInquiries" :columns="columns" />
    </div>
  </Page>
</template>
