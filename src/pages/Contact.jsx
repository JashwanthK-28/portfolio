import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const socials = [
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    href: "https://github.com/JashwanthK-28/",
    username: "@JashwanthK-28",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jashwanth-kumar-bolla-a87839317/",
    username: "Jashwanth Kumar Bolla",
  },
];

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: "jashwanthkumarbolla@gmail.com",
    href: "mailto:jashwanthkumarbolla@gmail.com",
  },
  {
    icon: <FiPhone size={20} />,
    label: "Phone",
    value: "+91 98660 02228",
    href: "tel:+919866002228",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <section className="pt-28 pb-12 max-w-7xl mx-auto px-6">
        <div className="section-tag">Let's Talk</div>
        <h1 className="text-6xl md:text-8xl font-display tracking-tight uppercase text-black mb-6">
          GET IN{" "}
          <span className="inline-block bg-nb-coral px-3 border-[3px] border-black shadow-nb">
            TOUCH
          </span>
        </h1>
        <div className="w-full h-[3px] bg-black" />
      </section>

      {/* Main Content */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display tracking-tight uppercase text-black mb-4">
                LET'S BUILD SOMETHING <br />
                <span className="bg-accent px-2 border-2 border-black inline-block mt-1">
                  EXTRAORDINARY
                </span>
              </h2>
              <p className="text-neutral-800 font-medium leading-relaxed">
                Have a project in mind? Want to collaborate or just say hello?
                I'm always open to discussing new opportunities, creative ideas,
                or partnerships. Fill out the form or reach out directly.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-accent border-[3px] border-black shadow-nb-sm flex items-center justify-center text-black group-hover:bg-nb-cyan transition-colors shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-neutral-600 uppercase tracking-widest mb-0.5">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-black hover:underline decoration-2 underline-offset-4 font-bold break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-black font-bold">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-mono font-bold text-black uppercase tracking-widest mb-3">
                Find me on
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nb-card nb-card-hover p-4 flex items-center gap-3 hover:bg-nb-cyan"
                  >
                    <div className="text-black">{s.icon}</div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono font-bold uppercase text-black">
                        {s.label}
                      </div>
                      <div className="text-neutral-700 text-xs font-mono truncate">
                        {s.username}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability banner */}
            <div className="bg-nb-lime border-[3px] border-black shadow-nb p-4 flex items-center gap-3">
              <div className="w-3 h-3 bg-black animate-pulse shrink-0" />
              <p className="text-black text-sm font-mono font-bold">
                Currently available for freelance projects & full-time roles
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="nb-card shadow-nb-lg p-8">
            <h3 className="text-2xl font-display tracking-tight uppercase text-black mb-6">
              SEND A MESSAGE
            </h3>

            {status === "success" && (
              <div className="mb-6 bg-nb-lime border-[3px] border-black shadow-nb-sm p-4 text-black text-sm font-mono font-bold">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-widest text-black">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-paper border-[3px] border-black px-4 py-3 text-black font-medium text-sm outline-none focus:bg-accent/20 focus:shadow-nb-sm transition-all placeholder:text-neutral-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-widest text-black">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-paper border-[3px] border-black px-4 py-3 text-black font-medium text-sm outline-none focus:bg-accent/20 focus:shadow-nb-sm transition-all placeholder:text-neutral-500"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-black">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="bg-paper border-[3px] border-black px-4 py-3 text-black font-medium text-sm outline-none focus:bg-accent/20 focus:shadow-nb-sm transition-all placeholder:text-neutral-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-black">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="bg-paper border-[3px] border-black px-4 py-3 text-black font-medium text-sm outline-none focus:bg-accent/20 focus:shadow-nb-sm transition-all resize-none placeholder:text-neutral-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Location decorative section */}
      <section className="py-16 bg-surface border-t-[3px] border-black nb-dots-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="nb-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display tracking-tight uppercase text-black mb-1">
                BASED IN{" "}
                <span className="bg-nb-cyan px-2 border-2 border-black">
                  INDIA
                </span>
              </h2>
              <p className="text-neutral-700 font-medium text-sm">
                Open to remote work worldwide
              </p>
            </div>
            <div className="bg-black text-accent px-4 py-3 font-mono text-xs font-bold text-center md:text-right border-2 border-black">
              <div>20.5937° N, 78.9629° E</div>
              <div className="text-white mt-1">UTC+5:30</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
