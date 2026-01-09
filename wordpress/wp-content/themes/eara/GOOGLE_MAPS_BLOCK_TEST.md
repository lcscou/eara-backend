# 🧪 Guia de Teste - Bloco Google Maps

## Verificação Rápida

Após fazer build do tema, siga estes passos para testar o bloco:

### 1. Verificar se o bloco está registrado

No console do navegador (F12), procure por:
```javascript
// Deve existir um bloco registrado
wp.blocks.getBlockType('eara/google-maps')
```

Resultado esperado: Um objeto com informações do bloco

### 2. Testar no Editor Gutenberg

1. ✅ Vá para **Páginas > Adicionar Nova**
2. ✅ Procure pelo bloco "Google Maps"
3. ✅ Adicione o bloco à página
4. ✅ Cole uma URL de embed do Google Maps no campo "Map Embed URL"

**URL de Teste (Times Square, NYC):**
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-73.9871!3d40.7580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a380bd72999%3A0x6e68f29ad70f00e1!2sPort%20Authority%20Bus%20Terminal!5e0!3m2!1sen!2sus!4v1234567890
```

### 3. Verificar Funcionalidades

#### Configurações Principais
- [ ] Digite uma URL e o mapa aparece na pré-visualização
- [ ] Mude o título do mapa
- [ ] Customize a altura (teste 300px, 500px, 800px)
- [ ] Customize a largura (teste 100%, 80%, 50vw)

#### Aparência
- [ ] Ative/desative a borda
- [ ] Ajuste o raio das bordas (teste 0, 8, 20, 50)
- [ ] Veja as alterações em tempo real

#### Responsividade
- [ ] Publique a página
- [ ] Visualize no desktop (1920px)
- [ ] Redimensione para tablet (768px)
- [ ] Redimensione para mobile (320px)
- [ ] ✅ O mapa deve se adaptar a todos os tamanhos

### 4. Teste com GraphQL

Se tiver WPGraphQL instalado:

```graphql
query {
  pages(first: 1) {
    nodes {
      title
      blocks {
        name
        attributes
      }
    }
  }
}
```

Procure por resultado similar a:
```json
{
  "name": "eara/google-maps",
  "attributes": {
    "mapUrl": "https://www.google.com/maps/embed?pb=...",
    "height": "400",
    "width": "100%",
    "title": "Times Square",
    "border": true,
    "borderRadius": "8"
  }
}
```

### 5. Teste de HTML Gerado

Após publicar a página, visualize o código-fonte (Ctrl+U) e procure por:

```html
<div class="wp-block-eara-google-maps" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
  <iframe
    width="100%"
    height="400"
    style="border: none; border-radius: 8px; display: block;"
    src="https://www.google.com/maps/embed?pb=..."
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Times Square"
  />
</div>
```

## Checklist de Validação

- [ ] Bloco aparece na lista de blocos disponíveis
- [ ] Bloco se registra sem erros no console
- [ ] Interface do editor carrega corretamente
- [ ] Pré-visualização mostra o mapa ao adicionar URL
- [ ] Todas as configurações funcionam (altura, largura, borda, etc.)
- [ ] Mapa é responsivo em todos os tamanhos de tela
- [ ] Dados aparecem corretamente no GraphQL
- [ ] HTML gerado é semântico e acessível
- [ ] Sem erros JavaScript no console
- [ ] Sem avisos CSS em relação aos estilos

## Problemas Comuns

### "Bloco não aparece na lista"
**Solução:** Rode `npm run build` novamente
```bash
npm run build
```

### "Mapa em branco"
**Solução:** Verifique se a URL é correta
- Deve começar com `https://www.google.com/maps/embed`
- Não use URLs de compartilhamento normal (google.com/maps/...)

### "Console mostra erro de script"
**Solução:** Limpe cache do navegador (Ctrl+Shift+Delete)

### "Bloco não salvando as configurações"
**Solução:** Verifique se não há erros no console (F12)

## Performance

Teste com Chrome DevTools:

1. Abra DevTools (F12)
2. Aba **Performance**
3. Clique Record
4. Interaja com a página (scroll, zoom)
5. Clique Stop
6. Analise - não deve haver jank (travamentos)

## Acessibilidade

1. Instale extensão [WAVE](https://wave.webaim.org/extension/)
2. Execute a verificação
3. Não deve haver erros de acessibilidade
4. Iframe deve ter atributo `title` preenchido

## Próximos Passos

Após validar:
- [ ] Teste em diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Teste em diferentes temas WordPress
- [ ] Teste com plugins conflitantes (desative alguns)
- [ ] Faça commit das mudanças no Git
