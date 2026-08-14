# Viva Conecta

Site institucional da Viva Conecta — rede parceira oficial Vivo Empresas em Guarulhos/SP — construído com Vite + React + Tailwind CSS.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos finais ficam em `dist/`.

## Antes de publicar

- Troque o número de WhatsApp em `src/constants.js` (`WHATSAPP_5511940317912`) pelo número real.
- Atualize telefone e endereço em `src/components/Contato.jsx`.
- Ajuste o mapa incorporado (iframe do Google Maps) com o endereço exato da loja.
- Substitua os depoimentos de `src/components/Depoimentos.jsx` por depoimentos reais, se houver.
- Troque o link do formulário de contato por um provedor real (ex: Formspree) caso não queira depender apenas do WhatsApp.

## Estrutura

```
src/
  components/   → Header, Hero, Sobre, Planos, Diferenciais, Depoimentos, Contato, Footer, WhatsAppButton, SignalBars, Icons
  hooks/         → useReveal (animação de entrada ao rolar a página)
  constants.js   → número de WhatsApp e links de navegação
  App.jsx        → composição das seções
  index.css      → estilos globais e camada Tailwind
```

## Identidade visual

- Cor primária: roxo Vivo (`#66019D`) — herda a cor institucional da marca parceira.
- Cor de assinatura: amarelo-sinal (`#FFC629`) — identidade própria da Viva Conecta, remete a "sinal"/conexão.
- Tipografia: Space Grotesk (display) + IBM Plex Sans (texto) + IBM Plex Mono (detalhes).
- Elemento de assinatura: barras de sinal animadas (`SignalBars.jsx`), usadas no Hero como metáfora literal de conectividade e resposta rápida.
