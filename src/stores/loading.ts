import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const loading = ref(false)
  const headerLoading = ref(false)

  function startLoading(header: boolean = false) {
    if (header) {
      headerLoading.value = true
    } else {
      loading.value = true
    }
  }
  function endLoading(header: boolean = false) {
    if (header) {
      headerLoading.value = false
    } else {
      loading.value = false
    }
  }

  return { loading, headerLoading, startLoading, endLoading }
})
