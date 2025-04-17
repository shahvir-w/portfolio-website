"use client"

import { Header } from "@/components/header"
import { ProjectGrid } from "@/components/projects/project-grid"
import { Project } from "@/lib/types"

// Sample project data - replace with your own
const projects: Project[] = [
  {
    id: 1,
    title: "Document Analyser RAG",
    year: "2025",
    description: "AI-powered document analysis web app with RAG powered search capabilities",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Event Booking Platform Backend",
    year: "2025",
    description: "Microservices-based event booking system with domain-driven architecture",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    id: 3,
    title: "3D Flight Tracker",
    year: "2025",
    description: "Real-time flight tracking app with interactive 3D globe visualization",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    id: 4,
    title: "Biquadris (CS 246 Final Project)",
    year: "2024",
    description: "Multiplayer version of Tetris with Object-Oriented Design",
    image: "/placeholder.svg",
    link: "#",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white">
      <main className="container mx-auto px-6 py-8 max-w-8xl">
        <Header />
        <ProjectGrid projects={projects} />
      </main>
    </div>
  )
}
