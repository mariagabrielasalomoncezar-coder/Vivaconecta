import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Planos from './components/Planos'
import Diferenciais from './components/Diferenciais'
import Depoimentos from './components/Depoimentos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Planos />
        <Diferenciais />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
