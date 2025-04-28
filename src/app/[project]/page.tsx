"use client"

import { useParams } from "next/navigation"
import { Project } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { projects } from "@/data/projects"


export default function ProjectPage() {
  const params = useParams()
  const projectId = params.project as string
  const project = projects[projectId]

  if (!project) {
    return (
      <div className="min-h-screen bg-[##0C0C0C] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-400 hover:opacity-70 transition-opacity">
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <div className="max-w-[800px] mx-auto px-4 py-16">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-5">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Home
        </Link>

        {/* Project Title */}
        <h1 className="text-3xl font-bold mb-2 text-center">{project.title}</h1>

        {/* Project Image */}
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden my-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  )
} 