# 🚀 SPRINT 03 – Hospital das Clínicas

Este projeto foi desenvolvido como parte da Sprint 03, focada na reestruturação de páginas estáticas em uma aplicação SPA (Single Page Application) moderna, utilizando React, Vite e TypeScript.

## 🎯 Objetivo do Projeto

Nosso objetivo nesta Sprint 03 é reestruturar as páginas desenvolvidas na Sprint 02 em uma aplicação SPA (Single Page Application) utilizando React + Vite + TypeScript.

Essa etapa visa:
- [x] Garantir componentização e modularidade das páginas;
- [x] Proporcionar uma experiência responsiva e acessível em todos os dispositivos;
- [x] Melhorar a escalabilidade e a manutenibilidade do sistema;
- [x] Implementar boas práticas de versionamento no GitHub para colaboração eficaz.

## 💡 Nossa Proposta

Transformar o código HTML estático da Sprint 02 em uma aplicação moderna com:

- **Arquitetura modular em React** – componentes reutilizáveis, rotas dinâmicas e navegação fluida entre telas;
- **TypeScript** – segurança e tipagem estática, reduzindo erros e fortalecendo a manutenção do projeto;
- **Hook Forms para validação** – formulários interativos com tratamento de dados e validação de entradas.

## 🔧 Funcionalidades e Recursos

- **Componentização e Reutilização**: cada página foi transformada em componentes React independentes e reutilizáveis.
- **Rotas SPA**: navegação entre páginas sem recarregar a aplicação.
- **Hooks do React**: uso de `useState`, `useEffect`, `useNavigate`, `useParams` e `Props`.
- **Validação de Formulários**: implementação com `react-hook-form`.
- **Design Responsivo e Acessível**: interface adaptada para diferentes tamanhos de tela e necessidades dos usuários.
- **Versionamento no GitHub**: commits frequentes de todos os integrantes, seguindo boas práticas de colaboração.

## 🌟 Diferenciais da Solução

- **🎮 Gamificação**: pontos por participação e interação com a plataforma.
- **🆘 Assistente virtual integrado**: interação simplificada e linguagem acessível.
- **📱 Mobile first e acessibilidade**: otimizado para dispositivos móveis, com contraste adequado e suporte a leitores de tela.
- **🔔 Notificações e lembretes automáticos**: sistema de lembretes para consultas.
- **🧑‍⚕️ Feedback integrado**: sistema de avaliação após a consulta para melhorias contínuas.

## 🔄 Processo de Desenvolvimento

- Metodologia iterativa e incremental, baseada em sprints.
- Componentização das páginas da Sprint 02 em React + Vite + TS.
- Estilização apenas com TailwindCSS.
- Versionamento no GitHub para registro detalhado das alterações e trabalho em equipe.

## 🛠️ Tecnologias Utilizadas

- **React + Vite + TypeScript**: base da aplicação SPA.
- **Hook Forms**: manipulação e validação de formulários.
- **Visual Studio Code**: editor de código utilizado.
- **GitHub/GitFlow**: versionamento e colaboração em equipe.

## 📂 Estrutura de Pastas

SITEHC-SPRINT03/
│
└── FRONT-SPRINT03/
    │
    ├── .next/                       # Arquivos gerados automaticamente pelo Next.js
    │   ├── cache/
    │   ├── server/
    │   ├── static/
    │   └── types/
    │
    ├── app/                         # Páginas principais do sistema
    │   ├── agenda/                  # Página de agenda
    │   ├── assistente/              # Página de assistente virtual
    │   ├── avaliacao/               # Página de avaliação
    │   ├── faq/                     # Página de FAQ
    │   ├── login/                   # Página de login
    │   ├── sobre/                   # Página sobre
    │   ├── globals.css              # Estilos globais do app
    │   ├── layout.tsx               # Layout principal da aplicação
    │   └── page.tsx                 # Página inicial
    │
    ├── components/                  # Componentes reutilizáveis
    │   └── ui/
    │       ├── back-button.tsx      # Botão de voltar
    │       ├── footer.tsx           # Rodapé
    │       ├── header.tsx           # Cabeçalho
    │       ├── popup.tsx            # Componente de popup
    │       ├── search-popup.tsx     # Componente de popup de busca
    │       └── theme-provider.tsx   # Provedor de tema
    │
    ├── hooks/                       # Custom Hooks
    │   ├── use-mobile.ts            # Hook para detecção mobile
    │   └── use-toast.ts             # Hook para notificações/toast
    │
    ├── lib/                         # Funções utilitárias
    │   └── utils.ts
    │
    ├── public/                      # Arquivos estáticos (imagens)
    │   ├── placeholder-logo.png
    │   ├── placeholder-logo.svg
    │   ├── placeholder-user.jpg
    │   ├── placeholder.jpg
    │   └── placeholder.svg
    │
    ├── src/                         # Arquivos principais da aplicação
    │   ├── App.css                  # Estilos do App
    │   ├── App.tsx                  # Componente raiz da aplicação
    │   ├── index.css                 # Estilos globais
    │   └── main.tsx                  # Arquivo de entrada
    │
    ├── styles/                      # Estilos adicionais
    │   └── globals.css
    │
    ├── .gitignore                   # Ignora arquivos no Git
    ├── components.json              # Configuração dos componentes
    ├── next-env.d.ts                # Tipos do Next.js
    ├── next.config.mjs              # Configuração do Next.js
    ├── package-lock.json            # Lock das dependências (npm)
    ├── package.json                 # Dependências e scripts
    ├── pnpm-lock.yaml               # Lock das dependências (pnpm)
    ├── postcss.config.mjs           # Configuração do PostCSS
    └── tsconfig.json                # Configuração do TypeScript

---

## 👥 Integrantes

- **Samara Porto Souza**  
  📌 RM: 559072 – 1TDSA  
  🔗 [LinkedIn](https://www.linkedin.com/in/samara-porto-732723325) | 💻 [GitHub](https://github.com/ssamaraps)

- **Eduarda Weiss Ventura**  
  📌 RM: 564434 – 1TDSPX  
  🔗 [LinkedIn](https://www.linkedin.com/in/eduarda-weiss-ventura-55bb37268) | 💻 [GitHub](https://github.com/eduardawv)

- **Maria Gabriela Landim Severo**  
  📌 RM: 565146 – 1TDSA  
  🔗 [LinkedIn](https://www.linkedin.com/in/maria-gabriela-landim-595654322/) | 💻 [GitHub](https://github.com/gabrielalandim)

---

## 📎 __Repositório do Projeto no GitHub__
[🔗 Link do Repositório](https://github.com/ssamaraps/SiteHC-SPRINT03.git)

## 📎 __Vídeo no YouTube__
[🔗 Link do Vídeo no YouTube](https://youtu.be/_MRllmh8xAA)
