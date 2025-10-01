"use client"

import type { ReactNode } from "react"

interface PopupProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export function Popup({ isOpen, onClose, title, children }: PopupProps) {
  if (!isOpen) return null

  return (
    <div className={`popup ${isOpen ? "ativo" : ""}`}>
      <div className="cabecalho-popup">
        <h2>{title}</h2>
        <span
          className="fechar-popup"
          role="button"
          aria-label="Fechar popup"
          onClick={onClose}
          onKeyDown={(e) => e.key === "Enter" && onClose()}
          tabIndex={0}
        >
          ✖
        </span>
      </div>
      <div className="conteudo-popup">{children}</div>
    </div>
  )
}
