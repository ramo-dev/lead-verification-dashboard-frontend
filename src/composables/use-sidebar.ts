import {
  CreditCard,
  LayoutDashboard,
  ListTodo,
  ListX,
  BarChart,
  HeartPulse,
} from 'lucide-vue-next'

import type { NavGroup } from '@/components/app-sidebar/types'

export function useSidebar() {
  const navData = ref<NavGroup[]>()

  navData.value = [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Verified leads',
          url: '/verified-leads',
          icon: ListTodo,
        },
        {
          title: 'Pending Inquiries',
          url: '/pending-inquiries',
          icon: ListX,
        },
        {
          title: 'Statistics',
          url: '/statistics',
          icon: BarChart,
        },
        {
          title: 'Health',
          url: '/health',
          icon: HeartPulse,
        },
      ],
    },
  ]

  const otherPages = ref<NavGroup[]>([
    {
      title: 'Other',
      items: [
        {
          title: 'Plans & Pricing',
          icon: CreditCard,
          url: '/billing',
        },
      ],
    },
  ])

  return {
    navData,
    otherPages,
  }
}
