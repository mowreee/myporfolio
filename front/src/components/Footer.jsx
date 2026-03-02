export default function Footer() {
  return (
    <footer className="bg-white/[0.03] border-t border-white/10 backdrop-blur-xl py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white/40 text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="text-indigo-300 font-medium">Marc Christian C. Delos Santos</span>. All rights reserved.
        </span>
        <div className="flex gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com' },
            { label: 'Email', href: 'mailto:your@email.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-indigo-300 text-sm transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
