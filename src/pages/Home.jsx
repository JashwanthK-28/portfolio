import { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpeg";
import { FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";
import TiltCard from "../components/TiltCard";
import SideRays from "../components/ui/SideRays";
import DecryptedText from "../components/DecryptedText";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark">
      {/* HERO */}
      <section className="min-h-screen relative flex flex-col justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-dark to-dark">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 z-0">
            <SideRays
              speed={2.5}
              rayColor1="#01BAEF"
              rayColor2="#96c8ff"
              intensity={1.5}
              spread={2}
              origin="top-right"
              tilt={0}
              saturation={1.5}
              blend={0.75}
              falloff={1.6}
              opacity={0.8}
            />
          </div>
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-accent/3 blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display tracking-wider leading-none">
              <DecryptedText
                text="HEY THERE,"
                animateOn="inViewHover"
                speed={50}
                maxIterations={10}
              />
              <br />
              <DecryptedText
                text="I'M "
                animateOn="inViewHover"
                speed={50}
                maxIterations={10}
              />
              <span className="text-accent">
                <DecryptedText
                  text="JASHWANTH KUMAR"
                  animateOn="inViewHover"
                  speed={60}
                  maxIterations={10}
                  revealDirection="center"
                />
              </span>
            </h1>

            <p className="text-muted text-base leading-relaxed max-w-md">
              I craft beautiful, high-performance web experiences that blend
              design excellence with cutting-edge technology. Turning ideas into
              stunning digital realities.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#projects" className="btn-primary">
                View Projects <FiArrowRight />
              </a>
              <a href="#contact" className="btn-outline">
                Hire Me
              </a>
            </div>
          </div>

          {/* Right - Profile Visual */}
          <div
            className="flex justify-center lg:justify-end relative w-full z-20"
            style={{ perspective: 1000 }}
          >
            <TiltCard className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Accent border frame */}
              <div
                className="absolute inset-0 border-2 border-accent/30"
                style={{ transform: "translate(12px, 12px)" }}
              />
              {/* Profile image */}
              <div className="relative w-full h-full bg-card border border-border overflow-hidden group">
                <img
                  src={profileImg}
                  alt="Jashwanth Kumar"
                  className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Grain Overlay on Hover */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 z-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </TiltCard>
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
          <a
            href="#contact"
            className="bg-dark text-accent border-2 border-dark font-bold px-8 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-transparent hover:text-dark transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
          >
            Get In Touch <FiArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}
