# MembersMap Block

## Descrição
Bloco do WordPress que exibe uma imagem estática de mapa de membros com controles de dimensão e espaçamento.

## Características

- ✅ Renderiza uma imagem estática
- ✅ Atributos de **Width** e **Height** editáveis no editor
- ✅ Suporte a **Padding** e **Margin** padrão do WordPress
- ✅ Suporte a responsive design
- ✅ Interface intuitiva com controles no inspector

## Estrutura de Arquivos

```
src/blocks/MembersMap/
├── block.json           # Configuração do bloco
├── index.js            # Registro do bloco
├── edit.js             # Componente do editor
├── save.js             # Componente do frontend
├── editor.scss         # Estilos do editor
├── styles.scss         # Estilos do frontend
└── members-map.png     # Imagem estática do mapa
```

## Atributos

### Dimensões

| Atributo | Tipo | Padrão | Descrição |
|----------|------|--------|-----------|
| width | string | "100%" | Largura do container (ex: 100%, 500px) |
| height | string | "500px" | Altura do container (ex: 500px, 100vh) |

### Suporte Nativo do WordPress

- **Spacing**: Padding e Margin
- **Layout**: Suporte a layouts nativos do WordPress
- **Interactivity**: Compatível com a API de Interatividade do WordPress

## Como Usar

1. No editor de blocos, procure por "Members Map"
2. Adicione o bloco à página
3. Use o painel Inspector à direita para ajustar:
   - **Width**: Define a largura do mapa
   - **Height**: Define a altura do mapa
4. Use os controles nativos do WordPress para adicionar padding/margin

## Personalização da Imagem

Para substituir a imagem padrão:

1. Substitua o arquivo `src/blocks/MembersMap/members-map.png` por sua imagem
2. Certifique-se de que a imagem tem dimensões adequadas (recomendado: 800x600px ou superior)
3. Execute `npm run build` para compilar as alterações

## Compilação

O bloco é automaticamente compilado para a pasta `build/` quando você executa:

```bash
npm run build
```

Para desenvolvimento com hot-reload:

```bash
npm run dev
```

## Suporte de Navegadores

O bloco funciona em todos os navegadores modernos suportados pelo WordPress.
