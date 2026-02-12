import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
<<<<<<< HEAD
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env instead of just those starting with VITE_
    const env = loadEnv(mode, process.cwd(), '');
    
    return {
      // 1. Set base to relative to ensure assets load correctly on Netlify
      base: './', 
      
=======
    const env = loadEnv(mode, '.', '');
    return {
>>>>>>> 6e656ca (Inital commit)
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
<<<<<<< HEAD
      
      // 2. Optimized Define: Using || handles missing keys gracefully
      define: {
        'import.meta.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ""),
        'import.meta.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || "")
      },
      
      resolve: {
        alias: {
          // 3. Standard Vite alias practice (points to your source root)
          '@': path.resolve(__dirname, './src'),
        }
      },
      
      // 4. Ensure the build output matches Netlify's expectations
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
      }
    };
});
=======
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
>>>>>>> 6e656ca (Inital commit)
