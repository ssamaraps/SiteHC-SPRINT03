import Link from "next/link"

export function Footer() {
  return (
    <footer className="cor-rodape">
      <div className="rodape-esquerdo">
        <p>Central de Atendimento</p>
        <div className="item-rodape">
          <img src="/placeholder.svg?height=20&width=20" alt="Ícone Telefone" />
          <span>(11)99999-9999</span>
        </div>
        <div className="item-rodape">
          <img src="/placeholder.svg?height=20&width=20" alt="Ícone WhatsApp" />
          <span>(11)99999-9999</span>
        </div>
      </div>
      <div className="rodape-direito">
        <p>Redes Sociais</p>
        <div className="icones-rodape">
          <div className="item-rodape">
            <Link href="https://www.facebook.com/hospitaldasclinicasdafmusp/?locale=pt_BR">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facebook1-wJWf33tml5SZdDbSIBDDxcGOX30fFm.png"
                alt="Ícone de Facebook"
              />
            </Link>
          </div>
          <Link href="https://www.instagram.com/hospitalhcfmusp/">
            <div className="item-rodape">
              <img src="/placeholder.svg?height=20&width=20" alt="Ícone de Instagram" />
            </div>
          </Link>
          <Link href="https://www.youtube.com/channel/UC_DUjcI35Hm0ix74KDQ67Jw/videos?view=0">
            <div className="item-rodape">
              <img src="/placeholder.svg?height=20&width=20" alt="Ícone de Youtube" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/company/hcfmusp/?originalSubdomain=br">
            <div className="item-rodape">
              <img src="/placeholder.svg?height=20&width=20" alt="Ícone de Linkedin" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}
