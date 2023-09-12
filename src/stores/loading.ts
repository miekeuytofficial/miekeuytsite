import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const loading = ref(false)

  function startLoading() {
    loading.value = true
  }
  function endLoading() {
    loading.value = false
  }

  return { loading, startLoading, endLoading }
})
