# Especificação Visual — Grupo NORP
## Referência visual fornecida pelo cliente

> **Objetivo deste documento:** registrar de forma extremamente detalhada a linguagem visual, estrutura, hierarquia, composição, cores, tipografia, espaçamentos, componentes, estados visuais e animações observáveis ou diretamente derivadas da referência fornecida, para que a equipe de desenvolvimento reproduza o layout com o máximo de fidelidade.
>
> **Importante:** a referência anexada neste documento é a imagem recebida nesta solicitação. Nenhum conteúdo estrutural adicional foi inventado. Onde uma interação não é visualmente demonstrada na imagem, ela é tratada apenas como recomendação de implementação compatível com o design, e não como comportamento já comprovado pela referência.

![Referência visual do projeto](./referencia-grupo-norp.png)

---

# 1. Direção visual geral

A interface utiliza uma linguagem **corporativa premium**, predominantemente escura, com forte contraste entre preto, branco e dourado.

A percepção visual pretendida é de:

- grupo empresarial sólido;
- posicionamento premium;
- tecnologia e modernidade;
- engenharia e arquitetura;
- autoridade;
- sofisticação;
- confiança;
- organização;
- exclusividade.

A cor dourada não é usada como preenchimento dominante em toda a página. Ela funciona principalmente como **cor de destaque**, utilizada para:

- palavras estratégicas em títulos;
- títulos de seção;
- pequenos rótulos;
- ícones;
- bordas;
- linhas decorativas;
- indicadores;
- links de ação;
- botões principais;
- números de destaque;
- assinatura;
- detalhes da identidade visual.

O preto é a base estrutural da página. O branco é utilizado para leitura principal e o dourado conduz a atenção para elementos importantes.

---

# 2. Paleta visual

## 2.1. Fundo principal

A base visual é um preto muito escuro, próximo de:

- `#070809`
- `#090A0C`
- `#0C0D0F`

O objetivo não é utilizar um preto absoluto em todos os elementos, mas criar pequenas diferenças de luminosidade entre:

- fundo;
- cards;
- seções;
- imagens;
- barras;
- rodapé.

Isso cria profundidade sem quebrar o estilo.

## 2.2. Preto secundário

Para cards, blocos e áreas internas:

- `#0E0F11`
- `#111214`
- `#151618`

Os cards continuam escuros, porém devem ser visualmente distinguíveis do fundo geral.

## 2.3. Branco

Texto principal:

- branco próximo de `#F5F5F5`;
- branco secundário próximo de `#E5E5E5`;
- cinza claro próximo de `#B8B8B8`.

O branco puro não precisa dominar a interface; a referência trabalha com contraste controlado.

## 2.4. Dourado principal

O dourado usado na identidade visual é quente, metálico e relativamente escuro, evitando um amarelo muito saturado.

Referências aproximadas:

- `#C9962E`
- `#D4A63C`
- `#E2B85A`

Uso prioritário:

- CTAs;
- títulos destacados;
- ícones;
- bordas;
- números;
- pequenos detalhes;
- linhas;
- estados ativos.

## 2.5. Dourado de brilho

Para efeitos de brilho e iluminação:

- `rgba(212, 166, 60, 0.12)`
- `rgba(226, 184, 90, 0.20)`
- `rgba(255, 205, 100, 0.30)`

Esse brilho deve ser controlado. A estética da referência é elegante e não neon.

---

# 3. Tipografia

A interface utiliza uma sans-serif moderna, limpa e corporativa.

## 3.1. Família tipográfica

A implementação deve usar uma fonte sans-serif moderna de aparência semelhante à apresentada na referência.

Prioridade visual:

1. fonte sem serifa;
2. formas geométricas;
3. boa legibilidade;
4. peso forte em títulos;
5. pesos médios em navegação;
6. peso regular em textos;
7. boa renderização em desktop e mobile.

Uma implementação equivalente pode usar uma família como Inter, Manrope ou outra sans-serif premium visualmente equivalente, desde que a proporção das letras permaneça compatível com a referência.

## 3.2. Título principal

O título do hero apresenta:

- grande escala;
- peso alto;
- espaçamento de linha compacto;
- alinhamento à esquerda;
- poucas linhas;
- contraste máximo;
- destaque dourado em parte estratégica da frase.

Estrutura visual:

`Transformando`
`ideias em negócios`
`que constroem o futuro.`

A parte “constroem o futuro.” é visualmente destacada em dourado.

## 3.3. Títulos de seção

Os títulos das seções são fortes, compactos e centralizados quando a seção é institucional.

Exemplo visual:

**Conheça as empresas**
**que fazem parte do nosso grupo.**

O subtítulo “NOSSAS EMPRESAS” funciona como uma pequena etiqueta acima do título.

## 3.4. Corpo

Textos de descrição:

- peso regular;
- tamanho menor;
- cinza claro;
- line-height confortável;
- largura limitada para impedir linhas excessivamente longas.

---

# 4. Cabeçalho / barra de navegação

## 4.1. Estrutura

O header ocupa toda a largura da viewport.

Elementos:

1. logo do Grupo NORP no lado esquerdo;
2. navegação central;
3. CTA “FALE CONOSCO” no lado direito.

## 4.2. Logo

A marca é composta por:

- símbolo arquitetônico em dourado;
- texto “GRUPO NORP” em branco;
- subtítulo “SOLUÇÕES QUE CONSTROEM” em dourado.

O símbolo deve permanecer com grande nitidez.

## 4.3. Navegação

Itens visíveis:

- Início
- Empresas
- Sobre
- Serviços
- Contato

A navegação:

- fica centralizada;
- possui espaçamento horizontal confortável;
- usa branco ou cinza claro;
- utiliza dourado no item ativo;
- possui linha dourada abaixo do item selecionado.

## 4.4. Estado ativo

Na referência, “Empresas” aparece ativo.

O estado ativo é construído por:

- texto dourado;
- linha inferior dourada;
- maior contraste;
- nenhuma sombra pesada.

## 4.5. Botão “FALE CONOSCO”

No lado direito:

- formato retangular;
- cantos suavemente arredondados;
- fundo dourado;
- texto escuro;
- ícone do WhatsApp;
- boa área de toque visual;
- aparência premium.

O CTA não deve possuir gradiente exagerado.

---

# 5. Hero

## 5.1. Estrutura

O hero é a primeira grande área visual após o header.

Ele utiliza uma composição dividida visualmente em:

- conteúdo textual à esquerda;
- retrato do executivo à direita;
- cidade/arquitetura em background;
- iluminação dourada;
- vinheta escura.

## 5.2. Background

O background possui:

- skyline urbano;
- prédios altos;
- iluminação noturna;
- tons escuros;
- pequenos pontos luminosos;
- iluminação dourada concentrada na área direita;
- alto contraste.

A imagem deve permanecer discreta o suficiente para não competir com o texto.

## 5.3. Fotografia principal

O retrato do executivo fica no lado direito.

Características:

- personagem em primeiro plano;
- roupa preta;
- braços cruzados;
- enquadramento da cintura/torso para cima;
- rosto olhando levemente para o lado;
- recorte limpo;
- integração com a fotografia do cenário.

A parte inferior do personagem se perde gradualmente na área escura do hero.

## 5.4. Rótulo superior

Acima do título existe o pequeno texto:

**LIDERANÇA • VISÃO • RESULTADOS**

Características:

- dourado;
- letras maiúsculas;
- tamanho pequeno;
- espaçamento entre caracteres;
- função de introdução.

## 5.5. Headline

Texto apresentado:

**Transformando  
ideias em negócios  
que constroem o futuro.**

O bloco apresenta:

- peso forte;
- branco como base;
- dourado na parte estratégica;
- espaçamento entre linhas reduzido;
- largura limitada;
- alinhamento à esquerda.

## 5.6. Subtexto

Texto:

> Somos um grupo de empresas que atuam em diferentes segmentos, unidas pelo propósito de gerar valor, inovação e impacto positivo na vida das pessoas.

O parágrafo:

- aparece logo abaixo do título;
- possui largura limitada;
- é cinza claro;
- utiliza line-height confortável;
- não ocupa o mesmo peso visual do título.

## 5.7. CTAs presentes na referência

O hero mostra dois botões:

### Botão primário
**CONHEÇA NOSSAS EMPRESAS →**

- fundo dourado;
- texto escuro;
- seta;
- cantos arredondados;
- alta visibilidade.

### Botão secundário
**ENTRE EM CONTATO**

- fundo transparente;
- borda clara;
- texto branco;
- menos destaque visual;
- mesmo padrão de altura do botão primário.

---

# 6. Seção de empresas

## 6.1. Introdução

A seção começa com:

**NOSSAS EMPRESAS**

seguido pelo título:

**Conheça as empresas  
que fazem parte do nosso grupo.**

A composição é centralizada.

## 6.2. Grid

A referência apresenta seis empresas em uma estrutura de:

- 3 cards por linha;
- 2 linhas;
- espaçamento consistente.

No mobile, essa estrutura deve ser adaptada para uma coluna por vez, preservando a ordem.

## 6.3. Card

Cada card possui:

- fundo preto secundário;
- borda dourada fina;
- cantos arredondados;
- ícone grande;
- nome;
- categoria;
- descrição;
- CTA “SAIBA MAIS →”.

## 6.4. Espaçamento interno

Cada card possui respiro interno generoso.

A estrutura vertical é:

1. ícone;
2. nome;
3. categoria;
4. descrição;
5. ação.

O conteúdo nunca deve tocar as bordas.

## 6.5. Ícones

Os ícones são lineares ou geométricos e dourados.

Cada empresa possui símbolo visual próprio.

Exemplos observados:

- engenharia: edifício;
- arquitetura: desenho arquitetônico;
- clube de tiro: alvo;
- incorporações: símbolo volumétrico;
- consultoria: gráfico/crescimento;
- serviços: engrenagem.

## 6.6. Hover dos cards

A estética pedida para os cards é um **brilho dourado suave**.

Implementação visual recomendada:

- borda passa de dourado discreto para dourado mais luminoso;
- sombra externa pequena;
- glow difuso;
- elevação vertical muito pequena;
- transição de 200–300 ms;
- nenhuma transformação agressiva.

Exemplo conceitual:

`transform: translateY(-4px)`

com sombra dourada extremamente sutil.

O brilho deve parecer um reflexo de luz premium e não uma iluminação neon.

---

# 7. Faixa de indicadores

A seção imediatamente seguinte apresenta quatro indicadores.

Estrutura:

1. ícone;
2. número;
3. descrição.

Itens mostrados:

- **6** — EMPRESAS DO GRUPO
- **+150** — PROJETOS REALIZADOS
- **100%** — COMPROMISSO COM A QUALIDADE
- **+10** — ANOS DE EXPERIÊNCIA EM SOLUÇÕES

## 7.1. Layout

Desktop:

- quatro blocos alinhados horizontalmente;
- separadores verticais;
- ícones dourados;
- números grandes;
- descrições menores.

Mobile:

- deve virar uma grade vertical ou 2 × 2 conforme espaço disponível;
- não reduzir excessivamente o tamanho dos números;
- manter o ritmo visual.

---

# 8. Seção “Sobre”

## 8.1. Estrutura

A seção é dividida em duas metades:

### Lado esquerdo
Fotografia institucional do executivo.

### Lado direito
Conteúdo textual.

## 8.2. Imagem

A imagem possui:

- enquadramento corporativo;
- fundo escuro;
- personagem sentado;
- mesa no primeiro plano;
- iluminação cinematográfica;
- baixa saturação;
- integração com o estilo preto/dourado.

## 8.3. Conteúdo

Pequeno rótulo:

**SOBRE**

Título:

**Por trás de grandes negócios**

O título apresenta a palavra “grandes negócios” com destaque dourado.

## 8.4. Texto

O bloco possui dois parágrafos de apresentação institucional.

A tipografia é:

- branca/cinza;
- tamanho confortável;
- line-height amplo;
- largura de texto controlada.

## 8.5. Assinatura

Na parte inferior aparece uma assinatura cursiva:

**Germano RP**

com:

**FUNDADOR E CEO**

em dourado.

---

# 9. CTA final

Depois da seção sobre existe uma faixa horizontal de conversão.

## 9.1. Elemento visual

À esquerda:

- ícone do WhatsApp;
- glow dourado;
- formato de losango/elemento geométrico;
- aparência chamativa.

## 9.2. Texto

Título:

**VAMOS CONSTRUIR ALGO GRANDE JUNTOS?**

Descrição:

> Entre em contato e descubra como o Grupo NORP pode transformar suas ideias em realidade.

## 9.3. Botão

**FALE CONOSCO**

O botão:

- fundo dourado;
- texto escuro;
- ícone WhatsApp;
- bordas arredondadas;
- tamanho médio/grande.

---

# 10. Footer

O rodapé possui múltiplas colunas.

## 10.1. Coluna de marca

Inclui:

- símbolo NORP;
- nome;
- slogan;
- pequena descrição institucional.

## 10.2. Links rápidos

Inclui:

- Início
- Empresas
- Sobre
- Serviços
- Contato

## 10.3. Segmentos

Inclui:

- Engenharia
- Arquitetura
- Clube de Tiro
- Consultoria
- Serviços

## 10.4. Redes

Ícones circulares:

- Instagram;
- Facebook;
- LinkedIn;
- YouTube.

Os ícones seguem a estética dourada.

## 10.5. Rodapé inferior

Uma linha separadora discreta antecede:

- copyright;
- frase institucional/desenvolvimento.

---

# 11. Sistema de espaçamento

A página utiliza espaçamento generoso.

## 11.1. Desktop

Referência aproximada de ritmo:

- container máximo entre 1180 px e 1400 px;
- padding horizontal entre 48 px e 72 px;
- seções com padding vertical aproximado de 72 px a 120 px;
- cards com 24 px a 32 px de padding interno;
- gaps de grid entre 16 px e 24 px.

Esses valores devem ser tratados como aproximações visuais para implementação e ajustados por breakpoint.

## 11.2. Mobile

A composição deve preservar:

- margem lateral de aproximadamente 20 px;
- cards com 16–20 px de padding interno;
- espaçamento vertical de 48–72 px entre seções;
- títulos em múltiplas linhas;
- largura total aproveitada sem encostar nos limites.

---

# 12. Responsividade

## 12.1. Header

Desktop:

- logo esquerda;
- navegação central;
- CTA direita.

Mobile:

- logo esquerda;
- botão hamburger direita;
- menu expande verticalmente ou em overlay;
- CTA do header pode ficar dentro do menu.

## 12.2. Hero

Desktop:

- texto à esquerda;
- fotografia à direita.

Mobile:

- conteúdo empilhado;
- texto primeiro;
- imagem abaixo ou parcialmente atrás do conteúdo;
- headline reduzida proporcionalmente;
- alinhamento à esquerda.

## 12.3. Empresas

Desktop:

`3 × 2`

Mobile:

`1 × 6`

Cards devem manter largura total disponível.

## 12.4. Indicadores

Desktop:

`4 colunas`

Mobile:

`2 × 2` ou coluna única conforme largura.

A opção final deve preservar legibilidade.

## 12.5. Sobre

Desktop:

`50% imagem / 50% conteúdo`

Mobile:

`imagem → conteúdo`

---

# 13. Animações

## 13.1. Entrada da página

A referência visual favorece microanimações discretas.

Recomendação compatível:

- fade-in;
- translateY pequeno;
- duração de 500–700 ms;
- easing suave;
- stagger em cards.

Não utilizar animações exageradas.

## 13.2. Hero

Elementos podem aparecer em sequência:

1. rótulo;
2. título;
3. subtítulo;
4. CTAs;
5. imagem.

Cada elemento entra com pequeno atraso.

## 13.3. Cards

Ao entrar no viewport:

- opacidade 0 → 1;
- deslocamento vertical pequeno;
- atraso escalonado entre cards.

## 13.4. Hover

Cards:

- leve elevação;
- borda iluminada;
- glow dourado;
- transição suave.

Botões:

- aumento mínimo de brilho;
- leve mudança de contraste;
- pequena elevação;
- ícone pode deslocar 2–4 px.

---

# 14. Estados de interação

## 14.1. Botão primário

Normal:

- dourado;
- texto escuro.

Hover:

- dourado ligeiramente mais luminoso;
- sombra dourada discreta;
- elevação de 1–2 px.

Active:

- retorno visual de 1 px;
- brilho reduzido.

Focus:

- outline dourado de alta acessibilidade.

## 14.2. Botão secundário

Normal:

- transparente;
- borda;
- texto branco.

Hover:

- borda dourada;
- texto dourado;
- fundo com transparência dourada extremamente leve.

## 14.3. Links

Normal:

- cinza claro.

Hover:

- dourado;
- pequena transição de cor.

---

# 15. Hierarquia visual

A ordem de atenção é:

1. título do hero;
2. fotografia do executivo;
3. CTAs;
4. seção de empresas;
5. cards;
6. indicadores;
7. seção sobre;
8. CTA final;
9. footer.

A interface nunca deve permitir que:

- texto secundário compete com headline;
- bordas dominem os cards;
- imagens dificultem a leitura;
- dourado vire excesso visual.

---

# 16. Regras de consistência

Todos os componentes devem seguir:

- mesmo raio de borda;
- mesma família tipográfica;
- mesma lógica de sombras;
- mesma tonalidade de dourado;
- mesma espessura de bordas;
- mesma linguagem de ícones;
- mesma intensidade de glow.

O dourado deve funcionar como um **sistema de destaque**, não como uma cor de preenchimento universal.

---

# 17. Acessibilidade

Mesmo mantendo a aparência premium:

- textos precisam manter contraste adequado;
- foco de teclado deve ser visível;
- CTAs devem possuir área de toque confortável;
- imagens devem receber `alt`;
- ícones decorativos podem ser marcados como decorativos;
- navegação deve ser utilizável sem mouse.

---

# 18. Implementação de componentes

A estrutura pode ser dividida nos seguintes componentes visuais:

```text
Header
Hero
CompanyCarousel / CompanyGrid
CompanyCard
StatsBar
AboutSection
ContactCTA
Footer
MobileMenu
```

Cada componente deve ser reutilizável.

---

# 19. Ordem de construção

A implementação deve seguir esta ordem:

1. fundo global;
2. sistema tipográfico;
3. header;
4. hero;
5. empresas;
6. indicadores;
7. seção sobre;
8. CTA final;
9. footer;
10. responsividade;
11. estados de hover;
12. animações de entrada;
13. otimização de imagens;
14. revisão visual pixel a pixel.

---

# 20. Critério visual de aprovação

O resultado será considerado visualmente alinhado à referência quando:

- o preto dominar a composição;
- o dourado conduzir a hierarquia;
- a fotografia tiver integração natural ao background;
- o header tiver navegação clara;
- o hero transmitir autoridade imediatamente;
- as seis empresas forem visualmente organizadas;
- os cards parecerem premium;
- as estatísticas tiverem forte destaque;
- a seção sobre tiver divisão visual clara;
- o CTA final for facilmente identificável;
- o footer estiver organizado e discreto;
- não existirem efeitos luminosos exagerados.

---

# 21. Observação sobre a referência anexada

A imagem anexada neste documento é a referência recebida na solicitação. Ela está em formato vertical `1024 × 1536`, porém apresenta claramente uma composição de **desktop**. Portanto, esta especificação descreve fielmente os elementos visuais que são observáveis nessa referência.

Não foram adicionadas novas empresas, textos, métricas, seções ou elementos funcionais que não apareçam na referência.

As recomendações de hover, entrada, responsividade e acessibilidade acima representam **orientações de implementação compatíveis com o visual solicitado**, e não afirmações de que esses estados estejam literalmente representados na imagem estática.
