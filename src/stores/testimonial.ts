import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Testimonial } from '@/util/types';
import axios from '@/util/axios';
import { useLoadingStore } from './loading';


export const useTestimonialStore = defineStore('testimonial', () => {
  const testimonials = ref<Testimonial[]>([]);

  async function getTestimonials() {
    const loadingStore = useLoadingStore();
    loadingStore.startLoading();

    if (testimonials.value.length === 0) {
      testimonials.value = await axios.getTestimonials();
    }

    loadingStore.endLoading();
    return testimonials.value;
  }

  return { testimonials, getTestimonials }
})
