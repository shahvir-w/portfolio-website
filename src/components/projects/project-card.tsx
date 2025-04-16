import Link from "next/link"
import Image from "next/image"
import { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.link} className="block group">
      <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-medium">{project.title}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">— {project.year}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
        </div>
      </div>
    </Link>
  )
} 