"use client"
import { useState } from 'react'


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', message: '' }) }
      else { setStatus('error') }
    } catch (err) { setStatus('error') }
  }


  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <div className="max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm">Name</label>
            <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full mt-1 p-3 rounded-lg bg-gray-50 dark:bg-gray-800" />
          </div>


          <div>
            <label className="text-sm">Email</label>
            <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full mt-1 p-3 rounded-lg bg-gray-50 dark:bg-gray-800" />
          </div>


          <div>
            <label className="text-sm">Message</label>
            <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full mt-1 p-3 rounded-lg bg-gray-50 dark:bg-gray-800" rows={6} />
          </div>


          <div>
            <button type="submit" disabled={status === 'sending'} className="px-6 py-3 bg-primary text-white rounded-lg">{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
          </div>


          {status === 'success' && <div className="text-green-500">Message sent — I'll reply soon.</div>}
          {status === 'error' && <div className="text-red-500">There was an error sending the message.</div>}
        </form>


        <p className="mt-6 text-sm text-gray-500">Or email me directly at <a href="mailto:naqashahsan@gmail.com" className="underline">naqashahsan@gmail.com</a></p>
      </div>
    </section>
  )
}