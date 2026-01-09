# Google Maps Block

Um bloco Gutenberg personalizado para incorporar mapas do Google Maps diretamente no seu site WordPress.

## Recursos

- 📍 Incorporar mapas do Google Maps via embed URL
- 📐 Controlar altura, largura e raio de borda
- 🎨 Opção de mostrar/ocultar bordas
- 📱 Totalmente responsivo
- ♿ Acessível com atributos ARIA apropriados

## Como Usar

### 1. Obtendo a URL de Embed do Google Maps

1. Abra [Google Maps](https://www.google.com/maps)
2. Procure por um local (endereço, negócio, coordenadas, etc.)
3. Clique no botão **Share** (Compartilhar) no canto superior esquerdo
4. Clique na aba **Embed a map** (Incorporar um mapa)
5. Copie a **URL do iframe** (o valor do atributo `src` dentro do iframe)
   - Exemplo: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-73.9352!3d40.7306!...`
6. Cole a URL no campo "Map Embed URL" das configurações do bloco

### 2. Configurando o Bloco

No editor de blocos, você encontrará as seguintes opções:

#### Configurações Principais
- **Map Embed URL**: URL de embed obtida do Google Maps
- **Map Title**: Título descritivo do mapa (usado como atributo `title` do iframe)

#### Dimensões
- **Width**: Largura do mapa (padrão: 100%)
- **Height**: Altura do mapa em pixels (padrão: 400px)

#### Aparência
- **Show Border**: Mostrar borda ao redor do mapa (padrão: ativado)
- **Border Radius**: Raio das bordas arredondadas em pixels (padrão: 8px)

## Exemplo de Resultado

```html
<div class="wp-block-eara-google-maps" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
  <iframe
    width="100%"
    height="400"
    style="border: none; border-radius: 8px; display: block;"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-73.9352!3d40.7306!..."
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Location Map"
  />
</div>
```

## Dicas

- **Preservar Razão de Aspecto**: Use `width: 100%` e altura fixa para manter a razão de aspecto
- **Mapas Responsivos**: O bloco é 100% responsivo por padrão
- **Múltiplos Mapas**: Você pode adicionar vários blocos de mapa na mesma página
- **Alinhamento**: Suporta alinhamentos `alignfull` e `alignwide` do Gutenberg

## Atributos GraphQL

Se você estiver consumindo este bloco via WPGraphQL Blocks, os seguintes atributos estão disponíveis:

```graphql
{
  blocks {
    name
    attributes
  }
}
```

Resposta:
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

## Segurança

- Usa `loading="lazy"` para melhor performance
- Define `referrerPolicy="no-referrer-when-downgrade"` para privacidade
- Sanitiza URLs de entrada via WordPress sanitization
- Apenas URLs do Google Maps são aceitas (validação no frontend)

## Compatibilidade

- WordPress 6.0+
- WP Gutenberg 11.0+
- Totalmente compatível com WPGraphQL Blocks

## Troubleshooting

### O mapa não aparece
- Verifique se a URL começa com `https://www.google.com/maps/embed`
- Certifique-se de que você copiou o URL do **embed**, não o link de compartilhamento normal
- Limpe o cache do navegador

### Iframe tem tamanho incorreto
- Ajuste a altura nas configurações do bloco
- Use `width: 100%` para responsividade total
- Verifique se há CSS conflitante do tema

### Problemas de responsividade
- O bloco é responsivo por padrão
- Se tiver problemas, aumente a altura mínima no mobile em `styles.scss`
