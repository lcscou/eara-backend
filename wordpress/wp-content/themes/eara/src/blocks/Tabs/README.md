# Bloco Tabs

## Descrição
O bloco Tabs é um componente reutilizável para exibir múltiplas abas com conteúdo, imagens e layouts flexíveis.

## Atributos

### Estrutura de Abas
- **tabs**: Array de abas, cada uma com:
  - `id`: Identificador único da aba
  - `title`: Título da aba (exibido no botão)
  - `content`: Conteúdo da aba (RichText)
  - `image`: Objeto com imagem
    - `url`: URL da imagem
    - `id`: ID da mídia no WordPress
    - `alt`: Texto alternativo

### Configurações
- **activeTab**: ID da aba ativa atualmente (padrão: "tab-1")
- **layout**: Orientação das abas
  - `vertical` - Abas na esquerda, conteúdo à direita (padrão)
  - `horizontal` - Abas no topo, conteúdo abaixo

## Características

✓ 4 abas padrão (customizáveis)
✓ Adicionar/remover abas dinamicamente
✓ Upload de imagem por aba
✓ Editor visual com preview em tempo real
✓ Dois layouts (vertical e horizontal)
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

## Exemplo de Uso

1. No editor de blocos, procure por "Tabs"
2. Clique para inserir o bloco
3. No painel de controles:
   - Escolha o layout (vertical ou horizontal)
   - Adicione ou remova abas conforme necessário
   - Clique em uma aba para editar seu conteúdo
4. Edite:
   - Título da aba
   - Conteúdo (RichText)
   - Imagem (via media library)

## Exemplo de HTML Gerado

```html
<div class="eara-tabs eara-tabs--vertical">
  <div class="eara-tabs__nav">
    <button class="eara-tabs__button eara-tabs__button--active" data-tab-id="tab-1">
      TAB TITLE 1
    </button>
    <button class="eara-tabs__button" data-tab-id="tab-2">
      TAB TITLE 2
    </button>
  </div>

  <div class="eara-tabs__panels">
    <div class="eara-tabs__panel eara-tabs__panel--active" data-tab-id="tab-1">
      <div class="eara-tabs__image">
        <img src="..." alt="..." />
      </div>
      <div class="eara-tabs__text">
        <h3 class="eara-tabs__title">TAB TITLE 1</h3>
        <div class="eara-tabs__description">
          <p>Content...</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Cores
- **Botões Padrão**: #5B5FD9 (Roxo claro)
- **Botões Ativos**: #3A3A6B (Roxo escuro)
- **Títulos**: #3A3A6B (Roxo escuro)
- **Texto**: #333333 (Cinza escuro)

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
