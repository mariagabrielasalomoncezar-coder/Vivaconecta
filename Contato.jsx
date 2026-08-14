import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { WHATSAPP_LINK } from '../constants'
import { PinIcon, PhoneIcon, ClockIcon, WhatsAppIcon } from './Icons'

export default function Contato() {
  const ref = useReveal()
  const [form, setForm] = useState({ nome: '', empresa: '', telefone: '', email: '', mensagem: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const texto = `Olá! Meu nome é ${form.nome}, da empresa ${form.empresa}.\nTelefone: ${form.telefone}\nE-mail: ${form.email}\nMensagem: ${form.mensagem}`
    window.open(WHATSAPP_LINK(texto), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="py-20 sm:py-28 bg-paper">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-14">
        <div>
          <span className="eyebrow">Fale com a gente</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-ink leading-tight">
            Peça uma proposta e receba retorno rápido
          </h2>
          <p className="mt-4 text-ink/65 max-w-md">
            Preencha o formulário ou fale direto pelo WhatsApp. Nossa equipe em
            Guarulhos responde com agilidade.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-3">
              <PinIcon className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <span className="text-ink/75">Guarulhos, SP — atendimento presencial com hora marcada</span>
            </li>
            <li className="flex items-start gap-3">
              <PhoneIcon className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <span className="text-ink/75">(11) 99999-9999</span>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <span className="text-ink/75">Segunda a sexta, 8h às 18h</span>
            </li>
          </ul>

          <a
            href={WHATSAPP_LINK()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold px-6 py-3.5"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chamar no WhatsApp
          </a>

          <div className="mt-10 rounded-2xl overflow-hidden border border-mist h-56">
            <iframe
              title="Localização Viva Conecta em Guarulhos"
              className="w-full h-full grayscale"
              loading="lazy"
              src="https://www.google.com/maps?q=Guarulhos,SP&output=embed"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-mist p-8 sm:p-10 space-y-5">
          <div>
            <label className="text-sm font-medium text-ink/70" htmlFor="nome">Nome</label>
            <input
              id="nome" name="nome" required value={form.nome} onChange={handleChange}
              className="mt-1.5 w-full rounded-xl border border-mist2 px-4 py-3 focus:border-purple-500 outline-none"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink/70" htmlFor="empresa">Empresa</label>
            <input
              id="empresa" name="empresa" required value={form.empresa} onChange={handleChange}
              className="mt-1.5 w-full rounded-xl border border-mist2 px-4 py-3 focus:border-purple-500 outline-none"
              placeholder="Nome da empresa"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-ink/70" htmlFor="telefone">Telefone</label>
              <input
                id="telefone" name="telefone" required value={form.telefone} onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-mist2 px-4 py-3 focus:border-purple-500 outline-none"
                placeholder="(11) 90000-0000"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink/70" htmlFor="email">E-mail</label>
              <input
                id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-mist2 px-4 py-3 focus:border-purple-500 outline-none"
                placeholder="voce@empresa.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-ink/70" htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem" name="mensagem" rows={4} value={form.mensagem} onChange={handleChange}
              className="mt-1.5 w-full rounded-xl border border-mist2 px-4 py-3 focus:border-purple-500 outline-none resize-none"
              placeholder="Conte rapidamente o que sua empresa precisa"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-3.5"
          >
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
