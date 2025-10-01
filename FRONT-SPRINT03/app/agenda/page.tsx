"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { Popup } from "@/components/popup"
import Link from "next/link"

interface Consulta {
  id: number
  data: string
  medico: string
}

export default function AgendaPage() {
  const [consultas] = useState<Consulta[]>([
    { id: 1, data: "30/04 às 14h00", medico: "Dr. João Silva - Dermatologista" },
    { id: 2, data: "15/05 às 10h30", medico: "Dr. Ana Lima - Ortopedista" },
  ])

  const [confirmPopupOpen, setConfirmPopupOpen] = useState(false)
  const [cancelPopupOpen, setCancelPopupOpen] = useState(false)
  const [reminderPopupOpen, setReminderPopupOpen] = useState(false)

  return (
    <>
      <Header />
      <BackButton />

      <main>
        <div className="container-consultas">
          <h1 className="titulo-secao">Próximas Consultas</h1>

          {consultas.map((consulta) => (
            <div key={consulta.id} className="caixa-consulta">
              <div className="info-esquerda">
                <p className="data-info">{consulta.data}</p>
                <p className="medico-info">{consulta.medico}</p>
              </div>
              <div className="botoes-info">
                <button
                  className="botao-info botao-confirmacao abrir-confirmar"
                  onClick={() => setConfirmPopupOpen(true)}
                  aria-label={`Confirmar presença na consulta com ${consulta.medico}`}
                >
                  Confirmar Presença
                </button>
                <button
                  className="botao-info botao-cancelar abrir-cancelar"
                  onClick={() => setCancelPopupOpen(true)}
                  aria-label={`Cancelar consulta com ${consulta.medico}`}
                >
                  Cancelar
                </button>
                <button
                  className="abrir-lembrete botao-info botao-lembrete"
                  onClick={() => setReminderPopupOpen(true)}
                  aria-label={`Adicionar lembrete para consulta com ${consulta.medico}`}
                >
                  Adicionar Lembrete
                </button>
              </div>
            </div>
          ))}

          <h2 className="titulo-secao">Lista de Espera</h2>
          <div className="caixa-pontos">
            <p className="pontos">
              Seja notificado sobre horários vagos e escolha entre <strong>manhã, tarde e noite!</strong>
            </p>
            <Link
              href="/lista-espera"
              className="botao-info botao-azul pontos-link"
              aria-label="Entrar na lista de espera para consultas"
            >
              Entrar na lista de espera
            </Link>
          </div>

          <h2 className="titulo-secao">Seus Pontos</h2>
          <div className="caixa-pontos">
            <p className="pontos">150 Pontos</p>
            <Link
              href="/pontos"
              className="botao-info botao-azul pontos-link"
              aria-label="Ver informações sobre pontos"
            >
              O que são pontos?
            </Link>
          </div>
        </div>

        {/* Confirm Popup */}
        <Popup isOpen={confirmPopupOpen} onClose={() => setConfirmPopupOpen(false)} title="Confirmação">
          <p>Presença confirmada com sucesso!</p>
          <div className="botoes-popup">
            <Link href="/escolha-posicao">
              <button
                className="botao-popup botao-assistente"
                aria-label="Clique aqui para testar os seus equipamentos"
              >
                clique para testar os seus equipamentos aqui!
              </button>
            </Link>
            <button
              className="botao-popup botao-fechar"
              onClick={() => setConfirmPopupOpen(false)}
              aria-label="Fechar popup de confirmação"
            >
              Ok
            </button>
          </div>
        </Popup>

        {/* Cancel Popup */}
        <Popup isOpen={cancelPopupOpen} onClose={() => setCancelPopupOpen(false)} title="Cancelamento">
          <p>Consulta cancelada com sucesso.</p>
          <div className="botoes-popup">
            <Link href="/assistente">
              <button className="botao-popup botao-assistente" aria-label="Falar com assistente">
                Falar com Assistente
              </button>
            </Link>
            <button
              className="botao-popup botao-fechar"
              onClick={() => setCancelPopupOpen(false)}
              aria-label="Fechar popup de cancelamento"
            >
              Ok
            </button>
          </div>
        </Popup>

        {/* Reminder Popup */}
        <Popup isOpen={reminderPopupOpen} onClose={() => setReminderPopupOpen(false)} title="Lembrete Adicionado">
          <p>Seu lembrete foi adicionado com sucesso.</p>
          <p>Você pode visualizar seus lembretes no app ou receber uma notificação no dia da consulta.</p>
          <div className="botoes-popup">
            <Link href="/assistente">
              <button className="botao-popup botao-assistente" aria-label="Falar com assistente">
                Falar com Assistente
              </button>
            </Link>
            <button
              className="botao-popup botao-fechar"
              onClick={() => setReminderPopupOpen(false)}
              aria-label="Fechar popup de lembrete"
            >
              Ok
            </button>
          </div>
        </Popup>
      </main>

      <Footer />
    </>
  )
}
