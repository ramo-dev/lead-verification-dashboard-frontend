<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'
import { Search } from 'lucide-vue-next'
import { ref, watch } from 'vue'

import CommandChangeTheme from './command-change-theme.vue'
import CommandToPage from './command-to-page.vue'

const open = ref(false)

const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey))
      e.preventDefault()
  },
})

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1])
    handleOpenChange()
})

function handleOpenChange() {
  open.value = !open.value
}

const firstKey = computed(() => navigator?.userAgent.includes('Mac OS') ? '⌘' : 'Ctrl')
</script>

<template>
  <div>
    <UiCommandDialog v-model:open="open">
      <UiCommandInput placeholder="Type a command or search..." />
      <UiCommandList>
        <UiCommandEmpty>
          No results found.
        </UiCommandEmpty>

        <CommandToPage @click="handleOpenChange" />
        <UiCommandSeparator />
        <CommandChangeTheme @click="handleOpenChange" />
      </UiCommandList>
    </UiCommandDialog>
  </div>
</template>
