<script setup lang="ts" generic="TData, TValue">
import type { ColumnDef } from '@tanstack/vue-table'
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const props = defineProps<{
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}>()

const emit = defineEmits(['view-inquiry'])

const table = useVueTable({
  get data() { return props.data },
  get columns() { return props.columns },
  getCoreRowModel: getCoreRowModel(),
})

function handleRowClick(row: any) {
  emit('view-inquiry', row.original)
}
</script>

<template>
  <div class="border rounded-md">
    <Table>
      <TableHeader class="!p-2">
        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header" :props="header.getContext()" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :data-state="row.getIsSelected() && 'selected'"
            class="cursor-pointer !p-2"
            @click="handleRowClick(row)"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id" class="!p-2">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </TableCell>
          </TableRow>
        </template>
        <template v-else>
          <TableRow>
            <TableCell :colspan="columns.length" class="h-24 text-center !p-2">
              No results.
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
  </div>
</template>
