// stores/drawer.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDrawerStore = defineStore('drawer', () => {
  const active = ref(false)
  const placement = ref('right')  // 默认右侧

  function open(place = 'left') {
    active.value = true
    placement.value = place
  }

  function close() {
    active.value = false
  }

  return { active, placement, open, close }
})