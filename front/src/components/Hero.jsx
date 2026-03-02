import PixelBlast from './ui/PixelBlast'
import BlurText from './ui/BlurText'
import Typewriter from './ui/Typewriter'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-[#030014]"
    >
      {/* PixelBlast background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="circle"
          color="#6366f1"
          pixelSize={4}
          patternScale={3}
          patternDensity={1.2}
          enableRipples={true}
          speed={0.5}
          transparent={true}
          edgeFade={0.3}
        />
      </div>

      {/* Radial dark overlay so text is readable */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(3,0,20,0.55) 50%, rgba(3,0,20,0.88) 100%)' }}
      />

      <div className="relative z-20 text-center max-w-3xl">
        <p className="text-indigo-300 text-sm font-semibold tracking-widest uppercase mb-4 drop-shadow">
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          <Typewriter
            text="Hi, I'm Marc Christian C. Delos Santos"
            speed={55}
            delay={400}
            className="text-white"
          />
        </h1>

        <BlurText
          text="A passionate developer building clean, modern, and user-friendly web experiences."
          className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed justify-center"
          delay={40}
          direction="bottom"
          stepDuration={0.3}
        />

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-500/80 hover:bg-indigo-500 backdrop-blur-sm border border-indigo-400/40 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-indigo-300 hover:text-white font-semibold rounded-xl transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
