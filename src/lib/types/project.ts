export type Project = {
  id: number
  title: string
  year: string
  description: string
  image: string
  links: string[]
  fullDescription: string
  technologies: string[]
}

export type ProjectId = keyof typeof import('@/data/projects').projects 