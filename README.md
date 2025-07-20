# 📊 Crypto Glass Hub - Visão Transparente do Mercado!
<p align="center">
  <!-- Contador de linguagens do GitHub -->
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/devAndreotti/crypto-glass-hub?color=FFF&labelColor=3b2f4b&style=flat-square">
  <!-- Tamanho do repositório no GitHub -->
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/devAndreotti/crypto-glass-hub?color=FFF&labelColor=3b2f4b&style=flat-square">
  <!-- Licença do GitHub -->
  <img alt="GitHub License" src="https://img.shields.io/github/license/devAndreotti/crypto-glass-hub?color=FFF&labelColor=3b2f4b&style=flat-square">
</p>

<div align="center">
  <img src="./project-01.png" alt="Captura de tela do Crypto Glass Hub">
</div>

## 📋 Sobre o Projeto
O Crypto Glass Hub é uma plataforma web moderna e interativa projetada para fornecer uma visão transparente e detalhada do mercado de criptoativos. Utilizando tecnologias de ponta como React, TypeScript e Shadcn UI, o projeto oferece uma experiência de usuário fluida e responsiva, permitindo aos usuários acompanhar tendências, analisar dados e obter insights valiosos sobre diversas criptomoedas.

## ⚙️ Funcionalidades Principais
- **Visão Geral do Mercado**: Dashboard interativo para acompanhar as principais criptomoedas.
- **Análise Detalhada**: Seções dedicadas para explorar dados específicos de cada ativo.
- **Filtros e Pesquisa**: Ferramentas para refinar a busca e encontrar informações rapidamente.
- **Interface Responsiva**: Adaptação para diferentes tamanhos de tela e dispositivos.
- **Modo Escuro/Claro**: Opção de tema para melhor experiência visual.

## 📂 Estrutura do Projeto
```
crypto-glass-hub/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── components/
    │   ├── CryptoCard.tsx
    │   ├── CryptoFilters.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── MarketSection.tsx
    │   ├── Navbar.tsx
    │   └── ui/ (Componentes Shadcn UI)
    ├── hooks/
    │   ├── use-mobile.tsx
    │   ├── useCryptoData.tsx
    │   ├── useCryptoFilters.tsx
    │   └── useTheme.tsx
    ├── lib/
    │   └── utils.ts
    └── pages/
        ├── Index.tsx
        └── NotFound.tsx
```

## 🛠 Tecnologias Utilizadas
O projeto Crypto Glass Hub é construído com as seguintes tecnologias:
- **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida para projetos web modernos.
- **[Shadcn UI](https://ui.shadcn.com/)**: Coleção de componentes de UI reutilizáveis e acessíveis.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
- **[React Router DOM](https://reactrouter.com/)**: Para roteamento declarativo na aplicação.
- **[TanStack Query (React Query)](https://tanstack.com/query/latest/docs/react/overview)**: Para gerenciamento de estado assíncrono e cache de dados.
- **[Spline](https://spline.design/)**: Para integração de elementos 3D interativos.
- **[Lucide React](https://lucide.dev/guide/packages/lucide-react)**: Biblioteca de ícones.
- **Zod**: Para validação de esquemas.
- **React Hook Form**: Para gerenciamento de formulários.

## 🚀 Como Rodar Localmente
Para configurar e rodar o projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/devAndreotti/crypto-glass-hub.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd crypto-glass-hub
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    # ou bun install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou yarn dev
    # ou bun dev
    ```

## 🚀 Futuras Melhorias
- [ ] **Integração com APIs de Dados em Tempo Real**: Conectar a plataforma a APIs de mercado de criptoativos para dados em tempo real.
- [ ] **Funcionalidades de Autenticação**: Implementar sistema de login e gerenciamento de usuários.
- [ ] **Alertas Personalizados**: Permitir que usuários configurem alertas para mudanças de preço ou volume.
- [ ] **Visualizações de Dados Avançadas**: Adicionar gráficos e ferramentas de análise mais complexas.
- [ ] **Otimização de Performance**: Continuar otimizando o carregamento e a fluidez da aplicação.
- [ ] **Testes Abrangentes**: Implementar testes unitários e de integração para garantir a robustez do código.

## 💪 Como Contribuir
Contribuições são sempre bem-vindas! Se você deseja colaborar com o projeto, siga estas etapas:
1. Faça um fork do projeto.
2. Crie uma nova branch para sua feature: `git checkout -b feature/sua-feature`.
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`.
4. Envie para a branch: `git push origin feature/sua-feature`.
5. Abra um Pull Request detalhando suas alterações.

## 📝 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

<br>

---

<p align="center">
  Desenvolvido com ☕ por <a href="https://github.com/devAndreotti">Ricardo Andreotti Gonçalves</a> 🧑‍💻
</p>
