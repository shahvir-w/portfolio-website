import { Project } from "@/lib/types"

export const projects: { [key: string]: Project } = {
  "documentanalyzer": {
    id: 1,
    title: "Document Analyser RAG",
    year: "2024",
    description: "AI-powered RAG document analysis web app",
    image: "/Document_Analyzing_RAG_Image.png",
    links: ["#", "#", "#"],
    fullDescription: "An AI-powered document analysis tool using Retrieval Augmented Generation (RAG) to provide intelligent insights and summaries from uploaded documents.",
    technologies: ["Python", "OpenAI", "Vector DB", "Next.js"]
  },
  "flighttracker": {
    id: 2,
    title: "3D Flight Tracker",
    year: "2024",
    description: "Real-time flight tracking app",
    image: "/3D_Flight_Tracker_Image.png",
    links: ["#", "#", "#"],
    fullDescription: "A sophisticated real-time flight tracking application that visualizes aircraft movements in 3D space. Built with modern web technologies and real-time data integration.",
    technologies: ["Next.js", "Three.js", "WebGL", "Real-time API"]
  },
  "eventbooking": {
    id: 3,
    title: "Event Booking Platform Backend",
    year: "2024",
    description: "Microservices-based event booking system",
    image: "/Event_Booking_App_Image.png",
    links: ["#", "#", "#"],
    fullDescription: "A scalable microservices architecture for handling event bookings, featuring robust payment processing and real-time availability updates.",
    technologies: ["Node.js", "Docker", "Kubernetes", "MongoDB"]
  },
  "biquadris": {
    id: 4,
    title: "Biquadris",
    year: "2024",
    description: "Multiplayer version of Tetris with OOD Principles",
    image: "/Biquadris_Game_Image.png",
    links: ["#", "#", "#"],
    fullDescription: "A multiplayer adaptation of Tetris implementing Object-Oriented Design principles, featuring local multiplayer and custom game modes.",
    technologies: ["C++", "OOP", "SDL2", "Make"]
  },
  "lockedin": {
    id: 5,
    title: "Locked In",
    year: "2024",
    description: "Task management mobile app",
    image: "/Locked_In_App_Image.png",
    links: ["#", "#", "#"],
    fullDescription: "A mobile task management application focused on productivity and time management, with features for task prioritization and progress tracking.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"]
  }
}

export const projectsList = Object.values(projects) 