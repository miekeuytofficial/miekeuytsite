import axios, { type AxiosRequestConfig } from 'axios'
import type { Experience, HeaderInfo, Testimonial } from './types'

const config: AxiosRequestConfig = {
  maxBodyLength: Infinity,
  baseURL: `https://api.miekeuyt.com`
}

const axiosInstance = axios.create(config)
axiosInstance.interceptors.request.use((value) => {
  return { ...value }
})

const getTestimonials: () => Promise<Testimonial[]> = async () => {
  try {
    const {
      data: { Items }
    } = await axiosInstance.get('/testimonials')
    return Items.sort((a: Testimonial, b: Testimonial) => a.testimonialId - b.testimonialId)
  } catch (e) {
    console.log(e)
  }
}

const getExperiences: () => Promise<Experience[]> = async () => {
  try {
    const {
      data: { data }
    } = await axiosInstance.get('/experiences')
    return data
  } catch (e) {
    console.log(e)
  }
}

const getHeaderInfo: () => Promise<HeaderInfo> = async () => {
  try {
    const {
      data: { data }
    } = await axiosInstance.get('/header-info')
    return data[0]
  } catch (e) {
    console.log(e)
  }
}
export default {
  getTestimonials,
  getExperiences,
  getHeaderInfo
}
