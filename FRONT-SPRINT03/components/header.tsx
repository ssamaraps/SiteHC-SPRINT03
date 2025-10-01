"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { SearchPopup } from "./search-popup"

interface HeaderProps {
  className?: string
}

export function Header({ className = "" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchPopupOpen, setSearchPopupOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<Array<{ termo: string; pagina: string; texto: string }>>([])
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLDivElement>(null)

  const searchDatabase = [
    { termo: "agendar consulta", pagina: "/resposta", texto: "Como agendar uma consulta" },
    { termo: "teleconsulta", pagina: "/posicao-certa", texto: "Posição certa para teleconsulta" },
    { termo: "assistente", pagina: "/assistente", texto: "Falar com o Assistente Virtual" },
    { termo: "faq", pagina: "/faq", texto: "Perguntas Frequentes" },
    { termo: "quem somos", pagina: "/sobre", texto: "Sobre nossa equipe" },
    { termo: "login", pagina: "/login", texto: "Fazer login no portal" },
    { termo: "cadastro", pagina: "/lista-espera", texto: "Entre na lista de espera" },
    { termo: "paciente", pagina: "/pontos", texto: "Pontos" },
    { termo: "avaliação", pagina: "/avaliacao", texto: "Compartilhar sua opinião" },
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        toggleRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const termo = searchQuery.trim().toLowerCase()
      const results = searchDatabase.filter((item) => item.termo.toLowerCase().includes(termo))
      setSearchResults(results)
      setSearchPopupOpen(true)
      setSearchQuery("")
    }
  }

  return (
    <>
      <header className={`cor-cabecalho ${className}`}>
        <img src="/placeholder.svg?height=80&width=150" alt="Logotipo HC" className="logo" />
        <div className="barra-pesquisa">
          <input
            type="text"
            placeholder="Pesquisar..."
            aria-label="Barra de pesquisa"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleSearch}
          />
        </div>
        <div
          ref={toggleRef}
          className="alternar-menu"
          role="button"
          tabIndex={0}
          aria-label="Abrir menu de navegação"
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={(e) => e.key === "Enter" && setMenuOpen(!menuOpen)}
        >
          <span className="hamburguer">☰</span>
          <span className="rotulo-menu">Menu</span>
        </div>
        <nav ref={menuRef} className={`menu-suspenso ${menuOpen ? "ativo" : ""}`}>
          <ul>
            <li>
              <Link href="/" aria-label="Ir para a Página inicial">
                Página Inicial
              </Link>
            </li>
            <li>
              <Link href="/assistente" aria-label="Ir para o Suporte">
                Suporte
              </Link>
            </li>
            <li>
              <Link href="/faq" aria-label="Ir para as Perguntas Frequentes">
                Perguntas Frequentes
              </Link>
            </li>
            <li>
              <Link href="/login" aria-label="Entrar na sua conta">
                Entre em sua Conta
              </Link>
            </li>
            <li>
              <Link href="/avaliacao" aria-label="Ir para Avaliação">
                Avalie sua experiência
              </Link>
            </li>
            <li>
              <Link href="/sobre" aria-label="Ir para a página da nossa equipe">
                Nossa Equipe
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <SearchPopup isOpen={searchPopupOpen} onClose={() => setSearchPopupOpen(false)} results={searchResults} />
    </>
  )
}
