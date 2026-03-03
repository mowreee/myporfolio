import { useState } from 'react'
import BlurText from './ui/BlurText'
import canvaIcon from '../assets/canva-icon-logo.png'
import figmaIcon from '../assets/figna.webp'
import cssIcon from '../assets/css icon.png'
import gitIcon from '../assets/git-icon-logo.svg'
import githubIcon from '../assets/github logo.png'
import htmlIcon from '../assets/html loo.png'
import nodeIcon from '../assets/node-js.svg'
import reactIcon from '../assets/react.svg'
import tailwindIcon from '../assets/tailwind.svg'
import viteIcon from '../assets/vite.png'
import wordpressIcon from '../assets/wordpress icon.png'

const expertise = [
  {
    name: 'Figma',
    desc: 'UI/UX Design & Prototyping',
    tag: 'Design',
    color: 'from-[#a259ff]/20 to-[#f24e1e]/20',
    border: 'border-[#a259ff]/30',
    glow: '#a259ff',
    icon: <img src={figmaIcon} alt="Figma" className="w-10 h-10 object-contain" />,
  },
  {
    name: 'HTML',
    desc: 'Semantic Markup',
    tag: 'Frontend',
    color: 'from-[#e34c26]/20 to-[#e34c26]/10',
    border: 'border-[#e34c26]/30',
    glow: '#e34c26',
    icon: <img src={htmlIcon} alt="HTML" className="w-10 h-10 object-contain" />,
  },
  {
    name: 'CSS',
    desc: 'Styling & Layouts',
    tag: 'Frontend',
    color: 'from-[#264de4]/20 to-[#264de4]/10',
    border: 'border-[#264de4]/30',
    glow: '#264de4',
    icon: <img src={cssIcon} alt="CSS" className="w-10 h-10 object-contain" />,
  },
  {
    name: 'Tailwind CSS',
    desc: 'Utility-first CSS Framework',
    tag: 'Frontend',
    color: 'from-[#38bdf8]/20 to-[#0ea5e9]/10',
    border: 'border-[#38bdf8]/30',
    glow: '#38bdf8',
    icon: <img src={tailwindIcon} alt="Tailwind CSS" className="w-10 h-10 object-contain" />,
  },
  {
    name: 'Vite',
    desc: 'Frontend Build Tool',
    tag: 'Tooling',
    color: 'from-[#646cff]/20 to-[#646cff]/10',
    border: 'border-[#646cff]/30',
    glow: '#646cff',
    icon: <img src={viteIcon} alt="Vite" className="w-10 h-10 object-contain" />,
  },
  {
    name: 'React',
    desc: 'UI Component Library',
    tag: 'Frontend',
    color: 'from-[#61dafb]/20 to-[#61dafb]/10',
    border: 'border-[#61dafb]/30',
    glow: '#61dafb',
    icon: <img src={reactIcon} alt="React" className="w-10 h-10 object-contain" />,
  },
  {
    name: 'Canva',
    desc: 'Graphic & Visual Design',
    tag: 'Design',
    color: 'from-[#00c4cc]/20 to-[#7d2ae8]/20',
    border: 'border-[#00c4cc]/30',
    glow: '#00c4cc',
    icon: <img src={canvaIcon} alt="Canva" className="w-10 h-10 object-contain" />,
  },
  {
    name: 'WordPress',
    desc: 'CMS & Web Publishing',
    tag: 'CMS',
    color: 'from-[#21759b]/20 to-[#464646]/20',
    border: 'border-[#21759b]/30',
    glow: '#21759b',
    icon: <img src={wordpressIcon} alt="WordPress" className="w-10 h-10 object-contain" />,
  },
  {
    name: 'Node.js',
    desc: 'Server-side JavaScript',
    tag: 'Backend',
    color: 'from-[#3c873a]/20 to-[#303030]/20',
    border: 'border-[#3c873a]/30',
    glow: '#3c873a',
    icon: <img src={nodeIcon} alt="Node.js" className="w-10 h-10 object-contain" />,
  },
  {
    name: 'Git',
    desc: 'Version Control',
    tag: 'Tooling',
    color: 'from-[#f05032]/20 to-[#c0392b]/20',
    border: 'border-[#f05032]/30',
    glow: '#f05032',
    icon: <img src={gitIcon} alt="Git" className="w-10 h-10 object-contain" />,
  },
  {
    name: 'GitHub',
    desc: 'Code Hosting & Collaboration',
    tag: 'Tooling',
    color: 'from-[#ffffff]/10 to-[#6e5494]/20',
    border: 'border-white/20',
    glow: '#8b5cf6',
    icon: <img src={githubIcon} alt="GitHub" className="w-10 h-10 object-contain" />,
  },
]

const FILTERS = ['All', 'Frontend', 'Design', 'Backend', 'Tooling', 'CMS']

export default function Tools() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? expertise : expertise.filter(s => s.tag === active)

  return (
    <section id="tools" className="relative py-24 px-6 bg-[#050010] overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <BlurText
          text="Tools & Technologies"
          className="text-3xl sm:text-4xl font-bold text-white mb-8 justify-center"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(({ name, desc, tag, color, border, glow, icon }) => (
            <div
              key={name}
              className={`group relative bg-gradient-to-br ${color} border ${border} backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-default flex flex-col gap-4`}
              style={{ boxShadow: `0 0 0 0 ${glow}00` }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 32px ${glow}30`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${glow}00`}
            >
              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center shadow-inner">
                  {icon}
                </div>
                <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                  {tag}
                </span>
              </div>

              {/* Name + desc */}
              <div>
                <p className="text-white font-bold text-base leading-tight">{name}</p>
                <p className="text-white/50 text-xs mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
