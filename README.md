<h4 align="center"> 
	:heavy_check_mark: OpenSystem Sugestões
</h4>

<p align="center">
  <a href="#interrobang">OpenSystem Sugestões</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#confetti_ball-interface">Interface</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias usadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#interrobang-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


## :interrobang: O que é o OpenSystem Sugestões?

O OpenSystem Sugestões é o desafio técnico da OpenSystem.
<br>
É uma aplicação desenvolvida para alocar sugestões empresariais feitas pelos colaboradores da OpenSystem.

## Requisitos técnicos :heavy_check_mark:
- [ ] REQ1: Menu lateral com cadastro e listagem de: Departamentos e Sugestões
- [x] REQ2: Página de cadastro de sugestões
- [x] REQ3: Deverá ser apresentada uma página para listagem das sugestões cadastradas, com possibilidade de filtrar por departamento.
- [x] REQ4: Deverá existir uma página para cadastro de departamentos
- [x] REQ5: Deverá existir uma página para listagem dos departamentos cadastrados, com opção de remover ou editar o nome.
- [ ] REQ6(Opcional): Gráficos dashboard

## 🎊: Interface:

A interface foi desenvolvida através da plataforma [Figma][figma]:

<div align="center">
  <img src="" alt="Interface Figma" height="450px">
</div>

## :rocket: Tecnologias:

Este projeto foi desenvolvido com as seguintes tecnologias:

### Frontend:
- [Angular 12][angular]
- [SCSS][scss]
- [Bootstrap 5][bootstrap]

### Backend:
- [.NET 6][net6]
- [Entity Framework][ef]
- [SQLServer][sqlserver]

### Complementos
- [Swagger][swagger]
- [Biblioteca Chart.js][chartjs]
- [Compodoc][compodoc]
- [Sweet Alert 2][swal2]

## :fork_and_knife: Gif - Dashboard do Open Sugestões: 
<div align="center">
  <img src="" alt="Public-Foodfy" height="450px">
</div>

## :fork_and_knife: Gif - Sessão de Cadastro de Departamentos do Open Sugestões: 
<div align="center">
  <img src="" alt="Private-Foodfy" height="450px">
</div>


## :construction_worker: Como usar:

Para clonar e executar essa aplicação você vai precisar dos seguintes softwares instalados em seu computador: 
- [Git][git]
- [Node][nodejs]
- [SQLServer][sqlmangmnt]

### :electric_plug: Instalar dependências

```bash
# Clone este repositório:
$ git clone https://github.com/mirndlazaro/open-sugestoes.git

# Entre no repositório:
$ cd frontend

# Abra o Console Gerenciador de Pacotes no Visual Studio 2022 e instale as dependências:
$ Package-Reinstall
```

### Após instalar as dependências, deve-se configurar o banco de dados

Será necessário criar uma instância do SQL Express na máquina. Segue o [guia de instalação][sqlexpress]
Instale o [SQL Server Managment Studio][sqlmangmnt] para gerenciamento e visualização do BD numa interface gráfica. <br>

### Executar a web API

```bash
# Entre no repositório:
$ cd backend/API

# Inicie a API:
$ Clique no botão 'Iniciar depuração' ou clique F5

# A aplicação estará rodando na porta 7188 (http://localhost:7188/)
# Por padrão, a API iniciará a interface Swagger (https://localhost:7188/swagger/index.html), mas é possível acessar os endpoints da aplicação através de (https://localhost:7188/api)
```

### Executar a aplicação

```bash
# Entre no repositório:
$ cd frontend

# Inicie a aplicação:
$ ng serve

# A aplicação estará rodando na porta 4200 (http://localhost:4200/)
```

## :confetti_ball: Como melhorar:

-  Adicionar autenticação;
-  Cadastro de colaboradores com diferentes perfis e níveis de permissão;
	-  Colaboradores com perfil padrão apenas cadastrariam as sugestões. Os administradores teriam acesso ao dashboard, por exemplo;

São tarefas que gostaria de implementar em um futuro próximo a fim de desenvolver-me.

## :key: Licença:

Feito com :zap: por **Lazaro Miranda** :fire: [Entre em contato!][linkedin]

[html]: https://developer.mozilla.org/pt-BR/docs/Web/HTML
[css]: https://developer.mozilla.org/pt-BR/docs/Web/CSS
[figma]: https://www.figma.com/file/BOZLsBc45Rla1iW726NLlI/Open-Sugest%C3%B5es?node-id=0%3A1
[angular]: https://v12.angular.io/start
[scss]: https://sass-lang.com/
[ef]: https://docs.microsoft.com/pt-br/ef/
[net6]: https://dotnet.microsoft.com/en-us/download/dotnet/6.0
[swagger]: https://swagger.io/
[chartjs]: https://www.chartjs.org/
[compodoc]: https://compodoc.app/
[bootstrap]: https://getbootstrap.com/docs/5.0/getting-started/introduction/
[sqlexpress]: https://docs.microsoft.com/pt-br/sql/database-engine/install-windows/install-sql-server?view=sql-server-ver15
[sqlmangmnt]: https://docs.microsoft.com/pt-br/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15
[nodejs]: https://nodejs.org/en/
[swal2]: https://sweetalert2.github.io/
[git]: https://git-scm.com
[license]: https://github.com/i-ramoss/Foodfy/blob/master/LICENSE
[linkedin]: https://www.linkedin.com/in/mirandaalazaro/
