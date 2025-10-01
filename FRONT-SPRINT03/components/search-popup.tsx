"use client"

import Link from "next/link"
import { Popup } from "./popup"

interface SearchResult {
  termo: string
  pagina: string
  texto: string
}

interface SearchPopupProps {
  isOpen: boolean
  onClose: () => void
  results: SearchResult[]
}

export function SearchPopup({ isOpen, onClose, results }: SearchPopupProps) {
  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Resultados da Busca">
      <div id="resultados-busca">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="resultado-busca">
              <Link href={result.pagina}>{result.texto}</Link>
            </div>
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
      <div className="botoes-popup">
        <button className="botao-popup botao-direito" onClick={onClose}>
          Fechar
        </button>
      </div>
    </Popup>
  )
}
