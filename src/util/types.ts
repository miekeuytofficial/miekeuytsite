export type Testimonial = {
  testimonialId: number
  quote: string
  quoterInformation: {
    name: string
    company: string
    role: string
    linkedInUrl: string
    profileImgUrl?: string
  }
}
