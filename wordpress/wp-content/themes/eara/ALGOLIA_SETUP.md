# Configuração do Algolia Search - WordPress Headless

## Visão Geral

Esta configuração permite que o WordPress funcione como indexador automático de conteúdo para o Algolia, sem depender de nenhuma funcionalidade frontend do plugin. O Next.js consome diretamente a API do Algolia para realizar buscas.

## 1. Instalação do Plugin

### 1.1. Instalar o plugin oficial

```bash
# Via WP-CLI (recomendado)
wp plugin install wp-search-with-algolia --activate

# Ou instale manualmente via Admin WordPress:
# Plugins > Adicionar Novo > Buscar "Algolia Search for WordPress"
```

## 2. Configuração das Credenciais

### 2.1. Obter credenciais no Algolia

1. Acesse [https://www.algolia.com/](https://www.algolia.com/)
2. Faça login ou crie uma conta
3. Vá em **Settings > API Keys**
4. Copie:
   - **Application ID**
   - **Admin API Key** (para indexação)
   - **Search-Only API Key** (para o frontend)

### 2.2. Adicionar credenciais no WordPress

Edite o arquivo `wp-config.php` e adicione as seguintes linhas **ANTES** de `/* That's all, stop editing! */`:

```php
// Algolia Configuration
define('ALGOLIA_APPLICATION_ID', 'SEU_APP_ID_AQUI');
define('ALGOLIA_ADMIN_API_KEY', 'SUA_ADMIN_API_KEY_AQUI');
define('ALGOLIA_SEARCH_API_KEY', 'SUA_SEARCH_ONLY_API_KEY_AQUI');
```

**⚠️ IMPORTANTE**: Nunca commite o `wp-config.php` com credenciais para repositórios públicos!

## 3. Configuração do Plugin no WordPress Admin

### 3.1. Acessar configurações do Algolia

1. No Admin WordPress, vá em **Settings > Algolia Search**
2. Verifique se as credenciais foram reconhecidas (deve aparecer uma mensagem de sucesso)

### 3.2. Configurar o índice

1. Vá na aba **Indexing**
2. O plugin vai criar automaticamente o índice: **`eara_global`**
3. Selecione os **post types** que deseja indexar (todos os públicos já estão habilitados por padrão)
4. Clique em **Save Changes**

### 3.3. Fazer a indexação inicial

1. Ainda na aba **Indexing**
2. Clique em **Re-index** para cada post type que você quer indexar
3. Aguarde a indexação completar (pode levar alguns minutos dependendo da quantidade de conteúdo)

### 3.4. Desabilitar recursos frontend (opcional)

1. Vá na aba **Autocomplete** e desabilite
2. Vá na aba **Instant Search Results** e desabilite
3. Não vamos usar essas funcionalidades, pois o frontend é Next.js

## 4. Nome do Índice no Algolia

O índice criado no Algolia terá o nome:

```
eara_global
```

Este é o nome que você deve usar no código do Next.js para realizar buscas.

## 5. Estrutura dos Dados Indexados

Cada documento no Algolia terá a seguinte estrutura:

```json
{
  "objectID": "123",
  "post_title": "Título do Post",
  "post_content": "Conteúdo completo do post...",
  "permalink": "https://seudominio.com/slug-do-post/",
  "post_type": "post",
  "post_type_label": "Post",
  "post_date": 1705708800,
  "post_date_formatted": "20 de janeiro de 2025",
  "excerpt": "Resumo do post...",
  "featured_image": {
    "url": "https://seudominio.com/wp-content/uploads/imagem.jpg",
    "alt": "Texto alternativo"
  },
  "category": ["Categoria 1", "Categoria 2"],
  "post_tag": ["tag1", "tag2"]
}
```

## 6. Indexação Automática

A indexação é automática e ocorre em tempo real quando você:

- ✅ **Criar** um novo post/página
- ✅ **Atualizar** um post/página existente
- ✅ **Excluir** um post/página
- ✅ **Publicar** um rascunho
- ✅ **Despublicar** um post (remove do índice)

**Importante**: Apenas conteúdos com status `publish` são indexados.

## 7. Uso no Frontend (Next.js)

### 7.1. Instalar o cliente Algolia

```bash
npm install algoliasearch
# ou
pnpm add algoliasearch
```

### 7.2. Exemplo de implementação básica

```typescript
// app/lib/algolia.ts
import algoliasearch from 'algoliasearch';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
);

export const searchIndex = client.initIndex('eara_global');

// Função de busca
export async function search(query: string, filters?: string) {
  const { hits } = await searchIndex.search(query, {
    filters,
    hitsPerPage: 20,
  });
  return hits;
}
```

### 7.3. Variáveis de ambiente no Next.js

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_ALGOLIA_APP_ID=seu_app_id
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=sua_search_only_api_key
```

### 7.4. Exemplo de componente de busca

```tsx
'use client';

import { useState } from 'react';
import { search } from '@/lib/algolia';

export function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (q: string) => {
    setQuery(q);
    if (q.length > 2) {
      const hits = await search(q);
      setResults(hits);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Buscar..."
      />
      
      {results.length > 0 && (
        <ul>
          {results.map((hit: any) => (
            <li key={hit.objectID}>
              <a href={hit.permalink}>
                {hit.featured_image && (
                  <img src={hit.featured_image.url} alt={hit.featured_image.alt} />
                )}
                <h3>{hit.post_title}</h3>
                <p>{hit.excerpt}</p>
                <span>{hit.post_type_label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## 8. Filtragem por Post Type

Para filtrar resultados por post type no frontend:

```typescript
// Buscar apenas posts
const posts = await search('termo de busca', 'post_type:post');

// Buscar apenas páginas
const pages = await search('termo de busca', 'post_type:page');

// Buscar em múltiplos post types
const results = await search('termo de busca', 'post_type:post OR post_type:evento');
```

## 9. Adaptação de Permalinks

Se o WordPress estiver em um domínio diferente do Next.js, você pode adaptar os permalinks no frontend:

```typescript
function adaptPermalink(wordpressUrl: string): string {
  // Remove o domínio do WordPress e mantém apenas o path
  const url = new URL(wordpressUrl);
  return url.pathname; // Retorna "/slug-do-post/"
}

// Uso:
<Link href={adaptPermalink(hit.permalink)}>
  {hit.post_title}
</Link>
```

## 10. Troubleshooting

### Posts não estão sendo indexados

1. Verifique se o plugin está ativo: `wp plugin list`
2. Verifique se as credenciais estão corretas no `wp-config.php`
3. Verifique os logs do WordPress (ative `WP_DEBUG` se necessário)
4. Force a reindexação manual via Admin: Settings > Algolia Search > Indexing > Re-index

### Permalinks estão errados

Os permalinks salvos no índice são absolutos (incluem o domínio do WordPress). No Next.js, extraia apenas o `pathname` da URL conforme exemplo acima.

### Conteúdo desatualizado no Algolia

A indexação é automática e em tempo real. Se algo não está sincronizando:

1. Verifique se o post está com status `publish`
2. Force uma atualização manual (edit e save no WordPress)
3. Verifique os logs do Algolia: [https://www.algolia.com/apps/YOUR_APP_ID/logs](https://www.algolia.com/apps/YOUR_APP_ID/logs)

## 11. Recomendações de Produção

1. ✅ Use variáveis de ambiente para as credenciais (nunca hardcode)
2. ✅ Use a **Search-Only API Key** no frontend (nunca a Admin API Key)
3. ✅ Implemente debounce na busca para evitar requisições excessivas
4. ✅ Configure rate limiting se necessário
5. ✅ Monitore o uso de quota no Algolia Dashboard
6. ✅ Considere implementar cache no Next.js para resultados populares

## 12. Monitoramento

- **Algolia Dashboard**: [https://www.algolia.com/apps](https://www.algolia.com/apps)
- **Logs de indexação**: Settings > API Logs
- **Estatísticas de busca**: Analytics > Search

---

## Resumo

- ✅ Plugin: **Algolia Search for WordPress**
- ✅ Índice: **`eara_global`**
- ✅ Indexação: **Automática e em tempo real**
- ✅ Post types: **Todos os públicos**
- ✅ Status: **Apenas `publish`**
- ✅ Frontend: **Next.js 15 com algoliasearch client**
- ✅ Zero dependência de WordPress para busca
