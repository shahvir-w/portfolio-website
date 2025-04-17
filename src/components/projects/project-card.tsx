import Link from "next/link"
import Image from "next/image"
import { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.link} className="block group">
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
            <span className="text-sm text-gray-500 dark:text-gray-400">— {project.year}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
        </div>
      </div>
    </Link>
  )
} 