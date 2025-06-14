import axios from 'axios';

import env from '@/utils/env';

const apiClient = axios.create({
  baseURL: `${env.VITE_SERVER_API_URL}${env.VITE_SERVER_API_PREFIX}`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: env.VITE_SERVER_API_TIMEOUT,
});

export default {
  getInquiries() {
    return apiClient.get('/inquiries');
  },
  updateInquiryStatus(id: number, status: string) {
    return apiClient.put(`/inquiries/${id}/status`, { status });
  },
  deleteInquiry(id: number) {
    return apiClient.delete(`/inquiries/${id}`);
  },
  getHealth() {
    return apiClient.get('/inquiries/health');
  },
  getStatistics() {
    return apiClient.get('/inquiries/statistics');
  },
};
