# Mauricio Canto Contabilidade

Landing page estática, responsiva e sem dependências de instalação.

## Arquivos

- `index.html` — conteúdo e estrutura da página.
- `styles.css` — identidade visual e layout responsivo.
- `script.js` — menu móvel, formulário e configuração do WhatsApp.
- `favicon.svg` — ícone do site.

## Antes de publicar

Abra `script.js` e informe o número comercial na propriedade `whatsapp`, usando somente números e o formato internacional. Exemplo de formato: `55` + DDD + número. Sem essa configuração, o formulário avisa que o número está faltando e não simula o envio.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie os arquivos desta pasta para a raiz do repositório.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**, a branch principal e a pasta `/ (root)`.
5. Salve. O GitHub Pages publicará o `index.html` como página inicial.

Não é necessário instalar dependências nem executar um processo de build. As fontes tipográficas são carregadas do Google Fonts; se não estiverem disponíveis, o site usa fontes locais alternativas.
