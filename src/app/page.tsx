"use client"

import { Header } from "@/components/header"
import { ProjectGrid } from "@/components/projects/project-grid"
import { Project } from "@/lib/types"
import { projectsList } from "@/data/projects"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <main className="container mx-auto px-4 md:px-8 lg:px-8 py-8 max-w-[1400px]">
        <Header />
        <ProjectGrid projects={projectsList} />
      </main>
    </div>
  )
}
