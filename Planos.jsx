import useReveal from '../hooks/useReveal'
import { WHATSAPP_LINK } from '../constants'
import { SimCardIcon, WifiIcon, PhoneIcon, CloudIcon } from './Icons'

const PLANOS = [
  {
    icon: SimCardIcon,
    titulo: 'Planos móveis empresariais',
    descricao:
      'Linhas com franquia de dados flexível, compartilhamento entre a equipe e gestão simplificada para o seu CNPJ.',
  },
  {
    icon: WifiIcon,
    titulo: 'Internet e fibra',
    descricao:
      'Conexão de alta velocidade e estabilidade para operações que não podem parar, com suporte dedicado a empresas.',
  },
  {
    icon: PhoneIcon,
    titulo: 'Telefonia fixa',
    descricao:
      'Linhas fixas e ramais para atendimento, vendas e suporte, integrados às demais soluções Vivo Empresas.',
  },
  {
    icon: CloudIcon,
    titulo: 'Nuvem e tecnologia',
    descricao:
      'Soluções em nuvem, segurança e tecnologia para empresas que querem crescer com uma base digital sólida.',
  },
]

export default function Planos() {
  const ref = useReveal()

  return (
    <section id="planos" className="py-20 sm:py-28 bg-paper">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl">
          <span className="eyebrow">Planos e serviços</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-ink leading-tight">
            Todo o portfólio Vivo Empresas, com quem cuida do início ao fim
          </h2>
        </div>

        <div ref={ref} className="reveal mt-14 grid sm:grid-cols-2 gap-6">
          {PLANOS.map((plano) => (
            <div
              key={plano.titulo}
              className="group bg-white rounded-2xl p-8 border border-mist hover:border-purple-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-600">
                <plano.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-display font-semibold text-ink">
                {plano.titulo}
              </h3>
              <p className="mt-2 text-ink/65 leading-relaxed">{plano.descricao}</p>
              <a
                href={WHATSAPP_LINK(`Olá! Quero solicitar uma proposta de ${plano.titulo}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 group-hover:gap-2.5 transition-all"
              >
                Solicitar proposta →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
