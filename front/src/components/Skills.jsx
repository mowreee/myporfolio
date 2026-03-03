import BlurText from './ui/BlurText'
import { motion } from 'motion/react'

const skills = [
  {
    name: 'Networking',
    desc: 'Network configuration, protocols & infrastructure management',
    icon: '🌐',
    color: 'from-[#0ea5e9]/20 to-[#0369a1]/10',
    border: 'border-[#0ea5e9]/30',
    glow: '#0ea5e9',
  },
  {
    name: 'Data Analysis',
    desc: 'Interpreting data sets, trends & generating actionable insights',
    icon: '📊',
    color: 'from-[#10b981]/20 to-[#065f46]/10',
    border: 'border-[#10b981]/30',
    glow: '#10b981',
  },
  {
    name: 'Software Engineering',
    desc: 'Designing & building scalable, maintainable software systems',
    icon: '⚙️',
    color: 'from-[#f59e0b]/20 to-[#92400e]/10',
    border: 'border-[#f59e0b]/30',
    glow: '#f59e0b',
  },
  {
    name: 'Coding / Programming',
    desc: 'Proficient in JavaScript, Python & modern web technologies',
    icon: '💻',
    color: 'from-[#a78bfa]/20 to-[#4c1d95]/10',
    border: 'border-[#a78bfa]/30',
    glow: '#a78bfa',
  },
  {
    name: 'GitHub',
    desc: 'Version control, collaboration & open-source workflows',
    icon: '🐙',
    color: 'from-[#ffffff]/10 to-[#6e5494]/20',
    border: 'border-white/20',
    glow: '#8b5cf6',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-[#050010] overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <BlurText
          text="Skills & Expertise"
          className="text-3xl sm:text-4xl font-bold text-white mb-4 justify-center"
          delay={60}
          stepDuration={0.4}
        />
        <p className="text-center text-white/40 text-sm mb-12">Core competencies I bring to every project</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map(({ name, desc, icon, color, border, glow }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group relative bg-gradient-to-br ${color} border ${border} backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-default flex flex-col gap-4`}
              style={{ boxShadow: `0 0 0 0 ${glow}00` }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 32px ${glow}30`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${glow}00`}
            >
              <div className="w-14 h-14 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center shadow-inner text-3xl">
                {icon}
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">{name}</p>
                <p className="text-white/50 text-xs mt-1.5 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
