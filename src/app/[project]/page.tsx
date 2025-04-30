"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Calendar, Code2, Info } from "lucide-react"
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

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="h-5 w-5" />
              <span>{project.year}</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Info className="h-5 w-5" />
                About
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </div>

          {/* Right Column - Technologies & Links */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Links</h2>
              <div className="flex flex-col gap-3">
                <Link
                  href={project.links[0]}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub Repo</span>
                </Link>
                {project.links[1] && (
                  <Link
                    href={project.links[1]}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Implementation</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 