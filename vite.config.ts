import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    plugins: [react()],
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
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
        target: 'es2019',
        cssCodeSplit: true,
        minify: 'esbuild',
        assetsInlineLimit: 4096,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                },
            },
        },
        outDir: 'build',
    },
    base: 'https://vasilkov-dmitrii.github.io/developer-portfolio/',
})
