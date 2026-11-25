import profileImg from "../assets/profile.jpeg";
import { FiArrowRight, FiTerminal } from "react-icons/fi";
import TiltCard from "../components/TiltCard";
import DecryptedText from "../components/DecryptedText";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      {/* HERO */}
      <section className="min-h-screen relative flex flex-col justify-center overflow-hidden nb-grid-bg">
        {/* Geometric Neo-Brutalist Background Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="hidden lg:block absolute top-28 right-12 w-24 h-24 bg-nb-coral border-[3px] border-black shadow-nb rotate-12 opacity-90" />
          <div className="hidden lg:block absolute bottom-28 left-10 w-16 h-16 bg-nb-cyan border-[3px] border-black shadow-nb -rotate-6" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          {/* Left Content */}
          <div className="flex flex-col gap-6 items-start">
            <div className="inline-flex items-center gap-2 bg-nb-lime text-black font-mono font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 border-[3px] border-black shadow-nb-sm -rotate-1">
              <span className="w-2.5 h-2.5 bg-black inline-block animate-pulse" />
              MERN Stack Developer // Open to Work
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display tracking-tight leading-[0.95] text-black uppercase">
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
              <span className="inline-block bg-accent px-3 py-1 mt-2 border-[3px] border-black shadow-nb">
                <DecryptedText
                  text="JASHWANTH KUMAR"
                  animateOn="inViewHover"
                  speed={60}
                  maxIterations={10}
                  revealDirection="center"
                />
              </span>
            </h1>

            <div className="bg-white border-[3px] border-black shadow-nb p-5 max-w-lg">
              <p className="text-black font-medium text-base leading-relaxed">
                I craft bold, high-performance web experiences that blend
                design excellence with cutting-edge technology. Turning ideas
                into unforgettable digital products.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-1">
              <a href="#projects" className="btn-primary">
                View Projects <FiArrowRight size={18} />
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
            <TiltCard className="w-72 sm:w-80 md:w-96">
              {/* Offset brutalist backing block */}
              <div
                className="absolute inset-0 bg-nb-cyan border-[3px] border-black"
                style={{ transform: "translate(14px, 14px)" }}
              />

              {/* Window Frame */}
              <div className="relative w-full bg-white border-[3px] border-black overflow-hidden group">
                {/* Window Title Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-accent border-b-[3px] border-black">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-nb-coral border-2 border-black inline-block" />
                    <span className="w-3 h-3 bg-white border-2 border-black inline-block" />
                    <span className="w-3 h-3 bg-nb-lime border-2 border-black inline-block" />
                  </div>
                  <span className="font-mono font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 text-black">
                    <FiTerminal size={12} /> PROFILE.JPEG
                  </span>
                </div>

                {/* Image */}
                <div className="aspect-square w-full overflow-hidden bg-surface">
                  <img
                    src={profileImg}
                    alt="Jashwanth Kumar"
                    className="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Bottom Caption Strip */}
                <div className="px-4 py-2.5 bg-white border-t-[3px] border-black flex items-center justify-between font-mono text-xs font-bold uppercase">
                  <span>HYDERABAD, IN</span>
                  <span className="bg-black text-accent px-2 py-0.5">B.TECH CSE</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-accent border-y-[3px] border-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-block bg-white border-2 border-black px-3 py-1 font-mono text-xs font-bold uppercase mb-3 shadow-nb-sm">
              Ready to ship
            </div>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight uppercase text-black mb-2">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-black font-medium text-base">
              Got a project in mind? Let's build something extraordinary.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-black text-accent border-[3px] border-black shadow-[6px_6px_0px_0px_#FFFFFF] font-mono font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black hover:shadow-nb-md active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 flex items-center gap-2 whitespace-nowrap"
          >
            Get In Touch <FiArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
