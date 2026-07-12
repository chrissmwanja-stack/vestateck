const features = [
  {
    title: 'Contributions',
    body: 'Members contribute on their own schedule; treasurers see it reconciled automatically, with a full history behind every figure.',
  },
  {
    title: 'Loans',
    body: 'Loan requests, approvals, repayment schedules, and fund balances stay accurate without a side spreadsheet.',
  },
  {
    title: 'Member management',
    body: 'Every club runs its own roster, roles, and permissions — one platform, many independent clubs.',
  },
  {
    title: 'Historical imports',
    body: 'Groups switching from paper or spreadsheets can bring years of records in without losing a single entry.',
  },
  {
    title: 'Reporting',
    body: 'Statements and financial reports generate on demand, in formats members and auditors both trust.',
  },
  {
    title: 'Billing',
    body: 'Subscription plans built for groups of every size, from a handful of members to a full SACCO.',
  },
]

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
      <p className="font-mono text-xs tracking-widest text-gold uppercase mb-4">Products</p>
      <h1 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
        One product live. Others on the way.
      </h1>

      {/* ClubVest */}
      <div className="mt-16 bg-panel border border-line rounded-sm p-8 md:p-12">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
          <h2 className="font-display text-3xl text-ink">ClubVest</h2>
          <span className="font-mono text-xs text-teal border border-teal/40 rounded-full px-3 py-1">
            Live
          </span>
        </div>
        <p className="text-muted leading-relaxed max-w-2xl">
          ClubVest is software for running savings clubs, SACCOs, and
          informal investment groups. It replaces the exercise book and the
          scattered WhatsApp messages with a single, shared source of truth
          — for treasurers, admins, and members alike.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="border-t border-line pt-4">
              <h3 className="font-body font-semibold text-ink mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
        <a
          href="https://www.clubvestapp.com"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 bg-gold text-ink font-semibold px-6 py-3 rounded-sm hover:bg-goldSoft transition-colors"
        >
          Visit ClubVest
          <span aria-hidden>→</span>
        </a>
      </div>

      {/* In development */}
      <p className="font-mono text-xs tracking-widest text-gold uppercase mt-16 mb-6">
        In development
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-dashed border-line rounded-sm p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
            <h2 className="font-display text-2xl text-ink">PleReady</h2>
            <span className="font-mono text-xs text-gold border border-gold/40 rounded-full px-3 py-1">
              In development
            </span>
          </div>
          <p className="text-muted leading-relaxed text-sm">
            Exam-readiness software for P.7 candidates preparing for
            Uganda's Primary Leaving Examinations — practice tests,
            diagnostics, and progress tracking built around how PLE
            candidates actually study.
          </p>
        </div>

        <div className="border border-dashed border-line rounded-sm p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
            <h2 className="font-display text-2xl text-ink">SMETracker</h2>
            <span className="font-mono text-xs text-gold border border-gold/40 rounded-full px-3 py-1">
              In development
            </span>
          </div>
          <p className="text-muted leading-relaxed text-sm">
            Bookkeeping and inventory for small businesses — sales, stock, and
             expenses tracked in one place, built mobile-first for how SMEs
              actually run day to day.
        </p>
        </div>
      </div>

      <p className="mt-10 text-center font-mono text-sm text-muted">
        Building a savings group, school, or something else entirely? We'd
        like to hear about it —{' '}
        <a href="/contact" className="text-goldSoft hover:text-ink transition-colors underline underline-offset-4">
          get in touch
        </a>
        .
      </p>
    </div>
  )
}
