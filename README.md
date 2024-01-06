# Rede Social

Esse projeto simula uma rede social, desenvolvido em Next

## Frontend

### Tecnologias Utilizadas
- [Next.js](https://nextjs.org/) - Framework React para renderização do lado do servidor.
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript para tipagem estática.
- [axios] - Requisições para a API

### Como Executar Localmente
1. **Pré-requisitos:**
    - Node.js e npm instalados.
    - Visual Studio Code

2. **Instalação das Dependências:**
    ```bash
    npm install
    ```

3. **Execução Local:**
    ```bash
    npm run dev
    ```
    O frontend estará acessível em (http://localhost:3000).

## Backend

### Repositório: https://github.com/fernandoborel/RedeSocial.Api

### Tecnologias Utilizadas
- [.NET 8](https://dotnet.microsoft.com/) - Plataforma de desenvolvimento multiplataforma para construção de aplicativos.

### Padrões de Projeto
- [DDD (Domain-Driven Design)](https://dddcommunity.org/) - Abordagem para desenvolvimento de software baseado no domínio.
- [SOLID](https://en.wikipedia.org/wiki/SOLID) - Princípios de design de software.
- [Testes unitários] - Testes em todos os endpoints.

### Autenticação JWT
- A autenticação de usuário é realizada por meio de tokens JWT (JSON Web Tokens).

### Como Executar Localmente
1. **Pré-requisitos:**
    - [.NET 8 SDK](https://dotnet.microsoft.com/download) instalado.
    - [Outros pré-requisitos, se houver]

2. **Compilação e Execução:**
    ```bash
    dotnet build
    dotnet run
    ```
    O backend estará acessível em [http://localhost:5000](http://localhost:5000).

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs, ou novas funcionalidades. Para contribuir, siga os passos:
1. Faça um fork do projeto.
2. Crie um branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça push para o branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
