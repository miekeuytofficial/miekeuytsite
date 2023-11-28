import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '@/util/axios'
import { useLoadingStore } from './loading'
import type { HeaderInfo } from '@/util/types'

export const useHeaderStore = defineStore('header', () => {
  const header = ref<HeaderInfo>()

  async function getHeaderInfo() {
    const loadingStore = useLoadingStore()
    loadingStore.startLoading(true)

    if (!header.value) {
      header.value = await axios.getHeaderInfo()
    }

    loadingStore.endLoading(true)
    return header.value
  }

  return { header, getHeaderInfo }
})
