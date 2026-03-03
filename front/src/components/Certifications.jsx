import { motion } from 'motion/react'
import BlurText from './ui/BlurText'
import githubIcon from '../assets/github logo.png'

const certs = [
  {
    title: 'Git and GitHub Seminar-Workshop',
    issuer: 'Seminar-Workshop',
    icon: githubIcon,
    color: 'from-[#ffffff]/10 to-[#6e5494]/20',
    border: 'border-white/20',
    glow: '#8b5cf6',
    accent: 'text-[#a78bfa]',
    description:
      'Attended a Git and GitHub Seminar-Workshop covering version control fundamentals, collaborative workflows, and repository management, with hands-on practice using Git commands, branching, merging, and pull requests.',
  },
  {
    title: 'GitHub: Version Control',
    issuer: 'Seminar-Workshop',
    icon: githubIcon,
    color: 'from-[#ffffff]/10 to-[#6e5494]/20',
    border: 'border-white/20',
    glow: '#8b5cf6',
    accent: 'text-[#a78bfa]',
    description:
      'Hands-on seminar-workshop on GitHub focusing on version control fundamentals, repository management, and collaborative development using Git.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6 bg-[#050010] overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <BlurText
          text="Certifications"
          className="text-3xl sm:text-4xl font-bold text-white mb-4 justify-center"
          delay={60}
          stepDuration={0.4}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {certs.map(({ title, issuer, icon, color, border, glow, accent, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative bg-gradient-to-br ${color} border ${border} backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 flex flex-col gap-5`}
              style={{ boxShadow: `0 0 0 0 ${glow}00` }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 12px 40px ${glow}35`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${glow}00`}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center shadow-inner shrink-0">
                  <img src={icon} alt={title} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${accent}`}>{issuer}</p>
                  <p className="text-white font-bold text-base leading-snug">{title}</p>
                </div>
              </div>

              <div className="w-10 h-px bg-white/10" />

              <p className="text-white/55 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
