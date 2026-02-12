import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current working directory.
    const env = loadEnv(mode, process.cwd(), '');
    
    return {
      // Set base to relative to ensure assets load correctly
      base: './', 
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },

      plugins: [react()],
      
      // Inject API keys into the app during the build process
      define: {
        'import.meta.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ""),
        'import.meta.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || "")
      },
      
      resolve: {
        alias: {
          // Standard Vite alias pointing to your source root
          '@': path.resolve(__dirname, './src'),
        }
      },
      
      // Ensure the build output matches Netlify and Vercel expectations
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
      }
    };
});
