import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import Link from "next/link"

export default function LoginPage() {
  return (
    <>
      <Header />
      <BackButton />

      <main>
        <section className="container-login">
          <h2>Login</h2>
          <div className="formulario-login">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" aria-label="Digite seu e-mail" />

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Digite sua senha" aria-label="Digite sua senha" />

            <button className="botao-info botao-azul">Entrar</button>
            <Link href="/signup" className="link-navegacao">
              Não tem conta? Cadastre-se
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
