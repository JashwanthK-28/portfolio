import { useState, useEffect } from 'react'
import profileImg from '../assets/profile.jpeg'
import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'

import MarqueeBanner from '../components/MarqueeBanner'
import Footer from '../components/Footer'
import DotGrid from '../components/DotGrid'

const techStack = ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express', 'Gemini']


function TypeWriter({ words }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500)
      return
    }
    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words])

  useEffect(() => {
    const interval = setInterval(() => setBlink((prev) => !prev), 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span>
      {`${words[index].substring(0, subIndex)}`}
      <span className={`text-accent ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-dark">
      {/* HERO */}
      <section className="min-h-screen relative flex flex-col justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-accent/3 blur-2xl" />
          {/* DotGrid background */}
          <div className="absolute inset-0 opacity-20" style={{ pointerEvents: 'auto' }}>
            <DotGrid
              dotSize={4}
              gap={28}
              baseColor="#2a2a2a"
              activeColor="#01BAEF"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="section-tag">
              Currently Studying Computer Science & Engineering
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display tracking-wider leading-none">
              HEY THERE,<br />
              I'M{' '}
              <span className="text-accent">
                JASHWANTH KUMAR
              </span>
            </h1>

            <p className="text-xl text-muted font-medium">
              <TypeWriter words={['MERN Stack Developer', 'Creative Coder', 'Problem Solver']} />
            </p>

            <p className="text-muted text-base leading-relaxed max-w-md">
              I craft beautiful, high-performance web experiences that blend design excellence
              with cutting-edge technology. Turning ideas into stunning digital realities.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link to="/projects" className="btn-primary">
                View Projects <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn-outline">
                Hire Me
              </Link>
            </div>
          </div>

          {/* Right - Profile Visual */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Accent border frame */}
              <div className="absolute inset-0 border-2 border-accent/30" style={{ transform: 'translate(12px, 12px)' }} />
              {/* Profile image */}
              <div className="relative w-full h-full bg-card border border-border overflow-hidden">
                <img
                  src={profileImg}
                  alt="Jashwanth Kumar"
                  className="w-full h-full object-cover object-top"
                />
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-accent" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-accent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-dark px-4 py-2 font-mono text-xs font-bold">
                Available for Work ✓
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* MARQUEE */}
      <MarqueeBanner items={techStack} />

      {/* ABOUT SNIPPET */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-tag">About Me</div>
            <h2 className="text-5xl md:text-6xl font-display tracking-wider mb-6 leading-tight">
              DESIGNING THE<br />
              <span className="text-accent">EXTRAORDINARY</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              I'm a passionate MERN Stack Developer and Problem Solver with a strong foundation
              in Computer Science. I love creating digital experiences that are not just functional,
              but visually stunning and highly engaging.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Currently pursuing my degree while working on real-world projects that push the
              boundaries of modern web development. I believe in the power of clean code, 
              thoughtful design, and constant learning.
            </p>
            <Link to="/about" className="btn-outline group">
              Know More <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '10+', label: 'Technologies' },
              { number: '100%', label: 'Dedication' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border p-6 group hover:border-accent/50 transition-all duration-300">
                <div className="text-4xl font-display text-accent mb-2 group-hover:scale-110 transition-transform inline-block">
                  {stat.number}
                </div>
                <div className="text-muted text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display tracking-wider text-dark mb-3">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-dark/70 text-sm">
              Got a project in mind? Let's build something extraordinary.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-dark text-accent border-2 border-dark font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-transparent hover:text-dark transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
          >
            Get In Touch <FiArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
