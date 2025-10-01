import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import Link from "next/link"

export default function AssistentePage() {
  return (
    <>
      <Header />
      <BackButton />

      <main role="main">
        <section className="cabecalho-assistente" aria-labelledby="titulo-assistente">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Assistente-card1-rD6plDm5VAwcAtWklzVPDpcIZ9sbYh.png"
            alt="Imagem do Assistente Virtual"
            className="imagem-assistente"
            role="img"
          />
          <div className="texto-assistente">
            <h1 id="titulo-assistente">Assistente Virtual HC</h1>
            <p>Converse com nosso assistente para obter ajuda instantânea!</p>
            <p className="texto-assistente-p">
              <strong>Assistente Virtual:</strong> Aqui você pode conversar com um assistente inteligente que foi criado
              para te ajudar de forma simples. Ele explica como usar o aplicativo da teleconsulta passo a passo, sem
              pressa. Você só precisa tocar e escrever ou escolher as opções na tela. É como uma conversa tranquila,
              feita para facilitar sua vida.
            </p>
            <p className="texto-assistente-p">
              <strong>Falar com o Suporte:</strong> Se preferir, você também pode ligar direto para o suporte. É uma
              ligação normal, como você já conhece. Assim, pode escolher a forma que se sentir mais confortável.
            </p>
          </div>
        </section>

        <section className="container-assistente" aria-label="Opções de assistência">
          <Link href="#" className="link-assistente" aria-label="Falar com Assistente Virtual">
            <div className="caixa-assistente" role="button" tabIndex={0}>
              <h2>Falar com Assistente Virtual</h2>
            </div>
          </Link>
          <Link href="#" className="link-assistente" aria-label="Falar com o Suporte">
            <div className="caixa-assistente" role="button" tabIndex={0}>
              <h2>Falar com o Suporte</h2>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
