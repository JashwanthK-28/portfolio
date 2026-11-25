import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-[3px] border-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-accent border-2 border-white flex items-center justify-center group-hover:bg-nb-cyan transition-colors">
                <span className="font-logo text-black text-xl leading-none">
                  J
                </span>
              </div>
              <span className="font-display text-xl tracking-wider uppercase text-white">
                JASHWANTH KUMAR BOLLA
              </span>
            </a>
            <p className="text-neutral-300 font-mono text-xs text-center md:text-left">
              Designing the extraordinary, one pixel at a time.
            </p>
          </div>

          {/* Quick Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/JashwanthK-28/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white text-black border-2 border-white px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-accent transition-colors"
            >
              <FiGithub size={16} /> GitHub <FiArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/jashwanth-kumar-bolla-a87839317/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-nb-cyan text-black border-2 border-white px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-accent transition-colors"
            >
              <FiLinkedin size={16} /> LinkedIn <FiArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t-2 border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-neutral-400 font-mono text-xs">
            © {new Date().getFullYear()} Jashwanth Kumar Bolla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
