export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
      <p className="font-mono text-xs tracking-widest text-gold uppercase mb-4">About</p>
      <h1 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
        We build for the ledger, not around it.
      </h1>

      <div className="mt-14 grid md:grid-cols-[1fr_1fr] gap-14">
        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            Vestateck started with a simple observation: savings clubs,
            SACCOs, and informal investment groups move enormous amounts of
            money through Uganda's economy every year, and almost none of
            them are running on software built for them.
          </p>
          <p>
            {/* Personalize this paragraph with your own founding story. */}
            ClubVest, our first product, came out of watching that gap up
            close — treasurers reconciling exercise books by hand, members
            uncertain of their own balances, and disputes that a proper
            record would have prevented. We built the tool we thought
            should already exist.
          </p>
          <p>
            Vestateck is the company behind it, and the home for what we
            build next. ClubVest won't be the last product — it's the
            first proof that purpose-built software, made for how these
            groups actually work, is worth paying for.
          </p>
        </div>

        <div className="bg-panel border border-line rounded-sm p-8">
          <p className="font-mono text-xs tracking-widest text-gold uppercase mb-6">
            Team
          </p>
          <div className="space-y-6">
            <div>
              <p className="font-body font-semibold text-ink">Chris Mwanja</p>
              <p className="text-sm text-muted mt-1">
                Founder. An electronics and communications engineer by training, 
                Chris builds and runs ClubVest end to end — architecture, security, 
                the loan and contribution logic, the frontend, 
                and the product calls that tie it together.
              </p>
            </div>
            <div className="border-t border-line pt-6">
              <p className="font-body font-semibold text-ink">Ronnie Ikaaba</p>
              <p className="text-sm text-muted mt-1">
                Collaborator. Ronnie is a computer scientist working alongside Chris on ClubVest, 
                focused on backend architecture and security — authorization models, 
                data isolation between tenants, and the kind of systems-level correctness that matters.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-10">
        <p className="font-display text-2xl text-ink mb-3">Why Uganda first</p>
        <p className="text-muted leading-relaxed max-w-2xl">
          Community savings groups are a backbone of everyday finance
          across East Africa, and Uganda's are especially dense and
          active — from workplace SACCOs to teachers' groups like those
          organized through Walimu. Building for this market first means
          building for real, high-volume, high-trust use from day one.
        </p>
      </div>
    </div>
  )
}
