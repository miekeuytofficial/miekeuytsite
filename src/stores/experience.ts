import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Experience } from '@/util/types';
import axios from '@/util/axios';
import { useLoadingStore } from './loading';


export const useExperienceStore = defineStore('experience', () => {
  const experiences = ref<Experience[]>([]);

  async function getExperiences() {
    const loadingStore = useLoadingStore();
    loadingStore.startLoading();

    if (experiences.value.length === 0) {
      experiences.value = await axios.getExperiences();
    }

    loadingStore.endLoading();
    return experiences.value;
  }

  return {  experiences, getExperiences }
})
