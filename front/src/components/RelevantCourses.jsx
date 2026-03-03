import { useState } from 'react'
import { motion } from 'motion/react'
import BlurText from './ui/BlurText'

const courses = [
  { name: 'Computer Programming 1 and 2', category: 'Programming' },
  { name: 'Human Computer Interaction', category: 'Design' },
  { name: 'Data Structures and Algorithms', category: 'Programming' },
  { name: 'Object-Oriented Programming', category: 'Programming' },
  { name: 'Elective 1 – Event-Driven Programming', category: 'Programming' },
  { name: 'Elective 2 – Platform Technologies', category: 'Systems' },
  { name: 'Information Management', category: 'Data' },
  { name: 'Networking 1 and 2', category: 'Networking' },
  { name: 'Advanced Database Systems', category: 'Data' },
  { name: 'Elective 3 – Web Systems and Technologies', category: 'Web' },
  { name: 'Information Assurance and Security 1 and 2', category: 'Security' },
  { name: 'Integrative Programming Technologies 1', category: 'Programming' },
  { name: 'Special Topics – System Analysis and Design', category: 'Systems' },
  { name: 'Elective 4 – Integrative Programming and Technologies 2', category: 'Programming' },
  { name: 'Elective 5 – System Integration and Architecture', category: 'Systems' },
  { name: 'Capstone Project 1 and 2', category: 'Capstone' },
  { name: 'Application Development and Emerging Technologies', category: 'Web' },
  { name: 'Special Topics 2 – Software Engineering', category: 'Systems' },
  { name: 'System Integration and Architecture', category: 'Systems' },
  { name: 'Data Analytics', category: 'Data' },
  { name: 'System Management and Maintenance', category: 'Systems' },
]

const categoryStyles = {
  Programming: { bg: 'bg-violet-500/10', text: 'text-violet-300', border: 'border-violet-400/20' },
  Design:      { bg: 'bg-pink-500/10',   text: 'text-pink-300',   border: 'border-pink-400/20' },
  Data:        { bg: 'bg-emerald-500/10',text: 'text-emerald-300',border: 'border-emerald-400/20' },
  Networking:  { bg: 'bg-sky-500/10',    text: 'text-sky-300',    border: 'border-sky-400/20' },
  Security:    { bg: 'bg-red-500/10',    text: 'text-red-300',    border: 'border-red-400/20' },
  Web:         { bg: 'bg-orange-500/10', text: 'text-orange-300', border: 'border-orange-400/20' },
  Systems:     { bg: 'bg-indigo-500/10', text: 'text-indigo-300', border: 'border-indigo-400/20' },
  Capstone:    { bg: 'bg-amber-500/10',  text: 'text-amber-300',  border: 'border-amber-400/20' },
}

const FILTERS = ['All', 'Programming', 'Data', 'Networking', 'Security', 'Web', 'Systems', 'Design', 'Capstone']

export default function RelevantCourses() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? courses : courses.filter(c => c.category === active)
  return (
    <section id="courses" className="relative py-24 px-6 bg-[#030014] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-56 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <BlurText
          text="Relevant Courses"
          className="text-3xl sm:text-4xl font-bold text-white mb-4 justify-center"
          delay={60}
          stepDuration={0.4}
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
                active === f
                  ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white/80'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(({ name, category }, i) => {
            const style = categoryStyles[category]
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 backdrop-blur-xl rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 group hover:scale-[1.02]"
              >
                <span
                  className={`self-start text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${style.bg} ${style.text} ${style.border}`}
                >
                  {category}
                </span>
                <p className="text-white/85 text-sm font-medium leading-snug">{name}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
