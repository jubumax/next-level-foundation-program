import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CloseIcon, MenuIcon } from '../ui/Icons'


const links = [
  { to: '/', label: 'Home' },
  { to: '/movies', label: 'Browse' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    'text-sm transition-colors ' +
    (isActive ? 'text-marquee' : 'text-cream/65 hover:text-cream')

  return (
    <header className="sticky top-0 z-40 border-b border-cream/10 bg-velvet-900/85 backdrop-blur">

      <div className="mx-auto flex max-w-shell items-center justify-between px-5 py-4">

        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-marquee font-display text-lg font-semibold text-velvet-900">
            M
          </span>
          <span className="font-display text-xl tracking-tight">MovieExplorer</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/movies"
            className="rounded-full bg-cream px-5 py-2 text-sm font-medium text-velvet-900 transition hover:bg-marquee"
          >
            Browse movies
          </Link>

        </nav>

        <button
          type="button"
          className="text-cream md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>

      </div>

      {open ? (

        <div className="border-t border-cream/10 px-5 py-4 md:hidden">

          <nav className="flex flex-col gap-4">

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/movies"
              onClick={() => setOpen(false)}
              className="rounded-full bg-cream px-5 py-2.5 text-center text-sm font-medium text-velvet-900"
            >
              Browse movies
            </Link>

          </nav>

        </div>

      ) : null}
    </header>
  )
}
