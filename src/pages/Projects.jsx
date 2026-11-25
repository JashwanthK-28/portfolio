import { useState } from "react";
import { FiGithub, FiFilter, FiExternalLink } from "react-icons/fi";

const allProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Frontend",
    description:
      "A modern, animated portfolio built with React and Tailwind CSS showcasing design proficiency in technologies such as React and Tailwind.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    accent: "#00E5FF",
    github: "https://github.com/JashwanthK-28/portfolio",
    live: "#",
  },
  {
    id: 2,
    title: "Gesture Controlled Mouse",
    category: "ML Project",
    description:
      "A web application that controls the mouse cursor using hand gestures captured through a webcam. Leveraging MediaPipe for real-time hand tracking and OpenCV for image processing.",
    tech: ["HTML", "CSS", "JavaScript", "MediaPipe", "OpenCV"],
    accent: "#FFDE00",
    github: "https://github.com/JashwanthK-28/GestureControlledMouse",
    live: "#",
  },
  {
    id: 3,
    title: "Full Stack Music Player",
    category: "Full Stack",
    description:
      "A feature-rich music player web application built with MERN stack (MongoDB, Express.js, React, Node.js). Users can stream music, create playlists, and manage their music library.",
    tech: ["React", "CSS3", "Node.js", "Express", "MongoDB"],
    accent: "#C490FF",
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
    accent: "#FF5E5B",
    github: "https://github.com/JashwanthK-28/ShowMax",
    live: "https://showmax-sigma.vercel.app/",
  },
];

const categories = ["All", "Frontend", "Full Stack"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <section className="pt-28 pb-12 max-w-7xl mx-auto px-6">
        <div className="section-tag">My Work</div>
        <h1 className="text-6xl md:text-8xl font-display tracking-tight uppercase text-black mb-6">
          PROJECTS
        </h1>
        <div className="w-full h-[3px] bg-black" />
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase mr-2">
            <FiFilter size={16} /> Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 border-[3px] border-black text-xs uppercase tracking-widest font-mono font-bold transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-accent text-black shadow-nb -translate-y-0.5"
                  : "bg-white text-black hover:bg-surface active:translate-y-0"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto bg-black text-accent px-3 py-1.5 font-mono font-bold text-xs uppercase">
            {filtered.length} projects
          </span>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="relative group [perspective:1000px] h-[420px] cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* FRONT FACE */}
                <div className="absolute inset-0 w-full h-full bg-white border-[3px] border-black shadow-nb-lg flex flex-col overflow-hidden [backface-visibility:hidden]">
                  {/* Thumbnail Header */}
                  <div
                    className="relative h-48 overflow-hidden border-b-[3px] border-black flex items-center justify-center shrink-0"
                    style={{ backgroundColor: project.accent }}
                  >
                    {/* Project number */}
                    <span className="font-display text-8xl text-black/25 select-none">
                      {String(project.id).padStart(2, "0")}
                    </span>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-mono font-bold px-3 py-1 bg-white text-black border-2 border-black shadow-nb-sm uppercase">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover hint */}
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-black text-white uppercase">
                        Hover to flip ↻
                      </span>
                    </div>
                  </div>

                  {/* Front Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                    <h3 className="text-2xl font-display tracking-tight uppercase text-black mb-4">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-black bg-surface border-2 border-black px-2.5 py-0.5 font-mono font-bold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BACK FACE */}
                <div
                  className="absolute inset-0 w-full h-full border-[3px] border-black shadow-nb-lg p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)] bg-paper"
                >
                  <span
                    className="text-xs font-mono font-bold px-3 py-1 border-2 border-black shadow-nb-sm uppercase mb-4 text-black"
                    style={{ backgroundColor: project.accent }}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display tracking-tight uppercase text-black mb-4">
                    {project.title}
                  </h3>
                  <p className="text-neutral-800 font-medium text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-white border-[3px] border-black shadow-nb-sm text-black font-mono font-bold px-4 py-2.5 text-xs uppercase hover:bg-accent hover:-translate-y-0.5 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub size={16} /> Code
                    </a>
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-black text-accent border-[3px] border-black shadow-nb-sm font-mono font-bold px-4 py-2.5 text-xs uppercase hover:bg-nb-cyan hover:text-black hover:-translate-y-0.5 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo <FiExternalLink size={14} />
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
