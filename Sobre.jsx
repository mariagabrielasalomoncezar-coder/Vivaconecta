import useReveal from '../hooks/useReveal'
import { PinIcon } from './Icons'

export default function Sobre() {
  const ref = useReveal()

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <div>
          <span className="eyebrow">Quem somos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-ink leading-tight">
            Uma rede parceira Vivo Empresas com endereço, cara e telefone em Guarulhos
          </h2>
        </div>

        <div className="space-y-5 text-ink/70 text-lg leading-relaxed">
          <p>
            A <strong className="text-ink">Viva Conecta</strong> é uma rede parceira
            oficial da <strong className="text-ink">Vivo Empresas</strong>, sediada em
            Guarulhos. Ajudamos negócios de todos os portes a contratar planos móveis,
            internet, fibra e soluções de telefonia da Vivo — com a proximidade de quem
            atende de perto e conhece a realidade de quem empreende na região.
          </p>
          <p>
            Nossa missão é simples: tirar a complexidade de contratar telecom
            corporativa. Em vez de ligar para uma central e esperar, sua empresa fala
            com uma equipe de verdade, que entende o que você precisa e resolve rápido.
          </p>
          <div className="flex items-center gap-2 pt-2 text-purple-700 font-semibold">
            <PinIcon className="w-5 h-5" />
            Guarulhos, SP
          </div>
        </div>
      </div>
    </section>
  )
}
