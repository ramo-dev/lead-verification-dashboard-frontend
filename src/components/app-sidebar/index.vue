<script lang="ts" setup>
import { sidebarData } from './data/sidebar-data'
import NavTeam from './nav-team.vue'
</script>

<template>
  <UiSidebar collapsible="icon" class="z-50">

    <UiSidebarContent>
      <NavTeam :nav-main="sidebarData.navMain" />
    </UiSidebarContent>

  </UiSidebar>
</template>

<style></style>
