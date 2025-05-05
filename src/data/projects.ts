import { Project } from "@/lib/types"

export const projects: { [key: string]: Project } = {
  "documentanalyzer": {
    id: 1,
    title: "Document Analyser RAG",
    year: "March 2025",
    description: "AI-powered RAG document analysis web app",
    image: "/Document_Analyzing_RAG_Image.png",
    links: ["https://github.com/shahvir-w/Document-RAG-App"],
    fullDescription: "An AI-powered document analysis tool using Retrieval Augmented Generation (RAG) to provide intelligent summaries from uploaded documents, and a chat interface for interacting with the AI.",
    technologies: ["Python", "Langchain", "FastAPI", "React", "Redis", "Celery", "ChromaDB", "OpenAI"]
  },
  "flighttracker": {
    id: 2,
    title: "3D Flight Tracker",
    year: "February 2025",
    description: "Flight tracking web app",
    image: "/3D_Flight_Tracker_Image.png",
    links: ["https://github.com/shahvir-w/3d-flight-tracker"],
    fullDescription: "A sophisticated flight tracking application with a fun 3D globe view. Uses flight data from AeroAPI.",
    technologies: ["Node.js", "Express", "React", "Mapbox GL", "REST API"]
  },
  "eventbooking": {
    id: 3,
    title: "Event Booking Platform Backend",
    year: "April 2025",
    description: "Microservices-based event booking system",
    image: "/Event_Booking_App_Image.png",
    links: ["https://github.com/shahvir-w/Event-Booking-System"],
    fullDescription: "A scalable microservices architecture for handling event bookings, featuring an API gateway, service layer abstraction, and database integration.",
    technologies: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker", "Flyway"]
  },
  "biquadris": {
    id: 4,
    title: "Biquadris",
    year: "November 2024",
    description: "Multiplayer version of Tetris with OOD Principles",
    image: "/Biquadris_Game_Image.png",
    links: ["https://github.com/shahvir-w/Biquadris_Game_Fall24"],
    fullDescription: "A multiplayer adaptation of Tetris implementing Object-Oriented Design principles, featuring local multiplayer and custom game levels.",
    technologies: ["C++", "Xlib", "MVC"]
  },
  "lockedin": {
    id: 5,
    title: "Locked In",
    year: "August 2024",
    description: "Task management mobile app",
    image: "/Locked_In_App_Image.png",
    links: ["https://github.com/shahvir-w/Locked-In", "https://apps.apple.com/us/app/locked-in-daily-tasks-tracker/id6711331425?platform=iphone"],
    fullDescription: "A mobile task management application focused on productivity and time management, with features for task prioritization and progress tracking.",
    technologies: ["React Native", "JavaScript", "Expo", "Firebase"]
  }
}

export const projectsList = Object.values(projects) 