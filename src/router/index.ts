import { setupLayouts } from 'virtual:generated-layouts'
import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router/auto'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'


const router = createRouter({
  history: createWebHistory(),
  routes: [...setupLayouts(routes)],

  scrollBehavior() {
    return { left: 0, top: 0, behavior: 'smooth' }
  },
})


export default router

if (import.meta.hot) {
  handleHotUpdate(router)
}
