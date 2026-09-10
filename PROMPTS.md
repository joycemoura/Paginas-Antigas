# O processo, prompt a prompt

Este arquivo registra os principais prompts utilizados durante o desenvolvimento do site **Páginas Antigas**. O objetivo é apresentar como o projeto foi planejado, desenvolvido e revisado com o auxílio de Inteligência Artificial.

Os prompts foram utilizados de forma gradual, partindo dos requisitos definidos para o projeto e, posteriormente, trabalhando na estrutura, no visual, nas funcionalidades e na revisão final.

---

## Passo 0. Definição dos requisitos

Antes de solicitar a criação do código, foram definidos os requisitos funcionais e não funcionais do site.

O `REQUISITOS.md` foi utilizado como base para orientar os pedidos feitos à IA.

Entre os principais requisitos funcionais definidos estavam:

* **RF01:** permitir a navegação entre as seções da página;
* **RF02:** apresentar um catálogo de livros;
* **RF03:** permitir filtrar os livros por categoria;
* **RF04:** permitir solicitar um livro;
* **RF05:** possuir formulário de solicitação;
* **RF06:** realizar validação dos dados do formulário;
* **RF07:** permitir o envio da solicitação pelo WhatsApp;
* **RF08:** possuir menu adaptado para dispositivos menores;
* **RF09:** possuir botão para voltar ao topo;
* **RF10:** apresentar efeitos visuais durante a navegação.

---

## Passo 1. Planejamento

O primeiro pedido foi para criar um planejamento do site antes da implementação do código.

### Prompt utilizado

> Quero desenvolver um site de uma livraria online chamada "Páginas Antigas". O site será uma página única utilizando HTML, CSS e JavaScript.
>
> Utilize os requisitos funcionais e não funcionais que defini no `REQUISITOS.md` como base.
>
> Antes de escrever qualquer código, faça um plano mostrando as principais seções da página, o que cada seção terá e como os requisitos funcionais serão atendidos.

### Resultado

Foi definido que o site teria: cabeçalho, menu, seção inicial, catálogos de livros, filtros por categoria, seção de como funciona, depoimentos das pessoas que compraram no site fictício, formulário de contato para contatar o usuário e rodapé. 

---

## Passo 2. Estrutura HTML

Depois do planejamento, foi solicitada a criação da estrutura da página.

### Prompt utilizado

> Agora crie somente o `index.html` com base no plano aprovado.
>
> O site deve ser uma página única e atender aos requisitos definidos. Inclua o cabeçalho, navegação, seção inicial, catálogo de livros, categorias, seção "como funciona", depoimentos, formulário de solicitação e rodapé.
>
> Utilize HTML semântico e deixe o CSS e o JavaScript em arquivos separados.

### Resultado

Foi criada a estrutura principal do site no arquivo `index.html`.

Nessa etapa foram estruturados os elementos necessários para atender aos requisitos **RF01, RF02, RF04 e RF05**.

---

## Passo 3. Desenvolvimento do visual

Com a estrutura pronta, foi solicitado o desenvolvimento do CSS.

### Prompt utilizado

> Agora crie o `estilo.css` para o site Páginas Antigas. Quero uma identidade visual relacionada a uma livraria, utilizando principalmente azul, creme e laranja.
>
> Crie um layout organizado para o catálogo de livros, botões, formulário, cabeçalho e demais seções. O site também deve ser responsivo para telas menores.

### Resultado

Foi desenvolvido o visual do site, incluindo: paleta de cores solicitada, tipografia, cabeçalho, seção inicial, cards dos livros, botões, formulário, rodapé e responsividade. 

---

## Passo 4. Desenvolvimento do JavaScript

Após a estrutura e o visual, foram implementadas as funcionalidades do site.

### Prompt utilizado

> Agora crie o `script.js` para implementar as funcionalidades do site Páginas Antigas.
>
> Com base nos requisitos funcionais:
>
> * RF03: crie um filtro para mostrar os livros por categoria;
> * RF04: faça os botões "Solicitar" funcionarem;
> * RF05 e RF06: implemente o formulário e sua validação;
> * RF07: permita gerar uma solicitação para envio pelo WhatsApp;
> * RF09: crie um botão para voltar ao topo.
>
> Mantenha o restante do HTML e CSS sem alterações.

### Resultado

Foram implementadas as principais funcionalidades utilizando JavaScript: filtro por categoria, botões de solicitação, seleção do livro no formulário, validação do formulário, geração da mensagem para Whatsapp e botão de retorno ao topo. 

---

## Passo 5. Biblioteca de efeitos visuais

Para atender ao requisito de utilização de uma biblioteca de efeitos visuais, foi adicionada a biblioteca **AOS 2.3.1**.

### Prompt utilizado

> Adicione ao projeto a biblioteca AOS na versão 2.3.1 para criar animações nos elementos conforme eles aparecem durante a rolagem da página.
>
> Mantenha as funcionalidades existentes e utilize os efeitos de forma discreta.

### Resultado

A biblioteca AOS foi adicionada ao projeto e utilizada nos elementos das diferentes seções da página.

Essa implementação atende ao requisito **RF10** e ao requisito não funcional relacionado à utilização de uma biblioteca de efeitos visuais.

---

## Passo 6. Ajustes e correções

Depois da implementação das funcionalidades, foram realizados ajustes no projeto conforme a necessidade.

### Prompt utilizado

> Revise o projeto Páginas Antigas e verifique se os requisitos funcionais definidos no `REQUISITOS.md` estão sendo atendidos.
>
> Confira principalmente o filtro de categorias, os botões "Solicitar", o preenchimento do formulário, a validação, o envio da solicitação e a responsividade.
>
> Faça somente os ajustes necessários e não altere a identidade visual do projeto.

### Resultado

Foram conferidas as funcionalidades implementadas e realizados ajustes para melhorar o funcionamento do filtro, dos botões, do formulário e da adaptação para telas menores.

---

## Passo 7. Revisão do projeto

O projeto foi submetido a uma revisão para verificar seu atendimento aos requisitos.

### Prompt utilizado

> Faça uma revisão do projeto Páginas Antigas como se você fosse o professor da disciplina.
>
> Analise o `index.html`, `estilo.css`, `script.js`, `REQUISITOS.md`, `INSUMOS.md` e `DOCUMENTACAO.md`.
>
> Verifique se os requisitos funcionais e não funcionais estão sendo atendidos e aponte possíveis problemas ou pontos que precisam ser melhorados antes da entrega.

### Resultado

A revisão foi utilizada para verificar o funcionamento geral do projeto e identificar pontos que poderiam ser melhorados antes da entrega.

---

## Passo 8. Conferência final

Por fim, foi feita uma conferência dos principais requisitos do projeto.

Foram considerados os seguintes pontos:

1. O `index.html` abre diretamente no navegador;
2. A navegação entre as seções funciona;
3. O catálogo apresenta os livros;
4. Os filtros por categoria funcionam;
5. Os botões de solicitação funcionam;
6. O formulário possui validação;
7. A solicitação pode ser encaminhada pelo WhatsApp;
8. A biblioteca AOS apresenta os efeitos de animação;
9. O layout se adapta a telas menores;
10. O botão de retorno ao topo funciona;
11. Os arquivos do projeto estão separados em HTML, CSS e JavaScript.

---

## Revisão final

O projeto foi revisado com auxílio de IA e conferido quanto ao funcionamento das principais funcionalidades e ao atendimento dos requisitos definidos antes do desenvolvimento.
