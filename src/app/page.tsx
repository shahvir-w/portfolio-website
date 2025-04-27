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
    description: "AI-powered RAG document analysis web app",
    image: "/Document_Analyzing_RAG_Image.png",
    link: "#",
  },
  {
    id: 3,
    title: "3D Flight Tracker",
    year: "2025",
    description: "Real-time flight tracking app",
    image: "/3D_Flight_Tracker_Image.png",
    link: "#",
  },
  {
    id: 2,
    title: "Event Booking Platform Backend",
    year: "2025",
    description: "Microservices-based event booking system",
    image: "/Event_Booking_App_Image.png",
    link: "#",
  },
  
  {
    id: 4,
    title: "Biquadris (CS 246 Final Project)",
    year: "2024",
    description: "Multiplayer version of Tetris with OOD Principles",
    image: "/Biquadris_Game_Image.png",
    link: "#",
  },
  {
    id: 5,
    title: "Locked In",
    year: "2024",
    description: "Task management mobile app",
    image: "/Locked_In_App_Image.png",
    link: "#",
  },
  
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white">
      <main className="container mx-auto px-4 md:px-8 lg:px-8 py-8 max-w-[1400px]">
        <Header />
        <ProjectGrid projects={projects} />
      </main>
    </div>
  )
}
