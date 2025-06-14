<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useInquiryStore } from '@/stores/inquiry';
import Page from '@/components/global-layout/basic-page.vue';
import InquiryDetailsModal from '../../components/dashboard/InquiryDetailsModal.vue';
import { columns } from './components/columns.ts';
import DataTable from '@/components/data-table/index.vue';

const inquiryStore = useInquiryStore();
const selectedInquiry = ref(null);

const pendingInquiries = computed(() => inquiryStore.pendingInquiries);

onMounted(() => {
  inquiryStore.fetchInquiries();
});

function setSelectedInquiry(inquiry: any) {
  selectedInquiry.value = inquiry;
}

async function handleVerification(id: number) {
  await inquiryStore.verifyInquiry(id);
  selectedInquiry.value = null;
}

async function handleDeletion(id: number) {
  await inquiryStore.deleteInquiry(id);
  selectedInquiry.value = null;
}
</script>

<template>
  <Page title="Pending Inquiries" description="A list of inquiries awaiting verification." sticky>
    <div class="overflow-x-auto">
      <DataTable :data="pendingInquiries" :columns="columns" @view-inquiry="setSelectedInquiry" />
    </div>
    <InquiryDetailsModal v-if="selectedInquiry" :inquiry="selectedInquiry" @close="selectedInquiry = null" @verified="handleVerification" @deleted="handleDeletion" />
  </Page>
</template>
