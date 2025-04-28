export function getProjectSlug(title: string): string {
  const slugMap: { [key: string]: string } = {
    "Document Analyser RAG": "documentanalyzer",
    "3D Flight Tracker": "flighttracker",
    "Event Booking Platform Backend": "eventbooking",
    "Biquadris": "biquadris",
    "Locked In": "lockedin"
  }
  
  return slugMap[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '')
}

export function getProjectTitle(slug: string): string {
  const titleMap: { [key: string]: string } = {
    "documentanalyzer": "Document Analyser RAG",
    "flighttracker": "3D Flight Tracker",
    "eventbooking": "Event Booking Platform Backend",
    "biquadris": "Biquadris",
    "lockedin": "Locked In"
  }
  
  return titleMap[slug] || slug
} 