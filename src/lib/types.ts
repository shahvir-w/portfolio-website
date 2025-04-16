export interface Project {
  id: number
  title: string
  year: string
  description: string
  image: string
  link: string
}

export interface ThemeProps {
  theme: string
  toggleTheme: () => void
} 