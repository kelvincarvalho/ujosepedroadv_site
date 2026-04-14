# José Queiroz — Advocacia & Consultoria Jurídica

Site profissional do Dr. José Pedro Queiroz — OAB/PR 116.683.

---

## Estrutura do projeto

```
josequeiroz-site/
├── index.html          ← Esqueleto HTML (estrutura, sem dados)
├── css/
│   └── style.css       ← Todos os estilos
├── js/
│   ├── data.js         ← Conteúdo editável (depoimentos, blog, contato...)
│   ├── render.js       ← Injeta data.js no DOM (não editar)
│   └── main.js         ← Interações UI (sidebar, scroll, formulário)
├── assets/
│   └── jose-queiroz.jpg
└── robots.txt
```

---

## Como editar conteúdo

Todo o conteúdo do site está centralizado em **`js/data.js`**. Não é necessário tocar em HTML.

### Adicionar depoimento

Em `js/data.js`, localize o array `testimonials` e adicione um objeto:

```js
{
  text:     'Texto do depoimento...',
  author:   'Nome Sobrenome',
  role:     'Empresa ou Cargo · Cidade',
  initials: 'NS',   // 2 letras exibidas no avatar
  stars:    5,
},
```

### Adicionar artigo no blog

Em `js/data.js`, localize o array `blog` e adicione um objeto:

```js
{
  tag:    'Categoria do artigo',
  title:  'Título do artigo',
  author: 'José Pedro Queiroz',
  excerpt: 'Resumo exibido na listagem (1–2 frases).',
  paragraphs: [
    'Primeiro parágrafo. Pode usar <strong>negrito</strong>.',
    'Segundo parágrafo.',
  ],
  conclusion: 'Texto da conclusão.',
},
```

### Alterar informações de contato

Em `js/data.js`, edite o objeto `owner`. Todos os links da página (sidebar, hero, agenda, contato, footer) são atualizados automaticamente.

| Campo | Descrição |
|---|---|
| `phone` | Número sem formatação, usado nos links `wa.me` |
| `phoneFormatted` | Número formatado, exibido na tela |
| `email` | E-mail de contato |
| `instagram.url` / `instagram.handle` | URL e arroba exibido no sidebar |
| `linkedin.url` / `linkedin.handle` | URL e handle exibido no sidebar |
| `calendly` | Caminho após `calendly.com/` |

### Atualizar a foto

Substitua o arquivo `assets/jose-queiroz.jpg` mantendo o mesmo nome.

---

## Tecnologias

- HTML5 semântico
- CSS3 puro (sem frameworks) — variáveis em `css/style.css`
- JavaScript vanilla (sem dependências)
- Google Fonts — Cormorant Garamond + Inter
- Calendly widget (externo, opcional)

## Licença

Todos os direitos reservados © 2025 José Pedro Queiroz — OAB/PR 116.683
