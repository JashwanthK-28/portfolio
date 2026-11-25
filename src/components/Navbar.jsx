import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.path.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = "#" + section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="relative flex items-center justify-between w-full max-w-4xl border-[3px] border-black bg-white px-4 py-2.5 shadow-nb-md text-black">
        {/* Logo */}
        <a
          href="#home"
          className="flex-shrink-0 flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 bg-accent border-2 border-black shadow-nb-sm flex items-center justify-center group-hover:bg-nb-cyan transition-colors duration-150">
            <span className="font-logo font-black text-black text-lg leading-none">
              J
            </span>
          </div>
          <span className="hidden sm:inline font-mono font-bold text-xs tracking-widest uppercase">
            BJK.DEV
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.path;
            return (
              <a
                key={link.name}
                href={link.path}
                className={`px-3.5 py-1.5 border-2 font-nav font-bold uppercase tracking-wider text-xs transition-all duration-150 ${
                  isActive
                    ? "bg-accent border-black text-black shadow-nb-sm -translate-y-0.5"
                    : "border-transparent text-black hover:border-black hover:bg-surface"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="https://drive.google.com/uc?export=download&id=1idC8BdK_HcUFVfdCfqSsS1ZFiVcZqxz6"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 font-mono font-bold text-xs uppercase tracking-wider border-2 border-transparent hover:border-black hover:bg-surface transition-all duration-150"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="bg-nb-cyan text-black border-2 border-black shadow-nb-sm px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-nb active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden w-9 h-9 flex items-center justify-center border-2 border-black bg-accent text-black shadow-nb-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 right-0 bg-paper border-[3px] border-black shadow-nb-lg flex-col items-stretch gap-3 p-6 transition-all duration-200 md:hidden ${
            isOpen ? "flex opacity-100" : "hidden opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-mono font-bold text-base uppercase tracking-widest px-4 py-2.5 border-2 border-black transition-all ${
                activeSection === link.path
                  ? "bg-accent text-black shadow-nb-sm"
                  : "bg-white text-black hover:bg-surface"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="w-full h-[3px] bg-black my-1" />
          <a
            href="https://drive.google.com/uc?export=download&id=1idC8BdK_HcUFVfdCfqSsS1ZFiVcZqxz6"
            target="_blank"
            rel="noreferrer"
            className="btn-outline justify-center text-center"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary justify-center text-center bg-nb-cyan"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </div>
  );
}
