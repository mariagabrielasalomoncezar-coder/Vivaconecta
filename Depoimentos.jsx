import useReveal from '../hooks/useReveal'

const DEPOIMENTOS = [
  {
    nome: 'Marcos Ferreira',
    cargo: 'Sócio, distribuidora em Guarulhos',
    texto:
      'Trocamos toda a operação móvel da empresa em poucos dias. O que mais pesou foi ter alguém disponível pra resolver, de verdade.',
  },
  {
    nome: 'Renata Alves',
    cargo: 'Administradora, clínica odontológica',
    texto:
      'Precisávamos de internet estável para o consultório e suporte rápido quando algo saía do ar. A Viva Conecta entregou os dois.',
  },
  {
    nome: 'João Batista',
    cargo: 'Gerente, transportadora',
    texto:
      'Atendimento próximo mesmo, sem central automática. Ligou, resolveu. É isso que a gente precisava.',
  },
]

export default function Depoimentos() {
  const ref = useReveal()

  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <span className="eyebrow">Quem já conecta com a gente</span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-ink leading-tight max-w-xl">
          Empresas de Guarulhos que já sentiram a diferença
        </h2>

        <div ref={ref} className="reveal mt-14 grid md:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((d) => (
            <figure key={d.nome} className="bg-paper rounded-2xl p-8 border border-mist">
              <blockquote className="text-ink/75 leading-relaxed">“{d.texto}”</blockquote>
              <figcaption className="mt-6">
                <p className="font-display font-semibold text-ink">{d.nome}</p>
                <p className="text-sm text-ink/50">{d.cargo}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink/40">
          Depoimentos ilustrativos para fins de demonstração.
        </p>
      </div>
    </section>
  )
}
