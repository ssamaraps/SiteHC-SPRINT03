"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Popup } from "@/components/popup"
import Link from "next/link"

export default function HomePage() {
  const [welcomePopupOpen, setWelcomePopupOpen] = useState(false)
  const [confirmPopupOpen, setConfirmPopupOpen] = useState(false)
  const [cancelPopupOpen, setCancelPopupOpen] = useState(false)

  useEffect(() => {
    const popupShown = sessionStorage.getItem("popupBoasVindasShown")
    if (!popupShown) {
      setWelcomePopupOpen(true)
      sessionStorage.setItem("popupBoasVindasShown", "true")
    }
  }, [])

  const handleConfirm = () => {
    setWelcomePopupOpen(false)
    setConfirmPopupOpen(true)
  }

  const handleCancel = () => {
    setWelcomePopupOpen(false)
    setCancelPopupOpen(true)
  }

  return (
    <>
      <Header className="cabecalho-inicial" />

      <main className="conteudo-principal">
        {/* Welcome Popup */}
        <Popup isOpen={welcomePopupOpen} onClose={() => setWelcomePopupOpen(false)} title="Olá">
          <p>Sua próxima consulta é dia 31/07 às 15h com o Dr. João - Dermatologista.</p>
          <p>Você já confirmou sua presença?</p>
          <div className="botoes-popup">
            <button className="botao-popup" onClick={handleConfirm}>
              Confirmar
            </button>
            <button className="botao-popup" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </Popup>

        {/* Confirm Popup */}
        <Popup isOpen={confirmPopupOpen} onClose={() => setConfirmPopupOpen(false)} title="Sua Presença foi Confirmada">
          <p>Consulta foi confirmada com sucesso.</p>
          <p>No dia da consulta: lembre-se de entrar no app com alguns minutos de antecedência.</p>
          <p>Se precisar de ajuda estamos por aqui!</p>
          <div className="botoes-popup">
            <Link href="/assistente">
              <button className="botao-popup botao-assistente">Falar com Assistente</button>
            </Link>
            <button className="botao-popup botao-fechar" onClick={() => setConfirmPopupOpen(false)}>
              Ok
            </button>
          </div>
        </Popup>

        {/* Cancel Popup */}
        <Popup isOpen={cancelPopupOpen} onClose={() => setCancelPopupOpen(false)} title="Consulta Cancelada">
          <p>Sua consulta foi cancelada.</p>
          <p>Se precisar de ajuda para reagendar, estamos aqui.</p>
          <div className="botoes-popup">
            <Link href="/assistente">
              <button className="botao-popup botao-assistente">Falar com Assistente</button>
            </Link>
            <button className="botao-popup botao-fechar" onClick={() => setCancelPopupOpen(false)}>
              Ok
            </button>
          </div>
        </Popup>

        {/* Hero Section */}
        <section className="destaque">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-oxRYYrNPxL2yUYy7ajHwpuJeVZET5y.png"
            alt="Imagem Fisioterapeuta em teleconsulta"
          />
          <div className="texto-destaque">
            <h1>SAÚDE DIGITAL</h1>
            <p className="paragrafo-destaque">Bem-vindo! Aqui ajudamos você a usar o app de teleconsulta do HC</p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="cartoes">
          <Link href="/assistente">
            <div className="cartao">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Assistente-card1-rD6plDm5VAwcAtWklzVPDpcIZ9sbYh.png"
                alt="Imagem Assistente Virtual"
                className="imagem-cartao1"
              />
              <h3>Nosso Suporte</h3>
              <p>Agendamentos, cadastro, orientações</p>
            </div>
          </Link>
          <Link href="/agenda">
            <div className="cartao">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agenda-card2-xfQ7NjEOTgtr51dQVTGBvbQctXjCyL.png"
                alt="Imagem Agenda"
                className="imagem-cartao"
              />
              <h3>Agenda</h3>
              <p>Sua agenda</p>
            </div>
          </Link>
          <Link href="/guia-paciente">
            <div className="cartao">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guia-card3-r2Wxak5EQO5aFUAbC9zc3hbpOot8N5.png"
                alt="Imagem do Guia do Paciente"
                className="imagem-cartao"
              />
              <h3>Guia do paciente</h3>
              <p>Informações úteis para pacientes</p>
            </div>
          </Link>
          <Link href="/avaliacao">
            <div className="cartao">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avalia%C3%A7%C3%A3o-card4-7chTNZKPOcisYdlLvt2gFbWkHj8ueF.png"
                alt="Imagem da Avaliação"
                className="imagem-cartao"
              />
              <h3 className="avaliação-card4">Avaliação</h3>
              <p className="q">Clique aqui para avaliar a sua experiência</p>
            </div>
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="container-recursos">
          <div className="texto-recursos">
            <Link href="/faq">
              <h2>
                PERGUNTAS <br /> FREQUENTES
              </h2>
            </Link>
          </div>
          <div className="container-rolagem">
            <Link href="/respostas">
              <div className="cartao-rolagem">
                <h2>Como entrar na Teleconsulta?</h2>
                <p>Para entrar na teleconsulta basta...</p>
              </div>
            </Link>
            <Link href="/respostas">
              <div className="cartao-rolagem">
                <h2>Como confirmar a presença na consulta?</h2>
                <p>Para confirmar sua presença.......</p>
              </div>
            </Link>
            <Link href="/respostas">
              <div className="cartao-rolagem">
                <h2>Como reagendar uma teleconsulta</h2>
                <p>Basta entrar na aba "agenda"...</p>
              </div>
            </Link>
            <Link href="/respostas">
              <div className="cartao-rolagem">
                <h2>O que lista de espera</h2>
                <p>Lista de espera é uma nova função...</p>
              </div>
            </Link>
            <Link href="/respostas">
              <div className="cartao-rolagem">
                <h2>Onde vejo meus pontos</h2>
                <p>Clique em agenda, role para baixo...</p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
