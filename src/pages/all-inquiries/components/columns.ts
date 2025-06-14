import type { ColumnDef } from '@tanstack/vue-table';
import { h } from 'vue';
import type { Inquiry } from '@/types/inquiry';

export const columns: ColumnDef<Inquiry>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'submittingPartner',
    header: 'Submitting Partner',
  },
  {
    accessorKey: 'estimatedValue',
    header: 'Estimated Value',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('estimatedValue'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'KES',
      }).format(amount);
      return h('div', { class: 'text-right font-medium' }, formatted);
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      const baseClasses = 'px-2 py-1 rounded-full text-xs font-semibold';
      let statusClass = '';

      switch (status) {
        case 'VERIFIED':
          statusClass = 'bg-green-100 text-green-800';
          break;
        case 'PENDING_VERIFICATION':
          statusClass = 'bg-yellow-100 text-yellow-800';
          break;
        case 'REJECTED':
          statusClass = 'bg-red-100 text-red-800';
          break;
        default:
          statusClass = 'bg-gray-100 text-gray-800';
      }

      return h('span', { class: `${baseClasses} ${statusClass}` }, status);
    },
  },
];
