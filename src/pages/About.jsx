import { FiCode, FiDatabase, FiServer, FiArrowRight, FiLayout } from 'react-icons/fi'
import {
  SiReact, SiJavascript, SiNodedotjs, SiTailwindcss,
  SiMongodb, SiHtml5, SiGit, SiNextdotjs, SiExpress,
  SiCss,
  SiMysql,
  SiPostman
} from 'react-icons/si'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import MarqueeBanner from '../components/MarqueeBanner'

const services = [
  {
    icon: <FiCode size={28} />,
    title: 'Full Stack Development',
    desc: 'Building fast, responsive, and interactive web applications using modern frameworks and tools.',
  },
  {
    icon: <FiServer size={28} />,
    title: 'API Development & Integration',
    desc: 'Creating robust APIs and server-side solutions with Node.js, Express, and cloud technologies.',
  },
  {
    icon: <FiDatabase size={28} />,
    title: 'Database Design',
    desc: 'Designing efficient database schemas and optimizing queries for optimal performance.',
  },
  {
    icon: <FiLayout size={28} />,
    title: 'UI/UX Design',
    desc: 'Designing beautiful websites that leave a lasting impression.',
  },
]

const techIcons = [
  { icon: <SiReact className="text-[#61DAFB]" />, name: 'React' },
  { icon: <SiJavascript className="text-[#F7DF1E]" />, name: 'JavaScript' },
  { icon: <SiNodedotjs className="text-[#339933]" />, name: 'Node.js' },
  { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' },
  { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind' },
  { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
  { icon: <SiHtml5 className="text-[#E34F26]" />, name: 'HTML5' },
  { icon: <SiCss className="text-[#264de4]" />, name: 'CSS' },
  { icon: <SiGit className="text-[#F05032]" />, name: 'Git' },
  { icon: <SiExpress className="text-white" />, name: 'Express' },
  { icon: <SiMysql className="text-[#47A248]" />, name: 'MySql' },
  { icon: <SiPostman className="text-[#FF6C37]" />, name: 'Postman' },
]

const timeline = [
  {
    year: '2025',
    title: 'MERN Stack Developer Intern',
    org: 'Webstack Academy',
    desc: 'Worked on building a music player app with React, Node.js, Express, and MongoDB',
  },
  {
    year: '2023',
    title: 'Started B.Tech CSE',
    org: 'RGUKT Basar',
    desc: 'Began my formal education in Computer Science and Engineering, discovered my passion for web dev.',
  },
  {
    year: '2022',
    title: 'First Line of Code',
    org: 'Self-Taught',
    desc: 'Wrote my first HTML page and fell in love with web development.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Page Header */}
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <div className="section-tag">Who I Am</div>
        <h1 className="text-6xl md:text-8xl font-display tracking-wider mb-6">
          ABOUT
        </h1>
        <div className="w-full h-px bg-border" />
      </section>

      {/* Main About */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Profile */}
          <div className="relative">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 border-2 border-accent/30" style={{ transform: 'translate(16px, 16px)' }} />
              <div className="relative bg-card border border-border p-8 flex flex-col items-center gap-6">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                  <span className="font-display text-6xl text-accent">J</span>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl font-display tracking-wider">JASHWANTH KUMAR B</h2>
                  <p className="text-accent text-sm font-mono mt-1">MERN Stack Developer</p>
                </div>
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-accent" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-accent" />
              </div>
            </div>
          </div>

          {/* Right - Bio */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-display tracking-wider leading-tight">
              DESIGNING THE EXTRAORDINARY, <br />
              <span className="text-accent">ONE PIXEL AT A TIME.</span>
            </h2>
            <p className="text-muted leading-relaxed">
              Hi! I'm Jashwanth Kumar, a passionate MERN Stack Developer currently pursuing
              my B.Tech in Computer Science and Engineering. I have a deep love for crafting beautiful,
              user-centric digital experiences that leave a lasting impression.
            </p>
            <p className="text-muted leading-relaxed">
              My journey started with curiosity about how websites work, and it quickly evolved into
              a full-fledged passion for design systems, component architecture, and performance
              optimization. I spend my time building real-world projects,
              and constantly sharpening my skills.
            </p>
            <p className="text-muted leading-relaxed">
              When I'm not coding, you'll find me binge-watching
              tech talks, or experimenting with the latest JavaScript frameworks.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="https://drive.google.com/uc?export=download&id=1idC8BdK_HcUFVfdCfqSsS1ZFiVcZqxz6" target="_blank" rel="noreferrer" className="btn-primary">
                Download Resume
              </a>
              <Link to="/contact" className="btn-outline group">
                Hire Me <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Icons Marquee */}
      <MarqueeBanner items={techIcons.map(t => t.name)} />

      {/* Services */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-tag justify-center">What I Offer</div>
          <h2 className="text-5xl font-display tracking-wider">SERVICES</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border p-8 group hover:border-accent/50 transition-all duration-300 card-hover"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-display tracking-wider mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-darker border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-tag justify-center">My Journey</div>
            <h2 className="text-5xl font-display tracking-wider">EXPERIENCE</h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-accent rounded-full transform md:-translate-x-1/2 mt-2 ring-4 ring-dark" />

                {/* Content */}
                <div className={`pl-8 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-accent font-mono text-xs mb-2 block">{item.year}</span>
                  <h3 className="text-lg font-display tracking-wider mb-1">{item.title}</h3>
                  <p className="text-accent/70 text-xs font-mono mb-2">{item.org}</p>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-tag justify-center">Tools & Technologies</div>
          <h2 className="text-5xl font-display tracking-wider">MY TECH STACK</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              className="bg-card border border-border p-4 flex flex-col items-center gap-3 group hover:border-accent/50 card-hover transition-all duration-300"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="text-xs text-muted uppercase tracking-wider group-hover:text-light transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
