import { Link } from 'react-router-dom'
import BlurText from './ui/BlurText'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 bg-[#030014] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <BlurText
          text="My Projects"
          className="text-3xl sm:text-4xl font-bold text-white mb-12 justify-center"
          delay={60}
          stepDuration={0.4}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ id, title, description, tags }) => (
            <div
              key={id}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:bg-white/10 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-300 text-xs font-medium rounded-full border border-indigo-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to={`/project/${id}`}
                className="inline-block text-center px-4 py-2 bg-white/5 hover:bg-indigo-500/80 border border-white/10 hover:border-indigo-400/40 text-white/70 hover:text-white rounded-xl text-sm font-medium transition-all backdrop-blur-sm"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
