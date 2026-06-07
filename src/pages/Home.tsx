import ScrollReveal from '../components/ScrollReveal'
import { ChevronDown, Sparkles } from 'lucide-react'

interface Props {
  onNavigate: (page: 'home' | 'about' | 'services' | 'contact') => void
}

const storyChapters = [
  {
    emoji: '🌫️',
    color: 'bg-terra-100',
    accent: 'border-terra-300',
    title: 'Standing at the Crossroads',
    subtitle: 'Chapter One',
    text: `You're at a fork in the road. Both paths disappear into the unknown and something deep inside you whispers that you were meant for more — but the noise of daily life drowns it out. You feel stuck, spinning in place, knowing exactly where you want to go but unsure of how to get there. This moment of uncertainty? It's not a sign that you've failed. It's an invitation.`,
    image: 'crossroads',
    bg: 'from-terra-100/60 to-cream',
  },
  {
    emoji: '✨',
    color: 'bg-gold-100',
    accent: 'border-gold-300',
    title: 'A Light Appears',
    subtitle: 'Chapter Two',
    text: `In the middle of your searching, something shifts. A conversation, a book, a quiet moment — and suddenly you realize you don't have to walk this path alone. A guide arrives, not to hand you a map, but to help you remember you already hold one. She's walked her own crossroads. She's felt that same ache. And now she's here to walk beside you.`,
    image: 'light',
    bg: 'from-gold-100/60 to-cream',
  },
  {
    emoji: '🤝',
    color: 'bg-sage-100',
    accent: 'border-sage-300',
    title: 'Taking the First Step Together',
    subtitle: 'Chapter Three',
    text: `She takes your hand — not to lead, but to witness. The first step is the hardest and most sacred. Together you begin to untangle the stories that have kept you small, the fears that have masqueraded as wisdom, and the dreams you quietly shelved "for later." In this sacred container, there is no judgment. Only possibility.`,
    image: 'steps',
    bg: 'from-sage-100/60 to-cream',
  },
  {
    emoji: '🌿',
    color: 'bg-sage-200',
    accent: 'border-sage-400',
    title: 'Clearing the Path',
    subtitle: 'Chapter Four',
    text: `The path isn't always smooth. There are roots underfoot and low-hanging branches, old patterns that reach out to pull you back. But now you have tools. You have clarity. With each session, you learn to move through resistance rather than around it — building a resilience that isn't about toughness, but about knowing your own roots run deep.`,
    image: 'path',
    bg: 'from-sage-100/40 to-terra-100/40',
  },
  {
    emoji: '🌄',
    color: 'bg-terra-100',
    accent: 'border-terra-300',
    title: 'The View is Changing',
    subtitle: 'Chapter Five',
    text: `You begin to notice the view shifting. The horizon that once seemed impossibly far now feels reachable. Relationships deepen. Opportunities materialize. You catch yourself smiling for no reason, standing taller, speaking with a certainty that surprises even you. This isn't luck — this is the natural result of a woman who has come home to herself.`,
    image: 'horizon',
    bg: 'from-gold-100/40 to-terra-100/40',
  },
  {
    emoji: '⛰️',
    color: 'bg-charcoal-700',
    accent: 'border-gold-400',
    title: 'Reaching the Summit',
    subtitle: 'Chapter Six',
    text: `And then one day — you're there. Standing at the top of what once felt like an impossible mountain, looking out at the breathtaking view of your own becoming. Not because life got easier, but because you got wiser. Not because someone gave you the answers, but because you learned to trust the ones already living inside you. You made it. And this is only the beginning.`,
    image: 'summit',
    bg: 'from-charcoal-700/10 to-gold-100/30',
    dark: true,
  },
  {
    emoji: '🦋',
    color: 'bg-gold-100',
    accent: 'border-gold-500',
    title: 'Becoming the Guide',
    subtitle: 'Epilogue',
    text: `The most extraordinary part of this journey? You don't keep it to yourself. The woman who once stood lost at the crossroads now radiates a quiet knowing that lights up every room she enters. You become the light for someone else — in your family, your friendships, your community. This is the beautiful, unending spiral of transformation.`,
    image: 'butterfly',
    bg: 'from-gold-100/60 to-cream',
  },
]

const ImagePlaceholder = ({ type }: { type: string }) => {
  const configs: Record<string, { bg: string; symbol: string; label: string }> = {
    crossroads: { bg: 'from-terra-200 to-terra-300', symbol: '🌫️', label: 'A woman at the crossroads' },
    light: { bg: 'from-gold-200 to-gold-300', symbol: '✨', label: 'A guiding light appears' },
    steps: { bg: 'from-sage-200 to-sage-300', symbol: '🤝', label: 'Taking the first step together' },
    path: { bg: 'from-sage-300 to-sage-400', symbol: '🌿', label: 'Walking the path' },
    horizon: { bg: 'from-terra-200 to-gold-200', symbol: '🌄', label: 'The horizon opens up' },
    summit: { bg: 'from-charcoal-700 to-terra-400', symbol: '⛰️', label: 'Reaching the summit' },
    butterfly: { bg: 'from-gold-200 to-terra-200', symbol: '🦋', label: 'Full transformation' },
  }
  const c = configs[type] ?? configs['crossroads']
  return (
    <div
      className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${c.bg} flex flex-col items-center justify-center shadow-xl relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: Math.random() * 60 + 20 + 'px',
              height: Math.random() * 60 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>
      <span className="text-6xl mb-4 relative z-10">{c.symbol}</span>
      <p className="font-serif text-sm italic text-white/80 text-center px-4 relative z-10">{c.label}</p>
      <p className="font-sans text-xs text-white/50 mt-1 relative z-10">Your photo goes here</p>
    </div>
  )
}

export default function Home({ onNavigate }: Props) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212,175,55,0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(90,122,74,0.2) 0%, transparent 40%),
                             radial-gradient(circle at 60% 80%, rgba(160,140,100,0.2) 0%, transparent 40%)`
          }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold-300/20 animate-pulse"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: i * 0.4 + 's',
                animationDuration: 3 + Math.random() * 4 + 's',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400" />
            <Sparkles className="text-gold-400 w-5 h-5" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-400/80 mb-6">
            Life · Clarity · Purpose
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-6 text-shadow-gold">
            You Already Hold
            <br />
            <em className="text-gold-300 italic">the Answer</em>
          </h1>

          <p className="font-sans text-lg md:text-xl text-cream/70 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Transformational life coaching for women ready to step out of survival mode
            and into a life that feels as beautiful on the inside as it looks on the outside.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-gold-500 text-charcoal-900 font-sans text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-gold-400 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105"
            >
              Begin Your Journey
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 border border-cream/30 text-cream/80 font-sans text-sm tracking-widest uppercase rounded-full hover:border-gold-400 hover:text-gold-300 transition-all duration-300"
            >
              Meet Your Coach
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-sans text-xs tracking-widest uppercase text-gold-400/60">Scroll</span>
          <ChevronDown className="text-gold-400/60 w-5 h-5" />
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Intro quote */}
      <section className="py-20 px-6 bg-cream">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <div className="gold-divider mb-10" />
          <blockquote className="font-serif text-3xl md:text-4xl font-light italic text-charcoal-800 leading-relaxed">
            "The life you've been imagining is not a fantasy.
            <br />
            <span className="text-gold-500">It's a memory of who you truly are."</span>
          </blockquote>
          <p className="font-sans text-sm tracking-widest uppercase text-terra-400 mt-6">
            — Your Coaching Journey Begins Here
          </p>
          <div className="gold-divider mt-10" />
        </ScrollReveal>
      </section>

      {/* Story sections */}
      <section className="py-10 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold-500 mb-4">The Journey</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal-800">
              Your Story of Transformation
            </h2>
            <p className="font-sans text-terra-500 mt-4 max-w-xl mx-auto">
              Every great transformation begins with a single honest moment. Here is yours.
            </p>
          </ScrollReveal>

          <div className="space-y-24">
            {storyChapters.map((chapter, i) => {
              const isReverse = i % 2 !== 0
              return (
                <ScrollReveal key={i} delay={100}>
                  <div
                    className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                      <ImagePlaceholder type={chapter.image} />
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2">
                      <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold-500 mb-2">
                        {chapter.subtitle}
                      </p>
                      <h3 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4 leading-snug">
                        {chapter.title}
                      </h3>
                      <div className={`h-px w-12 mb-5 bg-gradient-to-r from-gold-400 to-transparent`} />
                      <p className="font-sans text-terra-600 leading-relaxed text-[15px]">
                        {chapter.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream to-terra-100/40">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <Sparkles className="text-gold-500 w-8 h-8 mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal-800 mb-6">
            Your chapter begins now.
          </h2>
          <p className="font-sans text-terra-600 leading-relaxed mb-10 max-w-xl mx-auto">
            A free Discovery Call is the first step. No pressure, no commitment —
            just an honest conversation about where you are and where you want to go.
          </p>
          <button
            onClick={() => onNavigate('services')}
            className="px-10 py-4 bg-gold-500 text-charcoal-900 font-sans text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-gold-400 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:scale-105"
          >
            Book Your Free Discovery Call
          </button>
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
