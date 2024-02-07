<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/BrunoCarvalhoFeitosa/mobiauto-fipe">
    <img src="public\images\favicon.ico" alt="Logo" width="80" height="80" />
  </a>

  <p align="center">
    Aplicação feita em Next.js, Typescript, React Hook Form, Zod, Zustand e TailwindCSS para buscar preço de véiculos baseados na tabela Fipe.
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#hospedagem">Hospedagem</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto
O projeto foi feito em Next.js, Typescript, React Hook Form, Zod, Zustand e TailwindCSS para buscar preço de veículos baseados na tabela Fipe. Foram criadas duas telas, sendo a primeira 3 inputs de seleção, onde no primeiro são preenchidas as marcas de carros presentes na API (https://deividfortuna.github.io/fipe/), ao escolher uma opção, o segundo select é preenchido com os modelos da respectiva marca selecionada e ao escolher um modelo, o terceiro select é preenchido com os anos em que aquele modelo teve produção. Se houver interação do usuário com os três selects, o botão para consultar preço é habilitado para interação, do contrário ele permancerá desabilitado até que haja as interações necessárias. Ao clicar sobre o botão de consulta de preço, o usuário é redirecionado para a página de resultados, e lá conterá o preço do véiculo de interesse do usuário.

### Aplicação
https://github.com/BrunoCarvalhoFeitosa/mobiauto-fipe/assets/46093815/48eefa5c-d90e-404e-a86f-0f2f06d32596

### Feito com

* [Next.js](https://nextjs.org)
* [React.js](https://react.dev)
* [Typescript](https://www.typescriptlang.org)
* [React Hook Form](https://react-hook-form.com)
* [Zod](https://zod.dev)
* [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
* [TailwindCSS](https://tailwindcss.com)
* [Vercel](https://vercel.com)

### Hospedagem

O site está em produção neste link: (https://bruno-carvalho-feitosa-mobiauto-fipe.vercel.app).

<!-- GETTING STARTED -->
## Iniciando o projeto

Primeiramente será necessário clonar este projeto em (https://github.com/BrunoCarvalhoFeitosa/mobiauto-fipe.git), após o download será necessário abrir este projeto no seu editor, em seguida criar um arquivo na raiz .env e inserir os valores: NEXT_PUBLIC_FIPE_API_BASE_URL=https://parallelum.com.br/fipe/api/v1/carros/marcas, em seguida no terminal digitar npm install ou yarn e por fim é só rodar em seu terminal o comando npm run dev ou yarn dev.

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/BrunoCarvalhoFeitosa/mobiauto-fipe.git
   ```
2. Instale os pacotes do NPM
   ```sh
   npm install ou yarn
   ```
   
3. Inicie o projeto
   ```sh
   npm run dev ou yarn dev
   ```

<!-- CONTACT -->
## Contato

Bruno Carvalho Feitosa - [GitHub](https://github.com/BrunoCarvalhoFeitosa) - [LinkedIn](https://www.linkedin.com/in/bruno-carvalho-feitosa/)
