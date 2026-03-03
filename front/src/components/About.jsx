import BlurText from './ui/BlurText'
import TiltedCard from './ui/TiltedCard'
import omsImg from '../assets/oms.png'

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#030014] overflow-hidden">
      {/* glassy glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <BlurText
          text="About Me"
          className="text-3xl sm:text-4xl font-bold text-white mb-12 justify-center"
          delay={60}
          stepDuration={0.4}
        />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Tilted avatar card */}
          <div className="flex justify-center">
            <TiltedCard
              imageSrc={omsImg}
              altText="Marc Christian C. Delos Santos"
              captionText="Marc Christian"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              scaleOnHover={1.05}
              rotateAmplitude={12}
              showMobileWarning={false}
              showTooltip={true}
            />
          </div>

          {/* Bio glass card */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-black/20 space-y-4">
            <p className="text-white/80 text-base leading-relaxed">
              I'm{' '}
              <span className="text-indigo-300 font-semibold">Marc Christian C. Delos Santos</span>, a
              Frontend Developer and UI/UX enthusiast focused on crafting visually compelling, highly
              interactive web experiences that feel as good as they look.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              I bridge the gap between design and code — turning Figma concepts into pixel-perfect,
              performant interfaces using modern tools like React, Tailwind CSS, and Framer Motion.
              I care deeply about accessibility, micro-interactions, and the details that make a UI
              truly delightful.
            </p>
            {/* Focus tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'MUI', 'Ant Design', 'Chakra UI'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                ['Name', 'Marc Christian Calamug Delos Santos'],
                ['Role', 'Frontend / UI·UX Developer'],
                ['Location', 'Bayombong, Nueva Vizcaya, Philippines'],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="text-indigo-300 text-xs font-semibold uppercase tracking-wider">{label}</span>
                  <p className="text-white/70 text-sm mt-0.5">{value}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block mt-2 px-6 py-2.5 bg-indigo-500/70 hover:bg-indigo-500 backdrop-blur-sm border border-indigo-400/40 text-white font-semibold rounded-xl transition-all text-sm shadow-lg shadow-indigo-500/20"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
