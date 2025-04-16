import Link from "next/link"
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"

function SocialLinks() {
  return (
    <>
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" className="p-2">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" className="p-2">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>
      <Link href="mailto:example@email.com">
        <Button variant="ghost" className="p-2">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Button>
      </Link>
    </>
  )
}

export function Header() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          Software engineer specializing in building exceptional digital experiences and AI-powered applications.
        </p>
        <div className="flex items-center gap-4">
          <SocialLinks />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">
          <ExternalLink className="h-4 w-4 mr-2" />
          <Link href="#" className="no-underline">
            View Resume
          </Link>
        </Button>
        <Button variant="ghost" onClick={toggleTheme} className="p-2">
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
} 