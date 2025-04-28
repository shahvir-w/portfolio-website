import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

function SocialLinks() {
  return (
    <>
      <Link href="https://github.com/shahvir-w" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 cursor-pointer transition-opacity">
        <Github className="h-5 w-5 text-white" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link href="https://www.linkedin.com/in/shahvir-wahab-744a58247/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 cursor-pointer transition-opacity">
        <Linkedin className="h-5 w-5 text-white" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link href="mailto:wshahvir@gmail.com" className="hover:opacity-70 cursor-pointer transition-opacity">
        <Mail className="h-5 w-5 text-white" />
        <span className="sr-only">Email</span>
      </Link>
    </>
  )
}

export function Header() {
  return (
    <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white">Shahvir Wahab</h1>
        <p className="text-gray-300 max-w-md">
          Fullstack software developer studying Computer Science at the University of Waterloo.
        </p>
      </div>
      <div className="flex flex-col gap-3 items-start md:items-center">
        <div className="flex items-center gap-3">
          <SocialLinks />
        </div>
        <Link href="#" className="hover:opacity-70 cursor-pointer transition-opacity flex items-center">
          <ExternalLink className="h-4 w-4 mr-1 text-white" />
          <span className="text-sm text-white">View Resume</span>
        </Link>
      </div>
    </header>
  )
} 