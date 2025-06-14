import { defineStore } from 'pinia';
import inquiryService from '@/services/inquiryService';
import type { Inquiry } from '@/types/inquiry';

export const useInquiryStore = defineStore('inquiry', {
  state: () => ({
    inquiries: [] as Inquiry[],
  }),
  getters: {
    pendingInquiries: (state) => state.inquiries.filter(inquiry => inquiry.status === 'PENDING_VERIFICATION'),
    verifiedInquiries: (state) => state.inquiries.filter(inquiry => inquiry.status === 'VERIFIED'),
    allInquiries: (state) => state.inquiries,
  },
  actions: {
    async fetchInquiries() {
      try {
        const response = await inquiryService.getInquiries();
        this.inquiries = response.data.data || [];
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    },
    async verifyInquiry(id: number) {
      try {
        await inquiryService.updateInquiryStatus(id, 'VERIFIED');
        const inquiry = this.inquiries.find(inquiry => inquiry.id === id);
        if (inquiry) {
          inquiry.status = 'VERIFIED';
        }
      } catch (error) {
        console.error('Error verifying inquiry:', error);
      }
    },
    async deleteInquiry(id: number) {
      try {
        await inquiryService.deleteInquiry(id);
        this.inquiries = this.inquiries.filter(inquiry => inquiry.id !== id);
      } catch (error) {
        console.error('Error deleting inquiry:', error);
      }
    },
  },
});
