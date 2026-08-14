import useReveal from '../hooks/useReveal'
import { ChatHeartIcon, BoltIcon, ClockIcon, ShieldIcon } from './Icons'

const ITENS = [
  {
    icon: ChatHeartIcon,
    titulo: 'Atendimento humanizado',
    descricao: 'Você fala com pessoas que ouvem de verdade, não com um menu de opções.',
  },
  {
    icon: BoltIcon,
    titulo: 'Rapidez na resposta',
    descricao: 'Sua solicitação não fica na fila. Respondemos em minutos, não em dias.',
  },
  {
    icon: ClockIcon,
    titulo: 'Eficiência no suporte',
    descricao: 'Resolvemos direto, sem enrolação, para sua empresa voltar ao que importa.',
  },
  {
    icon: ShieldIcon,
    titulo: 'Parceria oficial e confiável',
    descricao: 'Somos rede parceira autorizada Vivo Empresas, com toda a segurança da marca.',
  },
]

export default function Diferenciais() {
  const ref = useReveal()

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-ink text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl">
          <span className="eyebrow text-sunbeam-500">Por que a Viva Conecta</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
            Sinal forte não é só de internet. É de atendimento também.
          </h2>
        </div>

        <div ref={ref} className="reveal mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITENS.map((item) => (
            <div key={item.titulo} className="border-t border-white/15 pt-6">
              <item.icon className="w-7 h-7 text-sunbeam-500" />
              <h3 className="mt-5 font-display font-semibold text-lg">{item.titulo}</h3>
              <p className="mt-2 text-white/60 leading-relaxed text-sm">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
