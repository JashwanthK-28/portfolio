import { useState } from 'react'
import { FiGithub, FiFilter } from 'react-icons/fi'
import Footer from '../components/Footer'

const allProjects = [
  {
    id: 1,
    title: 'Portfolio Website',
    category: 'Frontend',
    description: 'A modern, animated portfolio built with React and Tailwind CSS showcasing design proficiency in technologies such as React, Tailwind.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    accent: '#01BAEF',
    github: 'https://github.com/JashwanthK-28/portfolio',
    live: '#',
  },
  {
    id: 2,
    title: 'Gesture Controlled Mouse',
    category: 'ML Project',
    description: 'A web application that controls the mouse cursor using hand gestures captured through a webcam. Leveraging MediaPipe for real-time hand tracking and OpenCV for image processing, this project enables users to interact with their computer using natural hand movements.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MediaPipe', 'OpenCV'],
    accent: '#38B2F1',
    github: 'https://github.com/JashwanthK-28/GestureControlledMouse',
    live: '#',
  },
  {
    id: 3,
    title: 'Full Stack Music Player',
    category: 'Full Stack',
    description: 'A feature-rich music player web application built with MERN stack (MongoDB, Express.js, React, Node.js). Users can stream music, create playlists, and manage their music library with a seamless and intuitive interface.',
    tech: ['React', 'CSS3', 'Node.js', 'Express', 'MongoDB'],
    accent: '#9B59F1',
    github: 'https://github.com/JashwanthK-28/fullstack-music-player',
    live: '#',
  },
  {
    id: 4,
    title: 'PantryPilot',
    category: 'Full Stack',
    description: 'PantryPilot is an AI-powered cooking assistant designed to revolutionize the way you cook. Users can scan their kitchen pantry, and PantryPilot instantly analyzes the ingredients, suggesting personalized recipes and meal ideas. Built with a robust MERN stack backend and an intuitive React frontend, it seamlessly connects your pantry to your plate.',
    tech: ['React', 'CSS3', 'Node.js', 'Express', 'MongoDB'],
    accent: '#842424',
    github: 'https://github.com/JashwanthK-28/PantryPilot',
    live: '#',
  },

]

const categories = ['All', 'Frontend', 'Full Stack']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState(null)

  const filtered = activeCategory === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <div className="section-tag">My Work</div>
        <h1 className="text-6xl md:text-8xl font-display tracking-wider mb-6">
          PROJECTS
        </h1>
        <div className="w-full h-px bg-border" />
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 flex-wrap">
          <FiFilter className="text-muted" size={16} />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent text-dark'
                  : 'border border-border text-muted hover:border-accent/50 hover:text-light'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-muted text-xs font-mono">
            {filtered.length} projects
          </span>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border group card-hover overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Thumbnail */}
              <div className="relative h-52 overflow-hidden border-b border-border flex items-center justify-center bg-darker">
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    opacity: hoveredId === project.id ? 0.15 : 0.05,
                    background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent)`,
                  }}
                />
                {/* Project number */}
                <span
                  className="font-display text-8xl opacity-10 group-hover:opacity-20 transition-all duration-500 select-none"
                  style={{ color: project.accent }}
                >
                  {String(project.id).padStart(2, '0')}
                </span>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-mono font-bold px-2 py-1 border"
                    style={{ color: project.accent, borderColor: `${project.accent}60` }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono font-bold px-2 py-1 bg-accent text-dark">
                      Featured
                    </span>
                  </div>
                )}

                {/* Hover overlay with links */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-6 transition-opacity duration-300 bg-dark/60 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-light/30 text-light px-4 py-2 text-xs hover:bg-light hover:text-dark transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={14} /> Code
                  </a>

                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-display tracking-wider mb-3 transition-colors duration-300"
                  style={{ color: hoveredId === project.id ? project.accent : '#F5F5F5' }}
                >
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-muted border border-border px-2 py-0.5 font-mono hover:border-accent/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-darker border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted text-sm mb-4 uppercase tracking-widest font-mono">More on GitHub</p>
          <h2 className="text-4xl font-display tracking-wider mb-8">
            SEE ALL MY WORK
          </h2>
          <a
            href="https://github.com/JashwanthK-28/"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <FiGithub /> Visit GitHub Profile
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
