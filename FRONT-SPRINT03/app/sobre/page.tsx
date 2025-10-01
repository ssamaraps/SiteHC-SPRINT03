import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import Link from "next/link"

interface TeamMember {
  name: string
  image: string
  linkedin: string
  github: string
}

export default function SobrePage() {
  const teamMembers: TeamMember[] = [
    {
      name: "Samara Porto Souza",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%283%29-FZA7TgsiJ9mqvr8ZiENNYR0NbNOJ6t.jpg",
      linkedin: "https://www.linkedin.com/in/samara-porto-732723325",
      github: "https://github.com/ssamaraps",
    },
    {
      name: "Eduarda Weiss Ventura",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/duda.jfif-vrZvGunpsCyu1E2v6NuQVxAtPpoLVe.jpeg",
      linkedin: "https://www.linkedin.com/in/eduarda-weiss-ventura-55bb37268",
      github: "https://github.com/eduardawv",
    },
    {
      name: "Maria Gabriela Severo Landim",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gabi.jfif-e1ygm9iPhUydFU7V5mfWxQxm9vWJWS.jpeg",
      linkedin: "https://www.linkedin.com/in/maria-gabriela-landim-595654322/",
      github: "https://github.com/gabrielalandim",
    },
  ]

  return (
    <>
      <Header />
      <BackButton />

      <main>
        <section className="container-sobre" aria-labelledby="titulo-sobre">
          <h2 id="titulo-sobre">Quem Somos</h2>
          <p>
            &nbsp;&nbsp;Somos uma equipe formada por três estudantes de Tecnologia da Informação{" "}
            <strong>Eduarda Weiss (21 anos), Samara (19 anos) Maria Gabriela (18 anos)</strong>
            <br />
            &nbsp;&nbsp;Atualmente cursando o primeiro semestre da graduação. Unidas pelo interesse em{" "}
            <strong>aprender e crescer profissionalmente, </strong>
            creditamos na força da colaboração como base para o desenvolvimento de soluções relevantes e humanas.
            Eduarda e Maria Gabriela demonstram grande afinidade com a <strong>linguagem Java</strong>, enquanto Samara
            se destaca por seu entusiasmo com o <strong>front-end e sua paixão</strong> por{" "}
            <strong>bancos de dados.</strong> Todas participaram ativamente de cada etapa deste projeto, contribuindo
            com seus conhecimentos e aprendendo mutuamente ao longo do processo.
            <br />
            &nbsp;&nbsp;Nosso principal objetivo é aplicar a tecnologia como ferramenta de{" "}
            <strong>transformação</strong> no setor da saúde. Somos uma equipe apaixonada por inovação, trabalhando para
            tornar o acesso ao cuidado mais simples, eficiente e humano. No contexto do Hospital das Clínicas, unimos{" "}
            <strong>tecnologia e design</strong> para criar experiências significativas e que realmente fazem a{" "}
            <strong>diferença na vida</strong> das pessoas.
          </p>
        </section>

        <section className="container-equipe" aria-labelledby="titulo-equipe">
          <h2 id="titulo-equipe" className="sr-only">
            Equipe
          </h2>

          {teamMembers.map((member, index) => (
            <div key={index} className="caixa-equipe">
              <h3>
                {member.name.split(" ").slice(0, 2).join(" ")} <br /> {member.name.split(" ").slice(2).join(" ")}
              </h3>
              <img src={member.image || "/placeholder.svg"} alt={`Foto de ${member.name}`} />
              <Link
                href={member.linkedin}
                className="botao-info botao-azul cor-cartao"
                aria-label={`LinkedIn de ${member.name}`}
              >
                🔗 Linkedin
              </Link>
              <Link
                href={member.github}
                className="botao-info botao-azul cor-cartao"
                aria-label={`GitHub de ${member.name}`}
              >
                💻 GitHub
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}
