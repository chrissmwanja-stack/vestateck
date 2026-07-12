import { Link } from 'react-router-dom'
import Seal from '../components/Seal'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-14 items-center">
          <div>
            <p className="font-mono text-xs tracking-widest text-gold uppercase mb-6">
              Vestateck · Kampala, Uganda
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink">
              Financial infrastructure for how Africa actually saves.
            </h1>
            <p className="mt-7 text-lg text-muted max-w-xl leading-relaxed">
              Every savings club, SACCO, and investment group keeps a ledger —
              a record of who contributed, who borrowed, and who's owed what.
              We build the software behind that ledger.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="https://www.clubvestapp.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-ink font-body font-semibold px-6 py-3 rounded-sm hover:bg-goldSoft transition-colors"
              >
                Explore ClubVest
                <span aria-hidden>→</span>
              </a>
              <Link
                to="/about"
                className="text-sm text-muted hover:text-ink transition-colors underline decoration-line underline-offset-4"
              >
                Why we're building this
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Seal size={220} className="opacity-90" />
          </div>
        </div>
      </section>

      <div className="border-t border-line" />

      {/* Thesis strip */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 font-mono text-sm">
          <div>
            <p className="text-gold mb-2">// the problem</p>
            <p className="text-muted leading-relaxed">
              Most savings groups still run on exercise books and WhatsApp.
              Contributions get miscounted, loan balances get disputed, and
              treasurers carry all the risk alone.
            </p>
          </div>
          <div>
            <p className="text-gold mb-2">// our approach</p>
            <p className="text-muted leading-relaxed">
              We build purpose-made software for the way these groups
              actually operate — not generic accounting tools bent into
              shape after the fact.
            </p>
          </div>
          <div>
            <p className="text-gold mb-2">// the plan</p>
            <p className="text-muted leading-relaxed">
              ClubVest is first. It won't be the only product — Vestateck
              is built to hold a family of tools for community finance.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-line" />

      {/* Featured product */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="font-mono text-xs tracking-widest text-gold uppercase mb-4">
          Our first product
        </p>
        <div className="bg-panel border border-line rounded-sm p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">ClubVest</h2>
            <p className="text-muted leading-relaxed max-w-xl">
              A platform for running savings clubs, SACCOs, and informal
              investment groups — contributions, loans, member records, and
              reporting, all in one place, built for how Ugandan groups
              actually manage money.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted font-mono">
              <li>· Contributions &amp; loan tracking</li>
              <li>· Multi-club member management</li>
              <li>· Bulk historical imports</li>
              <li>· Financial reporting &amp; statements</li>
            </ul>
          </div>
          <a
            href="https://www.clubvestapp.com"
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap justify-self-start md:justify-self-end border border-gold text-goldSoft px-6 py-3 rounded-sm hover:bg-gold hover:text-ink transition-colors text-sm font-semibold"
          >
            Visit ClubVest ↗
          </a>
        </div>

        <div className="mt-6 border border-dashed border-line rounded-sm p-8 md:p-12 text-center">
          <p className="font-mono text-sm text-muted">
            PleReady and SMETracker are already in development.{' '}
            <Link to="/products" className="text-goldSoft hover:text-ink transition-colors underline underline-offset-4">
              See what's coming
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
