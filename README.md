# Sistema de Cadastro de Colaboradores - Flugo

Este repositório contém o código-fonte de uma aplicação web completa para o gerenciamento de colaboradores. A principal funcionalidade é um formulário de cadastro em múltiplas etapas que permite a criação de novos registros de funcionários, com dados persistidos em tempo real no Firebase.

**[Clique aqui para ver a demonstração ao vivo](https://painel-colaboradores-git-main-victor-tech-lgpds-projects.vercel.app/colaboradores)**

## ✨ Funcionalidades

-   Cadastro de colaboradores em múltiplas etapas com barra de progresso.
-   Listagem de todos os colaboradores cadastrados, com atualização em tempo real.
-   Validação de formulário robusta (frontend e backend) com feedback para o usuário.
-   Persistência de dados segura no Firebase Firestore.
-   Autenticação anônima para proteger o acesso ao banco de dados.
-   Interface moderna e responsiva construída com Material UI.

## 🚀 Tecnologias Utilizadas

#### **Frontend**
-   **React 18** com **TypeScript**
-   **Vite** como ferramenta de build
-   **Material UI (MUI)** para componentes de UI
-   **React Hook Form** para gerenciamento de formulários
-   **Zod** para validação de schemas
-   **React Router DOM** for para roteamento

#### **Backend & Banco de Dados**
-   **Firebase**
    -   **Firestore** como banco de dados NoSQL
    -   **Firebase Authentication** para autenticação anônima
    -   **Regras de Segurança** para proteção e validação de dados no servidor

#### **Testes & Deploy**
-   **Vitest** & **React Testing Library** para testes de integração
-   **Vercel** para implantação e CI/CD

## ⚙️ Instalação e Configuração

Para rodar este projeto localmente, siga os passos abaixo.

### Pré-requisitos
-   [Node.js](https://nodejs.org/) (versão 18 ou superior)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
-   Uma conta no [Firebase](https://firebase.google.com/)

### Passos

1.  **Clone o repositório:**
     ```bash
   git clone https://github.com/victor-tech-lgpd/Painel-colaboradores.git
    cd Painel-colaboradores
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    - Crie um projeto no console do Firebase, adicione um **Aplicativo da Web** e ative o **Firestore** e a **Autenticação Anônima**.
    - Crie um arquivo chamado `.env.local` na raiz do projeto.
    - Copie suas credenciais da Web do Firebase para o arquivo `.env.local` com o prefixo `VITE_`:

    ```
    VITE_FIREBASE_API_KEY=sua_api_key
    VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
    VITE_FIREBASE_PROJECT_ID=seu_project_id
    VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=seu_Messaginger_id
    VITE_FIREBASE_APP_ID=seu_app_id
    ```

## 📜 Scripts Disponíveis

-   **Para iniciar o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

-   **Para construir a aplicação para produção:**
    ```bash
    npm run build
    ```
    Os arquivos otimizados serão gerados no diretório `dist/`.

-   **Para executar os testes:**
    ```bash
    npm run test
    ```

---
Autor: [Victor Balleiro viana]
