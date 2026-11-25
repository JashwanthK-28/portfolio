import {
  FiCode,
  FiDatabase,
  FiServer,
  FiArrowRight,
  FiLayout,
} from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiHtml5,
  SiGit,
  SiNextdotjs,
  SiExpress,
  SiCss,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import MarqueeBanner from "../components/MarqueeBanner";

const services = [
  {
    icon: <FiCode size={26} />,
    bg: "bg-accent",
    title: "Full Stack Development",
    desc: "Building fast, responsive, and interactive web applications using modern frameworks and tools.",
  },
  {
    icon: <FiServer size={26} />,
    bg: "bg-nb-cyan",
    title: "API Development & Integration",
    desc: "Creating robust APIs and server-side solutions with Node.js, Express, and cloud technologies.",
  },
  {
    icon: <FiDatabase size={26} />,
    bg: "bg-nb-lime",
    title: "Database Design",
    desc: "Designing efficient database schemas and optimizing queries for optimal performance.",
  },
  {
    icon: <FiLayout size={26} />,
    bg: "bg-nb-coral",
    title: "UI/UX Design",
    desc: "Designing bold, memorable websites that leave a lasting impression.",
  },
];

const techIcons = [
  { icon: <SiReact className="text-[#0284C7]" />, name: "React" },
  { icon: <SiJavascript className="text-[#CA8A04]" />, name: "JavaScript" },
  { icon: <SiNodedotjs className="text-[#16A34A]" />, name: "Node.js" },
  { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
  { icon: <SiTailwindcss className="text-[#0891B2]" />, name: "Tailwind" },
  { icon: <SiMongodb className="text-[#15803D]" />, name: "MongoDB" },
  { icon: <SiHtml5 className="text-[#EA580C]" />, name: "HTML5" },
  { icon: <SiCss className="text-[#2563EB]" />, name: "CSS" },
  { icon: <SiGit className="text-[#DC2626]" />, name: "Git" },
  { icon: <SiExpress className="text-black" />, name: "Express" },
  { icon: <SiMysql className="text-[#0369A1]" />, name: "MySQL" },
  { icon: <SiPostman className="text-[#EA580C]" />, name: "Postman" },
];

const timeline = [
  {
    year: "2025",
    badgeBg: "bg-accent",
    title: "MERN Stack Developer Intern",
    org: "Webstack Academy",
    desc: "Worked on building a music player app with React, Node.js, Express, and MongoDB.",
  },
  {
    year: "2023",
    badgeBg: "bg-nb-cyan",
    title: "Started B.Tech CSE",
    org: "RGUKT Basar",
    desc: "Began my formal education in Computer Science and Engineering, discovered my passion for web dev.",
  },
  {
    year: "2022",
    badgeBg: "bg-nb-lime",
    title: "First Line of Code",
    org: "Self-Taught",
    desc: "Wrote my first HTML page and fell in love with web development.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Page Header */}
      <section className="pt-28 pb-12 max-w-7xl mx-auto px-6">
        <div className="section-tag">Who I Am</div>
        <h1 className="text-6xl md:text-8xl font-display tracking-tight uppercase text-black mb-6">
          ABOUT
        </h1>
        <div className="w-full h-[3px] bg-black" />
      </section>

      {/* Main About */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="nb-card p-8 md:p-12 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight leading-tight uppercase text-black">
            DESIGNING THE EXTRAORDINARY, <br />
            <span className="inline-block bg-nb-cyan px-3 py-1 mt-2 border-[3px] border-black shadow-nb-sm">
              ONE PIXEL AT A TIME.
            </span>
          </h2>
          <p className="text-neutral-800 font-medium leading-relaxed max-w-2xl">
            Hi! I'm Jashwanth Kumar, a passionate MERN Stack Developer
            currently pursuing my B.Tech in Computer Science and Engineering.
            I have a deep love for crafting bold, user-centric digital
            experiences that leave a lasting impression.
          </p>
          <p className="text-neutral-800 font-medium leading-relaxed max-w-2xl">
            My journey started with curiosity about how websites work, and it
            quickly evolved into a full-fledged passion for design systems,
            component architecture, and performance optimization. I spend my
            time building real-world projects and constantly sharpening my
            skills.
          </p>
          <p className="text-neutral-800 font-medium leading-relaxed max-w-2xl">
            When I'm not coding, you'll find me binge-watching tech talks or
            experimenting with the latest JavaScript frameworks.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              href="https://drive.google.com/uc?export=download&id=1idC8BdK_HcUFVfdCfqSsS1ZFiVcZqxz6"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Download Resume
            </a>
            <a href="#contact" className="btn-outline group">
              Hire Me{" "}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Icons Marquee */}
      <div className="mt-12">
        <MarqueeBanner items={techIcons.map((t) => t.name)} />
      </div>

      {/* Services */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-tag">What I Offer</div>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight uppercase text-black">
            SERVICES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="nb-card nb-card-hover p-8 group flex flex-col items-start"
            >
              <div
                className={`w-14 h-14 ${service.bg} border-[3px] border-black shadow-nb-sm flex items-center justify-center text-black mb-5 group-hover:rotate-3 transition-transform`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-display tracking-tight uppercase mb-3 text-black">
                {service.title}
              </h3>
              <p className="text-neutral-700 font-medium text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-surface border-y-[3px] border-black nb-dots-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-tag">My Journey</div>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight uppercase text-black">
              EXPERIENCE
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[3px] bg-black transform md:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Square Node */}
                <div
                  className={`absolute left-3 md:left-1/2 w-5 h-5 ${item.badgeBg} border-[3px] border-black transform -translate-x-1/2 mt-5 rotate-45 z-10`}
                />

                {/* Content */}
                <div
                  className={`pl-10 md:pl-0 w-full md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
                  }`}
                >
                  <div className="nb-card p-6 text-left">
                    <span
                      className={`inline-block ${item.badgeBg} border-2 border-black px-2.5 py-0.5 font-mono font-bold text-xs text-black mb-3 shadow-nb-sm`}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-lg font-display uppercase tracking-tight mb-1 text-black">
                      {item.title}
                    </h3>
                    <p className="text-black/70 text-xs font-mono font-bold uppercase mb-2">
                      {item.org}
                    </p>
                    <p className="text-neutral-700 text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-tag">Tools & Technologies</div>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight uppercase text-black">
            MY TECH STACK
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              className="bg-white border-[3px] border-black shadow-nb p-5 flex flex-col justify-center items-center gap-3 group hover:bg-accent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-nb-md transition-all duration-150"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-150">
                {tech.icon}
              </span>
              <span className="text-xs font-mono font-bold text-black uppercase tracking-wider">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
