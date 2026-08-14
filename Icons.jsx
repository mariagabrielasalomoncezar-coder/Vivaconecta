// Ícones SVG minimalistas, desenhados sob medida — evita dependências extras.
const base = 'w-6 h-6'

export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1.1L6.6 10.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)

export const WifiIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <path d="M2.5 8.5a15 15 0 0 1 19 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M5.8 12.3a10.5 10.5 0 0 1 12.4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M9.2 16a6 6 0 0 1 5.6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="12" cy="19.2" r="1.3" fill="currentColor"/>
  </svg>
)

export const CloudIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <path d="M7 18h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.6 1.6A3.5 3.5 0 0 0 7 18Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)

export const SimCardIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <path d="M8 3h8l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M9 12h6v5H9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)

export const ChatHeartIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <path d="M4 5h16v11H9l-5 4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M12 8.8c.9-1.4 3-1.2 3.4.4.4 1.6-1.6 2.8-3.4 3.8-1.8-1-3.8-2.2-3.4-3.8.4-1.6 2.5-1.8 3.4-.4Z" fill="currentColor"/>
  </svg>
)

export const BoltIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)

export const ShieldIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <path d="M12 21s-7-6.3-7-11.5A7 7 0 0 1 19 9.5C19 14.7 12 21 12 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
)

export const ClockIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <path
      fill="currentColor"
      d="M17 14.2c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3Z"
    />
    <path
      stroke="currentColor"
      strokeWidth="1.6"
      d="M12 21a9 9 0 1 0-7.8-4.5L3 21l4.6-1.2A9 9 0 0 0 12 21Z"
    />
  </svg>
)

export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" className={p.className || base}>
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)
