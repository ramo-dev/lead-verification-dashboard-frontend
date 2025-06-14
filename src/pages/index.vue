<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useInquiryStore } from '@/stores/inquiry';
import Page from '@/components/global-layout/basic-page.vue';
import InquiryDetailsModal from '../components/dashboard/InquiryDetailsModal.vue';
import DataTable from '@/components/data-table/index.vue';
import { columns as pendingColumns } from './pending-inquiries/components/columns';
import { columns as verifiedColumns } from './verified-leads/components/columns';
import { columns as allColumns } from './all-inquiries/components/columns';

const inquiryStore = useInquiryStore();
const selectedInquiry = ref(null);

const pendingInquiries = computed(() => inquiryStore.pendingInquiries);
const verifiedInquiries = computed(() => inquiryStore.verifiedInquiries);

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
  <Page title="Dashboard" description="An overview of all trade inquiries." sticky>
    <!-- all inquiries -->
    <div class="overflow-x-auto my-4">
        <h2 class="text-xl font-bold mb-2">All Inquiries</h2>
      <DataTable :data="inquiryStore.allInquiries" :columns="allColumns" @view-inquiry="setSelectedInquiry" />
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 class="text-xl font-bold mb-2">Pending Inquiries</h2>
        <DataTable :data="pendingInquiries" :columns="pendingColumns" @view-inquiry="setSelectedInquiry" />
      </div>
      <div>
        <h2 class="text-xl font-bold mb-2">Verified Leads</h2>
        <DataTable :data="verifiedInquiries" :columns="verifiedColumns" />
      </div>
    </div>
    <InquiryDetailsModal v-if="selectedInquiry" :inquiry="selectedInquiry" @close="selectedInquiry = null" @verified="handleVerification" @deleted="handleDeletion" />
  </Page>
</template>
