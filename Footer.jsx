import { NAV_LINKS } from '../constants'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display font-semibold text-xl text-white">
              viva<span className="text-sunbeam-500">:</span>conecta
            </p>
            <p className="mt-2 text-sm max-w-xs">
              Rede parceira oficial Vivo Empresas em Guarulhos, SP.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs">
          <p>Parceiro autorizado Vivo Empresas · Guarulhos, SP</p>
          <p>© {new Date().getFullYear()} Viva Conecta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
