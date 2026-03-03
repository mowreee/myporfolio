import BlurText from './ui/BlurText'
import { motion } from 'motion/react'

const skills = [
  {
    name: 'Networking',
    tagline: 'Infrastructure & Connectivity',
    desc: 'Experienced in configuring and managing network systems, understanding core protocols such as TCP/IP, DNS, and DHCP. Capable of setting up local area networks, troubleshooting connectivity issues, and ensuring reliable, secure communication between devices and systems.',
    color: 'from-[#0ea5e9]/20 to-[#0369a1]/10',
    border: 'border-[#0ea5e9]/30',
    glow: '#0ea5e9',
    accent: 'text-[#38bdf8]',
  },
  {
    name: 'Software Engineering',
    tagline: 'Design, Build & Scale',
    desc: 'Proficient in designing and developing software systems with a focus on scalability, maintainability, and clean architecture. Applies engineering principles throughout the full software development lifecycle — from requirements gathering and system design to testing, deployment, and documentation.',
    color: 'from-[#f59e0b]/20 to-[#92400e]/10',
    border: 'border-[#f59e0b]/30',
    glow: '#f59e0b',
    accent: 'text-[#fbbf24]',
  },
  {
    name: 'Coding / Programming',
    tagline: 'Logic & Problem Solving',
    desc: 'Proficient in JavaScript and experienced with Python and other modern languages. Comfortable working across the stack — writing clean, efficient logic for frontend interfaces, backend APIs, and scripts. Follows best practices in code structure, readability, and performance optimization.',
    color: 'from-[#a78bfa]/20 to-[#4c1d95]/10',
    border: 'border-[#a78bfa]/30',
    glow: '#a78bfa',
    accent: 'text-[#c4b5fd]',
  },
  {
    name: 'GitHub',
    tagline: 'Version Control & Collaboration',
    desc: 'Experienced in using Git and GitHub for source control, branching strategies, and collaborative development. Comfortable managing repositories, reviewing pull requests, resolving merge conflicts, and maintaining organized commit histories across team-based and open-source projects.',
    color: 'from-[#ffffff]/10 to-[#6e5494]/20',
    border: 'border-white/20',
    glow: '#8b5cf6',
    accent: 'text-[#a78bfa]',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-[#050010] overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <BlurText
          text="Skills & Expertise"
          className="text-3xl sm:text-4xl font-bold text-white mb-4 justify-center"
          delay={60}
          stepDuration={0.4}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map(({ name, tagline, desc, color, border, glow, accent }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group relative bg-gradient-to-br ${color} border ${border} backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-default flex flex-col gap-4`}
              style={{ boxShadow: `0 0 0 0 ${glow}00` }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 12px 40px ${glow}35`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${glow}00`}
            >
              <div>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${accent}`}>{tagline}</p>
                <p className="text-white font-bold text-xl leading-tight">{name}</p>
              </div>
              <div className="w-10 h-px bg-white/10" />
              <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
