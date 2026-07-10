import { useState } from "react";
import { FiGithub, FiFilter } from "react-icons/fi";

const allProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Frontend",
    description:
      "A modern, animated portfolio built with React and Tailwind CSS showcasing design proficiency in technologies such as React, Tailwind.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    accent: "#01BAEF",
    github: "https://github.com/JashwanthK-28/portfolio",
    live: "#",
  },
  {
    id: 2,
    title: "Gesture Controlled Mouse",
    category: "ML Project",
    description:
      "A web application that controls the mouse cursor using hand gestures captured through a webcam. Leveraging MediaPipe for real-time hand tracking and OpenCV for image processing, this project enables users to interact with their computer using natural hand movements.",
    tech: ["HTML", "CSS", "JavaScript", "MediaPipe", "OpenCV"],
    accent: "#38B2F1",
    github: "https://github.com/JashwanthK-28/GestureControlledMouse",
    live: "#",
  },
  {
    id: 3,
    title: "Full Stack Music Player",
    category: "Full Stack",
    description:
      "A feature-rich music player web application built with MERN stack (MongoDB, Express.js, React, Node.js). Users can stream music, create playlists, and manage their music library with a seamless and intuitive interface.",
    tech: ["React", "CSS3", "Node.js", "Express", "MongoDB"],
    accent: "#9B59F1",
    github: "https://github.com/JashwanthK-28/fullstack-music-player",
    live: "#",
  },
  {
    id: 4,
    title: "ShowMax",
    category: "Full Stack",
    description:
      "A full-stack movie ticket booking web application with real-time seat selection, Stripe payments, automated email notifications, and a role-protected admin dashboard.",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Inngest",
      "Stripe",
      "Clerk",
    ],
    accent: "#842424",
    github: "https://github.com/JashwanthK-28/ShowMax",
    live: "https://showmax-sigma.vercel.app/",
  },
];

const categories = ["All", "Frontend", "Full Stack"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

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
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent text-dark"
                  : "border border-border text-muted hover:border-accent/50 hover:text-light"
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
              className="relative group [perspective:1000px] h-[400px] cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* FRONT FACE */}
                <div className="absolute inset-0 w-full h-full bg-card border border-border rounded-2xl flex flex-col overflow-hidden [backface-visibility:hidden]">
                  {/* Thumbnail */}
                  <div className="relative h-52 overflow-hidden border-b border-border flex items-center justify-center bg-darker shrink-0">
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
                      {String(project.id).padStart(2, "0")}
                    </span>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-xs font-mono font-bold px-3 py-1 rounded-full border"
                        style={{
                          color: project.accent,
                          borderColor: `${project.accent}60`,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-accent text-dark">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Front Content */}
                  <div className="p-6 flex flex-col flex-grow justify-center">
                    <h3
                      className="text-xl font-display tracking-wider mb-4 transition-colors duration-300"
                      style={{
                        color:
                          hoveredId === project.id ? project.accent : "#F5F5F5",
                      }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-muted border border-border rounded-full px-3 py-1 font-mono transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 w-full h-full bg-darker border border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <h3
                    className="text-2xl font-display tracking-wider mb-4"
                    style={{ color: project.accent }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-light/30 rounded-full text-light px-5 py-2.5 text-sm hover:bg-light hover:text-dark transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub size={16} /> Code
                    </a>
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-accent text-dark rounded-full px-5 py-2.5 text-sm hover:bg-light transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
