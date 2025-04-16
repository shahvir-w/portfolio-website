"use client"

import { Header } from "@/components/header"
import { ProjectGrid } from "@/components/projects/project-grid"
import { Project } from "@/lib/types"

// Sample project data - replace with your own
const projects: Project[] = [
  {
    id: 1,
    title: "3D Flight Tracker",
    year: "2024",
    description: "Real-time flight tracking system with interactive 3D globe visualization",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Document Insight Engine",
    year: "2024",
    description: "AI-powered document analysis system with RAG capabilities",
    image: "/placeholder.svg",
    link: "#",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        <ProjectGrid projects={projects} />
      </main>
    </div>
  )
}
