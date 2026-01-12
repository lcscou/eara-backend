# Bloco Tabs

## Descrição
O bloco Tabs é um componente reutilizável para exibir múltiplas abas com conteúdo dinâmico via InnerBlocks, imagens e layouts flexíveis. Similar ao Carousel, cada aba é um bloco filho (TabItem) que pode conter múltiplos blocos do WordPress.

## Estrutura

O bloco Tabs contém múltiplos blocos **TabItem** (eara/tab-item), cada um com:
- **title**: Título da aba (exibido no botão)
- **image**: Objeto com imagem
  - `url`: URL da imagem
  - `id`: ID da mídia no WordPress
  - `alt`: Texto alternativo
- **InnerBlocks**: Conteúdo dinâmico (parágrafos, imagens, listas, etc.)

### Bloco Pai (Tabs)
- **layout**: Orientação das abas
  - `vertical` - Abas na esquerda, conteúdo à direita (padrão)
  - `horizontal` - Abas no topo, conteúdo abaixo

## Características

✓ Blocos filhos (TabItems) com InnerBlocks
✓ Cada aba pode conter múltiplos blocos do WordPress
✓ Suporta: Parágrafos, Headings, Imagens, Listas, Botões, Colunas, Grupos
✓ Upload de imagem por aba via media library
✓ Editor visual com preview em tempo real
✓ Dois layouts (vertical e horizontal)
✓ Adicionar/remover abas dinamicamente
✓ Transições suaves entre abas
✓ Totalmente responsivo
✓ JavaScript vanilla para funcionalidade frontend
✓ Suporte a RTL (right-to-left)

## Classes CSS

### Container
- `.eara-tabs` - Container principal
- `.eara-tabs--vertical` - Layout com abas na esquerda
- `.eara-tabs--horizontal` - Layout com abas no topo

### Navegação
- `.eara-tabs__nav` - Container de botões de aba
- `.eara-tabs__button` - Botão de aba
- `.eara-tabs__button--active` - Estado ativo do botão

### Conteúdo
- `.eara-tabs__panels` - Container de painéis
- `.eara-tabs__panel` - Painel de aba
- `.eara-tabs__panel--active` - Estado ativo do painel
- `.eara-tabs__image` - Container de imagem
- `.eara-tabs__text` - Container de texto
- `.eara-tabs__title` - Título da aba
- `.eara-tabs__description` - Descrição/conteúdo

### TabItem
- `.eara-tab-item` - Container do item de aba
- `.eara-tab-item__image` - Container de imagem
- `.eara-tab-item__content` - Conteúdo dinâmico

## Exemplo de Uso

1. No editor de blocos, procure por "Tabs"
2. Clique para inserir o bloco
3. Serão criadas 2 TabItems por padrão
4. No painel de controles:
   - Escolha o layout (vertical ou horizontal)
5. Clique em cada TabItem para:
   - Editar o título
   - Adicionar imagem
   - Adicionar blocos (parágrafos, imagens, etc.)
6. Adicione ou remova TabItems conforme necessário

## Exemplo de HTML Gerado

```html
<div class="eara-tabs eara-tabs--vertical">
  <div class="eara-tabs__nav">
    <button class="eara-tabs__button eara-tabs__button--active" data-tab-index="0">
      Tab 1
    </button>
    <button class="eara-tabs__button" data-tab-index="1">
      Tab 2
    </button>
  </div>

  <div class="eara-tabs__panels">
    <div class="eara-tabs__panel eara-tabs__panel--active" data-tab-index="0">
      <div class="eara-tabs__image">
        <img src="..." alt="..." />
      </div>
      <div class="eara-tabs__text">
        <h3 class="eara-tabs__title">Tab 1</h3>
        <div class="eara-tabs__description">
          <!-- InnerBlocks renderizados aqui -->
          <p>Conteúdo da aba...</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Cores
- **Botões Padrão**: #5B5FD9 (Roxo claro)
- **Botão Ativo**: #3A3A6B (Roxo escuro)

## Responsividade

O bloco é totalmente responsivo:
- Em telas pequenas (< 768px):
  - Layout vertical muda para empilhado
  - Abas ficam horizontais e ocupam a largura
  - Tamanho da fonte reduzido
  - Padding ajustado

## Personalizações CSS

Exemplo de customização:

```css
/* Mudar cor dos botões */
.eara-tabs__button {
  background-color: #your-color;
}

.eara-tabs__button--active {
  background-color: #your-active-color;
}

/* Adicionar borda às imagens */
.eara-tabs__image img {
  border: 2px solid #your-color;
}

/* Aumentar espaçamento */
.eara-tabs {
  gap: 48px;
}
```

## Interatividade Frontend

O bloco inclui JavaScript vanilla que:
- Alterna entre abas ao clicar
- Mostra/oculta painéis correspondentes
- Mantém estado visual do botão ativo
- Fornece feedback visual com transições suaves
