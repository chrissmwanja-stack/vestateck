import Seal from './Seal'

export default function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Seal size={30} />
          <div>
            <p className="font-display text-ink text-lg leading-none">Vestateck</p>
            <p className="text-muted text-xs mt-1 font-mono">Kampala, Uganda</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted font-mono">
          <a href="mailto:hello@vestateck.com" className="hover:text-goldSoft transition-colors">
            hello@vestateck.com
          </a>
          <a
            href="https://www.clubvestapp.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-goldSoft transition-colors"
          >
            clubvestapp.com ↗
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-10">
        <p className="text-xs text-muted font-mono">
          © {new Date().getFullYear()} Vestateck Ltd. Building the ledger layer for community savings.
        </p>
      </div>
    </footer>
  )
}
