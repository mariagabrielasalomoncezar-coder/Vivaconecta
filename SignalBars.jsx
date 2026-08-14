const bars = [
  { h: 'h-10', delay: '0s', color: 'bg-sunbeam-500' },
  { h: 'h-16', delay: '0.15s', color: 'bg-purple-400' },
  { h: 'h-24', delay: '0.3s', color: 'bg-sunbeam-500' },
  { h: 'h-32', delay: '0.45s', color: 'bg-purple-400' },
  { h: 'h-40', delay: '0.6s', color: 'bg-sunbeam-500' },
]

/**
 * Elemento de assinatura da marca: barras de sinal pulsando, como um medidor
 * de conexão ao vivo. Representa literalmente "sinal", "conexão" e
 * "resposta rápida" — o núcleo da proposta da Viva Conecta.
 */
export default function SignalBars({ className = '' }) {
  return (
    <div className={`flex items-end gap-3 ${className}`} aria-hidden="true">
      {bars.map((bar, i) => (
        <span
          key={i}
          className={`w-4 sm:w-5 ${bar.h} ${bar.color} rounded-full origin-bottom motion-safe:animate-[pulseBar_1.6s_ease-in-out_infinite]`}
          style={{ animationDelay: bar.delay }}
        />
      ))}
    </div>
  )
}
