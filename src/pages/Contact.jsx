import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin} from 'react-icons/fi'
import Footer from '../components/Footer'

const socials = [
  { icon: <FiGithub size={20} />, label: 'GitHub', href: 'https://github.com/JashwanthK-28/', username: '@JashwanthK-28' },
  { icon: <FiLinkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jashwanth-kumar-bolla-a87839317/', username: 'Jashwanth Kumar Bolla' },
]

const contactInfo = [
  { icon: <FiMail size={20} />, label: 'Email', value: 'jashwanthkumarbolla@gmail.com', href: 'mailto:jashwanth@example.com' },
  { icon: <FiPhone size={20} />, label: 'Phone', value: '+91 98660 02228', href: 'tel:+919866002228' },
  { icon: <FiMapPin size={20} />, label: 'Location', value: 'Hyderabad, India', href: null },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <div className="section-tag">Let's Talk</div>
        <h1 className="text-6xl md:text-8xl font-display tracking-wider mb-6">
          GET IN <span className="text-accent">TOUCH</span>
        </h1>
        <div className="w-full h-px bg-border" />
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-display tracking-wider mb-4">
                LET'S BUILD SOMETHING <br />
                <span className="text-accent">EXTRAORDINARY</span>
              </h2>
              <p className="text-muted leading-relaxed">
                Have a project in mind? Want to collaborate or just say hello?
                I'm always open to discussing new opportunities, creative ideas, or partnerships.
                Fill out the form or reach out directly.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center text-accent group-hover:border-accent transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-widest mb-0.5">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-light hover:text-accent transition-colors font-medium">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-light font-medium">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs text-muted uppercase tracking-widest mb-4">Find me on</p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 border border-border p-3 group hover:border-accent/50 transition-all duration-300 card-hover"
                  >
                    <div className="text-muted group-hover:text-accent transition-colors">
                      {s.icon}
                    </div>
                    <div>
                      <div className="text-xs font-medium group-hover:text-accent transition-colors">{s.label}</div>
                      <div className="text-muted text-xs font-mono">{s.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability banner */}
            <div className="bg-accent/10 border border-accent/30 p-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <p className="text-accent text-sm font-medium">
                Currently available for freelance projects & full-time roles
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card border border-border p-8">
            <h3 className="text-2xl font-display tracking-wider mb-8">SEND A MESSAGE</h3>

            {status === 'success' && (
              <div className="mb-6 bg-accent/10 border border-accent/30 p-4 text-accent text-sm font-medium">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-muted">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-darker border border-border px-4 py-3 text-light text-sm outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-muted">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-darker border border-border px-4 py-3 text-light text-sm outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="bg-darker border border-border px-4 py-3 text-light text-sm outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="bg-darker border border-border px-4 py-3 text-light text-sm outline-none focus:border-accent transition-colors resize-none placeholder:text-muted/50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
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

      {/* Map-like decorative section */}
      <section className="py-20 bg-darker border-y border-border overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl font-display tracking-wider mb-2">
                BASED IN <span className="text-accent">INDIA</span>
              </h2>
              <p className="text-muted text-sm">Open to remote work worldwide</p>
            </div>
            <div className="text-muted font-mono text-xs text-right">
              <div>20.5937° N, 78.9629° E</div>
              <div className="text-accent mt-1">UTC+5:30</div>
            </div>
          </div>
        </div>
        {/* Background grid decoration */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(1,186,239,1) 1px, transparent 1px), linear-gradient(90deg, rgba(1,186,239,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </section>

      <Footer />
    </div>
  )
}
