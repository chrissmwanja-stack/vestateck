import { NavLink } from 'react-router-dom'
import Seal from './Seal'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-3 group">
          <Seal size={34} />
          <span className="font-display text-xl tracking-tight text-ink group-hover:text-goldSoft transition-colors">
            Vestateck
          </span>
        </NavLink>
        <nav className="flex items-center gap-8 font-body text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-goldSoft' : 'text-muted hover:text-ink'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
