import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.path.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = "#" + section;
        }
      }
      if (current) setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center border w-full max-w-3xl max-md:justify-between border-slate-700 bg-dark/80 backdrop-blur-lg px-4 py-3 rounded-full text-white text-sm shadow-xl">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0 flex items-center gap-2 group ml-2">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(1,186,239,0.4)]">
            <span className="font-logo font-bold text-dark text-lg leading-none pt-1">
              J
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 mx-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path} 
              className={`px-4 py-1.5 border rounded-full font-nav uppercase tracking-widest text-[11px] transition-all duration-300 ${
                activeSection === link.path 
                  ? 'bg-white/10 border-white/20 text-accent' 
                  : 'border-transparent hover:border-white/20 text-light hover:text-accent'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3 mr-2">
          <a
            href="https://drive.google.com/uc?export=download&id=1idC8BdK_HcUFVfdCfqSsS1ZFiVcZqxz6"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent px-3 py-2 text-xs font-medium transition-colors font-nav tracking-wide"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="bg-white hover:shadow-[0px_0px_20px_5px] shadow-[0px_0px_15px_3px] hover:shadow-white/40 shadow-white/30 text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-slate-100 transition duration-300 font-nav tracking-wide"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors mr-2"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-20 left-0 bg-darker w-full flex-col items-center gap-4 py-8 rounded-3xl border border-slate-800 transition-all duration-300 shadow-2xl ${
            isOpen ? "flex opacity-100" : "hidden opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-nav text-lg uppercase tracking-widest px-6 py-2 rounded-full transition-colors ${
                activeSection === link.path ? 'bg-white/10 text-accent' : 'hover:text-accent'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="w-full h-px bg-slate-800 my-2 max-w-[200px]" />
          <a
            href="https://drive.google.com/uc?export=download&id=1idC8BdK_HcUFVfdCfqSsS1ZFiVcZqxz6"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-600 hover:bg-slate-800 px-8 py-3 rounded-full text-sm font-medium transition font-nav tracking-wide"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-8 py-3 rounded-full text-sm font-bold hover:bg-slate-100 transition duration-300 font-nav tracking-wide"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </div>
  );
}
