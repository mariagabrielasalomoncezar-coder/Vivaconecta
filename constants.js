export const WHATSAPP_NUMBER = '5511999999999' // TODO: substituir pelo número real da Viva Conecta
export const WHATSAPP_LINK = (msg = 'Olá! Quero saber mais sobre os planos Vivo Empresas.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Planos', href: '#planos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]
