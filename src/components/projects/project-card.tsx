import Link from "next/link"
import Image from "next/image"
import { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

function getProjectSlug(title: string): string {
  const slugMap: { [key: string]: string } = {
    "Document Analyser RAG": "documentanalyzer",
    "3D Flight Tracker": "flighttracker",
    "Event Booking Platform Backend": "eventbooking",
    "Biquadris (CS 246 Final Project)": "biquadris",
    "Locked In": "lockedin"
  }
  
  return slugMap[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '')
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projectSlug = getProjectSlug(project.title)
  
  return (
    <Link href={`/${projectSlug}`} className="block group">
      <div className="overflow-hidden">
        <div className="relative aspect-video rounded-xs overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="pt-2">
          <div className="flex justify-between items-center">
            <h3 className="text-md">{project.title}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">— {project.year.split(" ")[1]}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
        </div>
      </div>
    </Link>
  )
} 