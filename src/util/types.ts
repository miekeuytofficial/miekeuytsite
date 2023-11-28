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

export type Experience = {
  role: string | string[]
  company: string
  date: string
  techSkills: ImageItemsItem[]
  desc: (string | string[])[]
}
export type IconComponentItem = { key: string; icon: any }
export type ImageItemsItem = {
  img: string
  size: 1 | 2 | 3
  desc?: string
  similar?: string[]
  url?: string
}

export type HeaderInfo = {
  phone: string
  email: string
  looking: boolean
}
