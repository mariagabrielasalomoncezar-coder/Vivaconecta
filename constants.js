export const WHATSAPP_NUMBER = '5511940317912' // TODO: substituir pelo número real da Viva Conecta
export const WHATSAPP_LINK = (msg = 'Olá! Quero saber mais sobre os planos Vivo Empresas.') =>
  `https://wa.me/${5511940317912}?text=${encodeURIComponent(msg)}`

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Planos', href: '#planos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]
