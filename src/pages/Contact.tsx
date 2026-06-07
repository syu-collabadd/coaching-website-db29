import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { CheckCircle, Send, Mail, MapPin, Clock } from 'lucide-react'

const socials = [
  {
    name: 'Instagram',
    handle: '@luminarycoach',
    url: '#',
    bg: 'bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'Luminary Life Coaching',
    url: '#',
    bg: 'bg-[#1877F2]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'Luminary Life Coaching',
    url: '#',
    bg: 'bg-[#FF0000]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Luminary Life Coaching',
    url: '#',
    bg: 'bg-[#0A66C2]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@luminarycoach',
    url: '#',
    bg: 'bg-[#010101]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    handle: 'Luminary Coaching',
    url: '#',
    bg: 'bg-[#BD081C]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    name: 'Podcast',
    handle: 'The Luminary Podcast',
    url: '#',
    bg: 'bg-gradient-to-br from-purple-600 to-purple-800',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 9c3.315 0 6 2.686 6 6H6c0-3.314 2.685-6 6-6z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-terra-100/40 to-cream text-center">
        <ScrollReveal className="max-w-2xl mx-auto">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500 mb-4">Let's Connect</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal-800 mb-4">
            Say <em className="text-gold-500 italic">Hello</em>
          </h1>
          <p className="font-sans text-terra-600 leading-relaxed">
            Have a question, a kind word, or a feeling that you're ready to begin?
            I'd love to hear from you.
          </p>
          <div className="gold-divider mt-8" />
        </ScrollReveal>
      </section>

      {/* Social links */}
      <section className="py-12 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-8">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500 mb-3">Find Me Here</p>
            <h2 className="font-serif text-3xl font-light text-charcoal-800">Follow the Journey</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {socials.map(({ name, handle, url, bg, icon }) => (
                <a
                  key={name}
                  href={url}
                  className="flex flex-col items-center gap-3 p-5 bg-white/60 rounded-2xl border border-gold-100 hover:border-gold-300 hover:shadow-[0_8px_24px_rgba(212,175,55,0.12)] transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                  </div>
                  <div className="text-center">
                    <p className="font-sans text-xs font-semibold text-charcoal-800">{name}</p>
                    <p className="font-sans text-[10px] text-terra-400 truncate max-w-[100px]">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Info cards + Contact form */}
      <section className="py-16 px-6 bg-gradient-to-b from-cream to-terra-100/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <ScrollReveal className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500 mb-3">Contact Info</p>
                <h2 className="font-serif text-3xl font-light text-charcoal-800">
                  I'm here for you.
                </h2>
              </div>

              <div className="space-y-5 mt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold-500 w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-terra-400 mb-0.5">Email</p>
                    <p className="font-sans text-sm text-charcoal-800">hello@luminarycoaching.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold-500 w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-terra-400 mb-0.5">Location</p>
                    <p className="font-sans text-sm text-charcoal-800">Virtual Worldwide · In-person available</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-gold-500 w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-terra-400 mb-0.5">Response Time</p>
                    <p className="font-sans text-sm text-charcoal-800">Within 24–48 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gold-50/60 rounded-2xl border border-gold-200/50 mt-4">
                <p className="font-serif text-lg text-charcoal-800 italic mb-2">
                  "Every journey begins with the courage to reach out."
                </p>
                <p className="font-sans text-xs text-terra-400">Don't wait for the perfect moment. This is it.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="md:col-span-3" delay={150}>
            <div className="bg-white/70 rounded-2xl border border-gold-200/60 p-8 shadow-[0_8px_40px_rgba(212,175,55,0.08)]">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="text-gold-500 w-14 h-14 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-2">Message received!</h3>
                  <p className="font-sans text-terra-600">
                    Thank you for reaching out. I'll be in touch within 24 hours.
                    In the meantime, take a deep breath — you already took the first step.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-6">Send a Message</h3>
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs tracking-widest uppercase text-terra-500 mb-2">Name *</label>
                        <input
                          type="text" name="name" required value={form.name} onChange={handle}
                          className="w-full px-4 py-3 bg-cream border border-gold-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-terra-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs tracking-widest uppercase text-terra-500 mb-2">Email *</label>
                        <input
                          type="email" name="email" required value={form.email} onChange={handle}
                          className="w-full px-4 py-3 bg-cream border border-gold-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-terra-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-terra-500 mb-2">Subject</label>
                      <select
                        name="subject" value={form.subject} onChange={handle}
                        className="w-full px-4 py-3 bg-cream border border-gold-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        <option value="">Choose a topic...</option>
                        <option>I'd like to book a Discovery Call</option>
                        <option>I have a question about programs</option>
                        <option>Masterclass / group program inquiry</option>
                        <option>Media or speaking inquiry</option>
                        <option>Just saying hello!</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-widest uppercase text-terra-500 mb-2">Message *</label>
                      <textarea
                        name="message" required value={form.message} onChange={handle} rows={5}
                        className="w-full px-4 py-3 bg-cream border border-gold-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-terra-300 resize-none"
                        placeholder="What's on your heart? I'm listening..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-gold-500 text-charcoal-900 font-sans text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-gold-400 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-900 py-10 px-6 text-center">
        <p className="font-serif text-2xl text-gold-400/80 font-light tracking-wide mb-2">Luminary</p>
        <p className="font-sans text-xs tracking-widest uppercase text-cream/30">Life Coaching</p>
        <p className="font-sans text-xs text-cream/20 mt-6">© 2026 Luminary Life Coaching. All rights reserved.</p>
      </footer>
    </div>
  )
}
