import { useState } from 'react'
import { motion } from 'motion/react'
import BlurText from './ui/BlurText'

const inputClass =
  'w-full bg-transparent border-0 border-b border-white/15 text-white py-3 text-sm focus:outline-none focus:border-indigo-400 transition-all duration-300 placeholder-white/20'

const contactLinks = [
  {
    label: 'Email',
    value: 'delossantosyowcam@gmail.com',
    href: 'mailto:delossantosyowcam@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/mowreee',
    href: 'https://github.com/mowreee',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    value: 'Marc Christian',
    href: 'https://web.facebook.com/dlsmcc/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Phone (PH)',
    value: '+63 928 8096727',
    href: 'tel:+639288096727',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Phone (ID)',
    value: '+62 888 1466664',
    href: 'tel:+628881466664',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 px-6 bg-[#030014] overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <BlurText
          text="Get In Touch"
          className="text-3xl sm:text-4xl font-bold text-white mb-4 justify-center"
          delay={60}
          stepDuration={0.4}
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-white font-bold text-lg mb-1">Marc Christian Delos Santos</p>
              <p className="text-white/40 text-sm mb-8">Frontend Developer</p>
              <div className="flex flex-col gap-4">
                {contactLinks.map(({ label, value, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 rounded-2xl bg-white/0 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
                  >
                    <span className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center text-indigo-300 shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                      {icon}
                    </span>
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">{label}</p>
                      <p className="text-white/80 text-sm group-hover:text-white transition-colors truncate">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-indigo-500/10 border border-indigo-400/20 rounded-3xl p-6">
              <p className="text-indigo-300 text-sm leading-relaxed">
                Currently <span className="font-semibold text-white">open to opportunities</span> — feel free to reach out for freelance work, collaboration, or just to connect.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="rounded-3xl p-12 text-center flex flex-col items-center gap-4 border border-white/10 bg-white/5">
                <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                  <svg className="w-7 h-7 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-bold text-xl">Message sent!</p>
                <p className="text-white/40 text-sm max-w-xs">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  className="mt-2 text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative rounded-3xl overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-transparent to-violet-500/20 p-px pointer-events-none" />
                <div className="relative bg-[#0a0819] rounded-3xl p-8 md:p-10 flex flex-col gap-8">

                  <div className="flex flex-col gap-1">
                    <h3 className="text-white font-bold text-xl">Send a message</h3>
                    <p className="text-white/35 text-sm">I'll respond as soon as possible.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-1">
                      <label className="text-indigo-400 text-[10px] uppercase tracking-[0.15em] font-bold" htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-indigo-400 text-[10px] uppercase tracking-[0.15em] font-bold" htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-indigo-400 text-[10px] uppercase tracking-[0.15em] font-bold" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hi..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative self-start flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                  >
                    <span className="relative z-10">Send Message</span>
                    <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>

                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

