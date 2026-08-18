import express, { type Request, type Response, type NextFunction } from 'express';
import path from 'path';

const app = express();
// process.cwd() em vez de __dirname: mantém o caminho estável tanto rodando
// a partir de src/ (tsx) quanto de dist/src/ (build) e na função da Vercel.
const publicDir = path.join(process.cwd(), 'public');

app.disable('x-powered-by');

// Arquivos estáticos (css, js, assets). Em produção na Vercel isso é servido
// diretamente pela CDN via vercel.json; aqui garante o mesmo comportamento
// em desenvolvimento local (npm run dev).
app.use(express.static(publicDir, { extensions: ['html'] }));

// Rota principal — sincronizada com a página do Grupo NORP.
app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/healthz', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

// Qualquer outra rota não encontrada volta para a home.
app.use((_req: Request, res: Response) => {
  res.status(404).sendFile(path.join(publicDir, 'index.html'));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

export default app;
