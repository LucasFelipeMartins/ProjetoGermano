# Grupo NORP

Site institucional do Grupo NORP, servido por um backend Node.js + TypeScript (Express).

## Estrutura

```
api/            Função serverless da Vercel (reaproveita src/app.ts)
src/            Backend Express em TypeScript
  app.ts        Configuração do app (rotas, arquivos estáticos)
  server.ts     Entrada para rodar localmente (npm run dev / npm start)
public/         Frontend estático servido pelo backend
  index.html
  css/style.css
  js/main.js
  assets/
    logos/      Logos das empresas (carrossel do hero)
    empresas/   Fotos/ícones dos cards de empresas
    cliente/    Fotos institucionais (retrato, seção "Sobre")
    hero/       Imagens de fundo do hero
docs/           Documentos de referência (não fazem parte do site)
```

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000 — a rota `/` serve `public/index.html`.

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

O projeto já está configurado (`vercel.json`) para rodar o backend como função
serverless em `api/index.ts` e servir `public/` (css, js, assets) como
arquivos estáticos.

```bash
npm install -g vercel   # se ainda não tiver
vercel                  # deploy de preview
vercel --prod           # deploy de produção
```

Nenhuma variável de ambiente é necessária para o deploy básico.
