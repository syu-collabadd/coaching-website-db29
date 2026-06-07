import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { Sparkles, Star, Heart, Zap, CheckCircle, Send } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Discovery Intensive',
    subtitle: 'Single Session',
    price: 'Complimentary',
    description: 'A 60-minute deep-dive conversation to explore where you are, where you want to go, and whether we\'re the right fit to walk this path together.',
    features: ['60-minute video call', 'Values & vision exploration', 'Personalized next-step recommendations', 'No obligation or pressure'],
    accent: 'border-gold-300 bg-gold-50/50',
    badge: 'Free',
    badgeColor: 'bg-gold-500 text-charcoal-900',
  },
  {
    icon: Heart,
    title: 'The Awakening',
    subtitle: '4-Week Program',
    price: 'Ask for Pricing',
    description: 'A focused 4-week journey for women at a crossroads. We clear the fog, define your north star, and create a tangible plan for your next chapter.',
    features: ['4 weekly 60-min coaching sessions', 'Custom workbook & exercises', 'Voxer support between sessions', 'Personalized transformation roadmap'],
    accent: 'border-terra-300 bg-terra-50/50',
    badge: 'Popular',
    badgeColor: 'bg-terra-400 text-white',
  },
  {
    icon: Star,
    title: 'The Rising',
    subtitle: '3-Month Signature Program',
    price: 'Ask for Pricing',
    description: 'The full transformation experience. Three months of deep, committed coaching for women who are done with half-measures and ready for their breakthrough.',
    features: ['12 bi-weekly coaching sessions', 'Full access to masterclass library', 'Weekly voice note check-ins', 'Values, vision & purpose deep-dive', 'Accountability partnership'],
    accent: 'border-sage-300 bg-sage-50/50',
    badge: 'Signature',
    badgeColor: 'bg-sage-500 text-white',
  },
  {
    icon: Zap,
    title: 'The Luminary Masterclass',
    subtitle: 'Group Program',
    price: 'Ask for Pricing',
    description: 'A live online masterclass series for women who want transformation in community. Powerful curriculum, group coaching, and lifelong sisterhood.',
    features: ['6 live masterclass sessions', 'Private community access', 'Guest expert sessions', 'Lifetime access to recordings', 'Bonus 1:1 session'],
    accent: 'border-gold-400 bg-gold-50/40',
    badge: 'Next Cohort Soon',
    badgeColor: 'bg-charcoal-800 text-gold-400',
  },
]

function DiscoveryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <CheckCircle className="text-gold-500 w-12 h-12 mx-auto mb-4" />
        <h3 className="font-serif text-2xl text-charcoal-800 mb-2">You did it!</h3>
        <p className="font-sans text-terra-600">Your Discovery Call request has been received. I'll be in touch within 24 hours to schedule our time together.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-sans text-xs tracking-widest uppercase text-terra-500 mb-2">First Name *</label>
          <input
            type="text" name="name" required value={form.name} onChange={handle}
            className="w-full px-4 py-3 bg-white border border-gold-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-terra-300"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-sans text-xs tracking-widest uppercase text-terra-500 mb-2">Email *</label>
          <input
            type="email" name="email" required value={form.email} onChange={handle}
            className="w-full px-4 py-3 bg-white border border-gold-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-terra-300"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block font-sans text-xs tracking-widest uppercase text-terra-500 mb-2">Phone (optional)</label>
        <input
          type="tel" name="phone" value={form.phone} onChange={handle}
          className="w-full px-4 py-3 bg-white border border-gold-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-terra-300"
          placeholder="(555) 000-0000"
        />
      </div>
      <div>
        <label className="block font-sans text-xs tracking-widest uppercase text-terra-500 mb-2">What brings you here? *</label>
        <textarea
          name="message" required value={form.message} onChange={handle} rows={4}
          className="w-full px-4 py-3 bg-white border border-gold-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-terra-300 resize-none"
          placeholder="Tell me a little about where you are and what you're hoping for..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-gold-500 text-charcoal-900 font-sans text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-gold-400 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Request My Free Discovery Call
      </button>
    </form>
  )
}

function MasterclassForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', goal: '' })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="text-sage-500 w-10 h-10 mx-auto mb-3" />
        <h3 className="font-serif text-xl text-charcoal-800 mb-2">You're on the list!</h3>
        <p className="font-sans text-terra-600 text-sm">We'll send you all the details for the next Luminary Masterclass cohort.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block font-sans text-xs tracking-widest uppercase text-terra-500 mb-2">Name *</label>
        <input
          type="text" name="name" required value={form.name} onChange={handle}
          className="w-full px-4 py-3 bg-white/80 border border-sage-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:border-sage-400 transition-colors placeholder:text-terra-300"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block font-sans text-xs tracking-widest uppercase text-terra-500 mb-2">Email *</label>
        <input
          type="email" name="email" required value={form.email} onChange={handle}
          className="w-full px-4 py-3 bg-white/80 border border-sage-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:border-sage-400 transition-colors placeholder:text-terra-300"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block font-sans text-xs tracking-widest uppercase text-terra-500 mb-2">What's your biggest goal right now?</label>
        <select
          name="goal" value={form.goal} onChange={handle}
          className="w-full px-4 py-3 bg-white/80 border border-sage-200 rounded-xl font-sans text-sm text-charcoal-800 focus:outline-none focus:border-sage-400 transition-colors"
        >
          <option value="">Select one...</option>
          <option>Clarity on my life purpose</option>
          <option>Better relationships</option>
          <option>Career or business transition</option>
          <option>Confidence & self-worth</option>
          <option>Emotional freedom & healing</option>
          <option>All of the above!</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-3.5 bg-sage-500 text-white font-sans text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-sage-400 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Sparkles className="w-4 h-4" />
        Register for Next Masterclass
      </button>
    </form>
  )
}

function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center">
        <CheckCircle className="text-gold-400 w-8 h-8 mx-auto mb-2" />
        <p className="font-serif text-xl text-cream mb-1">Welcome to the circle.</p>
        <p className="font-sans text-cream/60 text-sm">Your first letter will arrive soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email" required value={email} onChange={e => setEmail(e.target.value)}
        className="flex-1 px-5 py-3 bg-white/10 border border-gold-400/30 rounded-full text-cream placeholder:text-cream/40 font-sans text-sm focus:outline-none focus:border-gold-400 backdrop-blur-sm"
        placeholder="your@email.com"
      />
      <button
        type="submit"
        className="px-7 py-3 bg-gold-500 text-charcoal-900 font-sans text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-gold-400 transition-all duration-300 whitespace-nowrap"
      >
        Join the Circle
      </button>
    </form>
  )
}

export default function Services() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-terra-100/40 to-cream text-center">
        <ScrollReveal className="max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500 mb-4">Work With Me</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal-800 mb-6">
            Programs &amp;
            <br />
            <em className="text-gold-500 italic">Services</em>
          </h1>
          <p className="font-sans text-terra-600 leading-relaxed max-w-xl mx-auto">
            Every offering is designed to meet you exactly where you are and carry you
            to exactly where you're meant to be. Choose your path.
          </p>
          <div className="gold-divider mt-10" />
        </ScrollReveal>
      </section>

      {/* Service cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, subtitle, price, description, features, accent, badge, badgeColor }, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className={`relative p-8 rounded-2xl border ${accent} h-full flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1`}>
                <span className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-sans font-semibold tracking-wider ${badgeColor}`}>
                  {badge}
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                    <Icon className="text-gold-500 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-terra-400">{subtitle}</p>
                    <h3 className="font-serif text-xl text-charcoal-800">{title}</h3>
                  </div>
                </div>
                <p className="font-serif text-2xl text-gold-500 font-light mb-3">{price}</p>
                <p className="font-sans text-terra-600 text-sm leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-terra-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#discovery"
                  className="block text-center py-3 border border-gold-400 text-gold-600 font-sans text-xs tracking-widest uppercase rounded-full hover:bg-gold-500 hover:text-charcoal-900 transition-all duration-300"
                >
                  Learn More →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Discovery Call form */}
      <section id="discovery" className="py-20 px-6 bg-gradient-to-b from-cream to-gold-50/40">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500 mb-3">Free Consultation</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal-800 mb-4">
              Book Your Free
              <br />
              <em className="text-gold-500 italic">Discovery Call</em>
            </h2>
            <p className="font-sans text-terra-600 leading-relaxed">
              This 60-minute call is completely free. We'll talk honestly about where you are,
              explore what's possible, and decide together if working together is the right fit.
              No pressure. Just possibility.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-white/70 rounded-2xl border border-gold-200/60 p-8 shadow-[0_8px_40px_rgba(212,175,55,0.1)]">
              <DiscoveryForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Masterclass form */}
      <section className="py-20 px-6 bg-gradient-to-b from-gold-50/30 to-sage-100/30">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-sage-500 mb-3">Group Program</p>
            <h2 className="font-serif text-4xl font-light text-charcoal-800 mb-4">
              Register for the
              <br />
              <em className="text-sage-500 italic">Luminary Masterclass</em>
            </h2>
            <p className="font-sans text-terra-600 leading-relaxed">
              The next cohort is forming now. Secure your spot before enrollment closes.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-white/70 rounded-2xl border border-sage-200/60 p-8 shadow-[0_8px_40px_rgba(90,122,74,0.08)]">
              <MasterclassForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-gradient-to-br from-charcoal-900 to-charcoal-800">
        <ScrollReveal className="max-w-2xl mx-auto text-center">
          <Sparkles className="text-gold-400 w-8 h-8 mx-auto mb-5" />
          <h2 className="font-serif text-4xl font-light text-cream mb-3">
            Letters from the <em className="text-gold-400 italic">Heart</em>
          </h2>
          <p className="font-sans text-cream/60 mb-8 leading-relaxed">
            Join my newsletter for weekly reflections, coaching insights, and gentle nudges
            toward the life you're ready for. Thoughtful, personal, never spammy.
          </p>
          <NewsletterForm />
          <p className="font-sans text-xs text-cream/30 mt-4">
            Unsubscribe anytime. Your email stays sacred.
          </p>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-900 py-10 px-6 text-center border-t border-white/5">
        <p className="font-serif text-2xl text-gold-400/80 font-light tracking-wide mb-2">Luminary</p>
        <p className="font-sans text-xs tracking-widest uppercase text-cream/30">Life Coaching</p>
        <p className="font-sans text-xs text-cream/20 mt-6">© 2026 Luminary Life Coaching. All rights reserved.</p>
      </footer>
    </div>
  )
}
