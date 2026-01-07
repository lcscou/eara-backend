# Bloco Quote

## Descrição
O bloco Quote é um componente reutilizável para exibir citações com diversas opções de personalização, incluindo variantes de cor de fundo, avatar do autor e estilos diferentes.

## Atributos

### Conteúdo
- **content**: Texto principal da citação (padrão: "Animals can suffer from many of the same conditions as humans, such as cancer, heart disease, epilepsy and infectious diseases.")
- **author**: Nome do autor da citação (padrão: "Quote Author")

### Estilos
- **backgroundColor**: Cor de fundo da citação
  - `white` - Branco (padrão)
  - `light-blue` - Azul claro
  - `light-green` - Verde claro
  - `light-gray` - Cinza claro

- **variant**: Estilo da citação
  - `standard` - Estilo padrão (padrão)
  - `highlighted` - Com sombra para destaque

### Avatar
- **showAvatar**: Booleano para exibir/ocultar avatar do autor (padrão: false)
- **avatarImage**: Imagem do avatar
  - `url`: URL da imagem
  - `id`: ID da mídia no WordPress
  - `alt`: Texto alternativo da imagem

## Características

✓ Editor visual com preview em tempo real
✓ Seletor de cor de fundo com 4 variantes
✓ Toggle para mostrar/ocultar avatar
✓ Upload de imagem para avatar via media library
✓ Texto editável (citação e autor)
✓ Estilos responsivos
✓ Suporte a RTL (right-to-left)

## Classes CSS

### Container
- `.eara-quote` - Container principal
- `.eara-quote--white` - Variante branca
- `.eara-quote--light-blue` - Variante azul claro
- `.eara-quote--light-green` - Variante verde claro
- `.eara-quote--light-gray` - Variante cinza claro
- `.eara-quote--standard` - Estilo padrão
- `.eara-quote--highlighted` - Estilo com destaque

### Elementos Internos
- `.eara-quote__mark` - Ícone de aspas
- `.eara-quote__content` - Container do texto
- `.eara-quote__text` - Texto da citação
- `.eara-quote__footer` - Rodapé com autor
- `.eara-quote__author-wrapper` - Wrapper do autor
- `.eara-quote__avatar` - Imagem do avatar
- `.eara-quote__author` - Nome do autor

## Exemplo de Uso

1. No editor de blocos, procure por "Quote"
2. Clique para inserir o bloco
3. No painel de controles (direita), customize:
   - Cor de fundo
   - Variante de estilo
   - Opções de avatar
4. Edite o texto da citação e nome do autor diretamente no bloco
5. Se habilitado, adicione uma imagem para o avatar

## Estilos de Saída

### HTML gerado
```html
<div class="eara-quote eara-quote--light-blue eara-quote--standard">
  <div class="eara-quote__mark">
    <span>"</span>
  </div>
  
  <div class="eara-quote__content">
    <p class="eara-quote__text">Citação do texto...</p>
  </div>
  
  <div class="eara-quote__footer">
    <div class="eara-quote__author-wrapper">
      <img src="..." class="eara-quote__avatar" alt="Author" />
      <p class="eara-quote__author">Nome do Autor</p>
    </div>
  </div>
</div>
```

## Responsividade

O bloco é totalmente responsivo:
- Em telas pequenas (< 768px), o padding é reduzido de 32px para 24px
- O tamanho das aspas é reduzido de 48px para 36px
- O tamanho da fonte da citação é reduzido de 16px para 14px
- O layout do autor permanece flexível

## Personalizações CSS

Você pode personalizar o bloco adicionando CSS customizado:

```css
/* Mudar a cor da marca de aspas */
.eara-quote__mark span {
  color: #your-color;
}

/* Mudar o tamanho do avatar */
.eara-quote__avatar {
  width: 64px;
  height: 64px;
}

/* Adicionar borda */
.eara-quote {
  border-left: 4px solid #your-color;
  padding-left: 28px;
}
```
