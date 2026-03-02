import { useState } from 'react'
import BlurText from './ui/BlurText'

const inputClass = 'w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400/60 focus:bg-white/10 transition-all placeholder-white/30 backdrop-blur-sm'

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
    <section id="contact" className="relative py-24 px-6 bg-[#050010] overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto">
        <BlurText
          text="Get In Touch"
          className="text-3xl sm:text-4xl font-bold text-white mb-4 justify-center"
          delay={60}
          stepDuration={0.4}
        />
        <p className="text-white/50 text-center mb-12">
          Have a project in mind or just want to say hi? Fill out the form below!
        </p>

        {sent ? (
          <div className="bg-indigo-500/10 border border-indigo-400/20 backdrop-blur-xl text-indigo-300 rounded-3xl p-8 text-center">
            <p className="font-semibold text-lg">Message sent!</p>
            <p className="text-sm mt-1 text-indigo-400/80">Thanks for reaching out. I'll get back to you soon.</p>
            <button
              className="mt-4 text-sm text-white/40 hover:text-white underline transition-colors"
              onClick={() => setSent(false)}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-black/20 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/50 text-xs uppercase tracking-wider mb-2" htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label className="block text-white/50 text-xs uppercase tracking-wider mb-2" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-white/50 text-xs uppercase tracking-wider mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} placeholder="Tell me about your project..." className={`${inputClass} resize-none`} />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-500/80 hover:bg-indigo-500 backdrop-blur-sm border border-indigo-400/40 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/20"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
