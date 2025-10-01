import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import Link from "next/link"

interface FAQ {
  question: string
  answer: string
}

export default function FAQPage() {
  const faqs: FAQ[] = [
    {
      question: "Como faço para agendar uma consulta?",
      answer:
        "Você pode agendar sua consulta diretamente no portal online, seguindo os passos descritos na seção de agendamento.",
    },
    {
      question: "Como acesso meus exames?",
      answer:
        'Após realizar seus exames, acesse o portal e vá até a aba "Resultados". Insira seu login para visualizar os arquivos.',
    },
    {
      question: "Quais documentos preciso levar?",
      answer: "Leve documento com foto, cartão do SUS e, se houver, o pedido médico e comprovante de agendamento.",
    },
    {
      question: "Como posso cancelar uma consulta?",
      answer: "Você pode cancelar a consulta no mesmo local onde agendou, com pelo menos 24h de antecedência.",
    },
  ]

  return (
    <>
      <Header />
      <BackButton />

      <main role="main">
        <section className="container-faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Perguntas Frequentes</h2>

          {faqs.map((faq, index) => (
            <Link
              key={index}
              href="/respostas"
              className="caixa-faq"
              role="button"
              tabIndex={0}
              aria-expanded="false"
              aria-controls={`resposta${index + 1}`}
              aria-label={`Saiba ${faq.question.toLowerCase()}`}
            >
              <h3>{faq.question}</h3>
              <p id={`resposta${index + 1}`}>{faq.answer}</p>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}
