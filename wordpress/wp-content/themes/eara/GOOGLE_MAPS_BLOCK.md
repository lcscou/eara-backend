# 🗺️ Novo Bloco: Google Maps

Um novo bloco personalizado foi criado para permitir incorporar facilmente mapas do Google Maps nas suas páginas.

## 📁 Arquivos Criados

```
src/blocks/GoogleMaps/
├── block.json          # Configuração do bloco
├── index.js            # Registro do bloco
├── edit.js             # Interface do editor
├── save.js             # Renderização frontend
├── editor.scss         # Estilos do editor
├── styles.scss         # Estilos do frontend
└── README.md           # Documentação detalhada
```

## 🚀 Como Usar

### 1. No Editor Gutenberg

1. Abra o editor de página/post no WordPress
2. Adicione um novo bloco
3. Procure por "Google Maps" ou "eara/google-maps"
4. Configure as opções:
   - **Map Embed URL**: URL obtida do Google Maps
   - **Map Title**: Título descritivo
   - **Height**: Altura em pixels (padrão: 400px)
   - **Width**: Largura (padrão: 100%)
   - **Border**: Mostrar borda (padrão: sim)
   - **Border Radius**: Raio das bordas (padrão: 8px)

### 2. Obtendo a URL de Embed

1. Acesse [Google Maps](https://www.google.com/maps)
2. Procure por um local
3. Clique em **Share** (Compartilhar)
4. Clique em **Embed a map** (Incorporar um mapa)
5. Copie a URL do iframe (atributo `src`)
6. Cole no campo "Map Embed URL" do bloco

### 3. Customização via GraphQL

Se estiver usando WPGraphQL Blocks, acesse os dados do bloco:

```graphql
query GetPageWithMaps {
  pages(first: 1) {
    nodes {
      blocks {
        name
        attributes
      }
    }
  }
}
```

Retorna:
```json
{
  "name": "eara/google-maps",
  "attributes": {
    "mapUrl": "https://www.google.com/maps/embed?pb=...",
    "height": "400",
    "width": "100%",
    "title": "Location Map",
    "border": true,
    "borderRadius": "8"
  }
}
```

## ⚙️ Configurações do Bloco

| Atributo | Tipo | Padrão | Descrição |
|----------|------|--------|-----------|
| `mapUrl` | string | "" | URL de embed do Google Maps |
| `height` | string | "400" | Altura em pixels |
| `width` | string | "100%" | Largura (px, %, vw) |
| `title` | string | "Location Map" | Título do iframe |
| `border` | boolean | true | Mostrar borda |
| `borderRadius` | string | "8" | Raio das bordas em px |

## 🎨 Características

✅ Interface intuitiva no editor Gutenberg  
✅ Visualização em tempo real  
✅ Controle total de dimensões e aparência  
✅ 100% responsivo  
✅ Suporte a múltiplos mapas por página  
✅ Carregamento otimizado (lazy loading)  
✅ Compatível com WPGraphQL Blocks  
✅ Acessível (ARIA labels apropriados)  

## 📊 Performance

- Usa `loading="lazy"` para carregar mapas apenas quando visíveis
- Otimizado para dispositivos móveis
- Suporta alinhamento full-width e wide do Gutenberg

## 🔒 Segurança

- URLs validadas
- Apenas URLs do Google Maps
- `referrerPolicy="no-referrer-when-downgrade"` para privacidade

## 📝 Nota para Desenvolvedores

O bloco foi criado seguindo o padrão do projeto:
- Usa WP.blocks API para registro
- Usa componentes nativos do Gutenberg
- Suporta internacionalização (i18n)
- Estrutura idêntica aos outros blocos (Button, Card, etc.)

## 📚 Para Mais Informações

Consulte [src/blocks/GoogleMaps/README.md](src/blocks/GoogleMaps/README.md) para documentação completa e avançada.
