import { useState } from 'react'

const products = [
  'ClubVest (SACCO core banking)',
  'PleReady (PLE exam prep)',
  'SMETracker (SME bookkeeping)',
  'Something else',
]

export default function Contact() {
  const [form, setForm] = useState({
    org: '',
    contact: '',
    phone: '',
    product: products[0],
    email: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | sent | error

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      // TODO: wire this to a real endpoint — e.g. a Supabase edge function
      // using the existing Resend setup, or a Formspree form action.
      // Placeholder so the form is usable end-to-end once that's decided:
      await new Promise((resolve) => setTimeout(resolve, 600))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="max-w-2xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24 text-center">
        <h1 className="font-display text-3xl md:text-4xl text-ink mb-4">
          Thanks — we've got it.
        </h1>
        <p className="text-muted leading-relaxed">
          Someone from the onboarding team will reach out shortly.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
      <h1 className="font-display text-4xl md:text-5xl text-ink text-center leading-tight">
        Connect with our onboarding team
      </h1>
      <p className="text-muted text-center leading-relaxed mt-6 max-w-xl mx-auto">
        Whether you're a SACCO board activating your free 3-month ClubVest
        trial, a school interested in PleReady, or an SME wanting early
        access to SMETracker — we'd love to hear from you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-12 bg-panel border border-line rounded-sm p-8 md:p-10 space-y-6"
      >
        <div>
          <label
            htmlFor="org"
            className="font-mono text-xs tracking-widest text-ink uppercase block mb-2"
          >
            Organization / school name
          </label>
          <input
            id="org"
            required
            value={form.org}
            onChange={update('org')}
            placeholder="e.g., Kampala Progressive SACCO or Parents' Primary School"
            className="w-full border border-line rounded-sm px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:border-teal transition-colors"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="contact"
              className="font-mono text-xs tracking-widest text-ink uppercase block mb-2"
            >
              Contact person
            </label>
            <input
              id="contact"
              required
              value={form.contact}
              onChange={update('contact')}
              placeholder="e.g., Jane Namubiru"
              className="w-full border border-line rounded-sm px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:border-teal transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="font-mono text-xs tracking-widest text-ink uppercase block mb-2"
            >
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={form.phone}
              onChange={update('phone')}
              placeholder="+256 701..."
              className="w-full border border-line rounded-sm px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:border-teal transition-colors"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="product"
            className="font-mono text-xs tracking-widest text-ink uppercase block mb-2"
          >
            Interested product
          </label>
          <select
            id="product"
            value={form.product}
            onChange={update('product')}
            className="w-full border border-line rounded-sm px-4 py-3 text-ink bg-panel focus:outline-none focus:border-teal transition-colors"
          >
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-mono text-xs tracking-widest text-ink uppercase block mb-2"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder="contact@yourcompany.com"
            className="w-full border border-line rounded-sm px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:border-teal transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-teal text-white font-semibold px-6 py-4 rounded-sm hover:bg-forestSoft transition-colors disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Submit inquiry'}
        </button>

        {status === 'error' && (
          <p className="text-sm text-center" style={{ color: '#B3261E' }}>
            Something went wrong — try again, or email hello@vestateck.com directly.
          </p>
        )}
      </form>
    </div>
  )
}