import { WHATSAPP_LINK } from '../constants'
import SignalBars from './SignalBars'

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-paper overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-sunbeam-500" />
            Parceira oficial Vivo Empresas · Guarulhos
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-ink">
            Conexão boa pra empresa
            <span className="text-purple-600"> é sinal forte </span>
            do começo ao fim
          </h1>

          <p className="mt-6 text-lg text-ink/70 max-w-md">
            A Viva Conecta leva os planos da Vivo Empresas até você com um atendimento
            que sua empresa sente falta: humanizado, rápido e eficiente — do primeiro
            contato ao pós-venda.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-7 py-3.5"
            >
              Fale com um especialista
            </a>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 rounded-full border border-purple-600/30 hover:border-purple-600 transition-colors text-purple-700 font-semibold px-7 py-3.5"
            >
              Ver planos
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm font-mono text-ink/50">
            <span>Resposta em minutos</span>
            <span className="w-1 h-1 rounded-full bg-ink/30" />
            <span>Sem letra miúda</span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative bg-ink rounded-3xl px-10 py-14 sm:px-14 sm:py-16 w-full max-w-sm">
            <SignalBars className="justify-center" />
            <p className="mt-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-white/50">
              Sinal Viva Conecta
            </p>
            <p className="mt-2 text-center font-display text-white text-lg">
              Sempre no ar pra sua empresa
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
