"use client"

import { useRouter } from "next/navigation"

export function BackButton() {
  const router = useRouter()

  return (
    <nav aria-label="Navegação auxiliar">
      <button
        className="botao-branco botao-voltar-topo"
        onClick={() => router.back()}
        aria-label="Voltar para a página anterior"
      >
        ← Voltar
      </button>
    </nav>
  )
}
