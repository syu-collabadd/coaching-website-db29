import ScrollReveal from '../components/ScrollReveal'
import { Heart, Star, Sparkles } from 'lucide-react'

interface Props {
  onNavigate: (page: 'home' | 'about' | 'services' | 'contact') => void
}

const values = [
  { icon: Heart, title: 'Wholehearted Presence', text: 'Every session is a sacred space. I show up fully, without judgment or agenda — just a deep commitment to your growth.' },
  { icon: Star, title: 'Authentic Transformation', text: "This work isn't about fitting into a mold. It's about peeling away what's never been yours to reveal the gold that always was." },
  { icon: Sparkles, title: 'Joy as a Compass', text: 'I believe your joy, your curiosity, your delight — these are not frivolous. They are the most reliable navigation system you have.' },
]

const credentials = [
  'Certified Life Coach (ICF Accredited)',
  'NLP Practitioner',
  'Mindfulness-Based Stress Reduction (MBSR)',
  'Positive Psychology Practitioner',
  '10+ Years of Personal Transformation Work',
  'Women\'s Empowerment Facilitator',
]

export default function About({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-terra-100/50 to-cream">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500 mb-4">About Your Coach</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal-800">
              The Woman Behind
              <br />
              <em className="text-gold-500 italic">the Journey</em>
            </h1>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Photo */}
            <ScrollReveal className="w-full md:w-2/5" delay={100}>
              <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-terra-200 to-gold-200 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/50" />
                  <div className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full bg-white/30" />
                </div>
                <span className="text-7xl relative z-10">🌟</span>
                <p className="font-serif text-sm italic text-white/70 mt-4 relative z-10 text-center px-6">
                  Your coach's photo goes here
                </p>
              </div>
              {/* Gold accent */}
              <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-transparent rounded-full mx-auto mt-6" />
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal className="w-full md:w-3/5" delay={200}>
              <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold-500 mb-3">My Story</p>
              <h2 className="font-serif text-3xl font-light text-charcoal-800 mb-6 leading-snug">
                I know what it feels like to stand at your crossroads.
              </h2>

              <div className="space-y-4 font-sans text-terra-600 leading-relaxed text-[15px]">
                <p>
                  There was a time in my life when I had everything I was "supposed" to want —
                  and still felt a persistent, quiet ache that something essential was missing.
                  I was achieving, performing, hustling... and slowly disappearing.
                </p>
                <p>
                  The turning point didn't come with fanfare. It came in a small, honest moment
                  of asking: <em className="text-charcoal-800 font-medium">"Is this really it?"</em> That question
                  cracked something open in me — and I have been living in that opening ever since.
                </p>
                <p>
                  I trained as a life coach not because I had all the answers, but because I fell
                  in love with the questions. I discovered that transformation isn't something
                  that happens to us — it's something we step into, one brave conversation at a time.
                </p>
                <p>
                  Today, I work with women who are ready to stop waiting for permission and start
                  living from the inside out. If that's you, I would be honored to walk beside you.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-7 py-3 bg-gold-500 text-charcoal-900 font-sans text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-gold-400 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  Work With Me
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3 border border-terra-300 text-terra-500 font-sans text-sm tracking-wider uppercase rounded-full hover:border-gold-400 hover:text-gold-500 transition-all duration-300"
                >
                  Say Hello
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-cream to-terra-100/30">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="gold-divider mb-10" />
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500 mb-4">What I Believe</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal-800">
              The Heart of This Work
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, text }, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="p-8 bg-white/60 rounded-2xl border border-gold-200/50 hover:border-gold-400/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] h-full">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-5">
                    <Icon className="text-gold-500 w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{title}</h3>
                  <p className="font-sans text-terra-600 text-sm leading-relaxed">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500 mb-3">Training & Certifications</p>
            <h2 className="font-serif text-3xl font-light text-charcoal-800">
              The Foundation of My Practice
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid sm:grid-cols-2 gap-3">
              {credentials.map((cred, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-gold-200/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                  <span className="font-sans text-sm text-terra-600">{cred}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Signature quote */}
      <section className="py-20 px-6 bg-gradient-to-b from-cream to-charcoal-900">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <div className="gold-divider mb-12" />
          <blockquote className="font-serif text-3xl md:text-4xl font-light italic text-charcoal-800 leading-relaxed">
            "I don't have a magic wand.
            <br />
            <span className="text-gold-500">You do. I just help you find it."</span>
          </blockquote>
          <p className="font-sans text-xs tracking-widest uppercase text-terra-400 mt-6">
            — Your Coach
          </p>
          <div className="gold-divider mt-12" />
        </ScrollReveal>
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
