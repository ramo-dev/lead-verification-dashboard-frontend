import type { Inquiry } from '@/types/inquiry';
import type { ColumnDef } from '@tanstack/vue-table';
import { h } from 'vue';

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
        currency: 'USD',
      }).format(amount);
      return h('div', { class: 'text-right font-medium' }, formatted);
    },
  },
];
