import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === Number(id))

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex flex-col items-center justify-center text-white gap-4">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <Link to="/" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
          ← Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#030014] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 py-20">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors mb-12 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-10">
          {project.logo && (
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="w-28 h-28 rounded-3xl object-contain bg-white/5 border border-white/10 p-2 mb-6"
            />
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-300 text-xs font-medium rounded-full border border-indigo-400/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <div className="text-white/50 text-base leading-relaxed flex flex-col gap-4">
            {project.longDescription.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Meta info */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Year</p>
            <p className="text-white font-semibold">{project.year}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Role</p>
            <p className="text-white font-semibold">{project.role}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
          >
            Live Demo →
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-xl text-sm font-semibold transition-all"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
