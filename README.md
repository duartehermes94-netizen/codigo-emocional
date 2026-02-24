# Código Emocional da Riqueza

Página de vendas/captura focada em autoridade e conversão.

## Como fazer o deploy no GitHub Pages

1. Crie um novo repositório no GitHub.
2. Faça o push do código para o repositório:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings > Pages**.
4. Em **Build and deployment > Source**, selecione **GitHub Actions**.
5. O workflow que eu criei em `.github/workflows/deploy.yml` fará o resto automaticamente sempre que você fizer um push para a branch `main`.

## Configurações do Vite

No arquivo `vite.config.ts`, a propriedade `base` está configurada como `'./'`. Isso permite que o site funcione tanto na raiz do domínio quanto em subpastas (como `usuario.github.io/repo/`).
