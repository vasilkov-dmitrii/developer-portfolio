import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            scopeBehaviour: 'local',
        },
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    build: {
        outDir: 'build',
    },
    base: 'https://vasilkov-dmitrii.github.io/developer-portfolio/',
})
