import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// solo si tambien vamos a implementar el deplieuge desde github actions
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

// Configuración base dependiendo de si se ejecuta localmente o en GitHub Actions
const base = isGitHubActions ? '/deploy_vitest-gh-pages' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [react()],
})
