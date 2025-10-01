"use client"

import { useState, type FormEvent } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { Popup } from "@/components/popup"

export default function AvaliacaoPage() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [successPopupOpen, setSuccessPopupOpen] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (nome && email && mensagem) {
      setSuccessPopupOpen(true)
      setNome("")
      setEmail("")
      setMensagem("")
    } else {
      alert("Por favor, preencha todos os campos.")
    }
  }

  return (
    <>
      <Header />
      <BackButton />

      <main role="main">
        <section className="container-avaliacao" aria-labelledby="titulo-avaliacao">
          <div className="retangulo-avaliacao">
            <h2 id="titulo-avaliacao">Compartilhe sua Opinião</h2>
            <form className="formulario-avaliacao" onSubmit={handleSubmit}>
              <label htmlFor="nome-avaliacao">Nome</label>
              <input
                type="text"
                id="nome-avaliacao"
                placeholder="Digite seu nome"
                aria-label="Digite seu nome"
                tabIndex={0}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <label htmlFor="email-avaliacao">E-mail</label>
              <input
                type="email"
                id="email-avaliacao"
                placeholder="Digite seu e-mail"
                aria-label="Digite seu e-mail"
                tabIndex={0}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="mensagem-avaliacao">Mensagem</label>
              <textarea
                id="mensagem-avaliacao"
                placeholder="Nos conte como foi..."
                aria-label="Digite sua mensagem"
                tabIndex={0}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />

              <p className="exemplo-mensagem">Diga suas dificuldades, sugestões ou elogios</p>

              <button type="submit" className="botao-info botao-azul" tabIndex={0}>
                Enviar Feedback
              </button>
            </form>
          </div>
        </section>

        <Popup isOpen={successPopupOpen} onClose={() => setSuccessPopupOpen(false)} title="Feedback Enviado">
          <p>Obrigado por compartilhar sua opinião!</p>
          <div className="botoes-popup">
            <button className="botao-popup botao-direito" onClick={() => setSuccessPopupOpen(false)}>
              Ok
            </button>
          </div>
        </Popup>
      </main>

      <Footer />
    </>
  )
}
