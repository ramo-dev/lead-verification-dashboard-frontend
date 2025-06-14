export interface Inquiry {
  id: number;
  title: string;
  description: string;
  submittingPartner: string;
  estimatedValue: number;
  status: 'PENDING_VERIFICATION' | 'VERIFIED' | 'REJECTED';
}
