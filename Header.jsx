import { useState } from 'react'
import { NAV_LINKS, WHATSAPP_LINK } from '../constants'
import { MenuIcon, CloseIcon } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur border-b border-mist">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="font-display font-semibold text-xl text-ink">
          viva<span className="text-purple-600">:</span>conecta
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 hover:text-purple-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors text-white text-sm font-semibold px-5 py-2.5"
        >
          Fale conosco
        </a>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-paper border-t border-mist px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink/80"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center items-center gap-2 rounded-full bg-purple-600 text-white text-sm font-semibold px-5 py-3"
          >
            Fale conosco
          </a>
        </nav>
      )}
    </header>
  )
}
