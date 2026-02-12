import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5d8d9f5 (fix: force case-sensitive rename for Gallery component)
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env instead of just those starting with VITE_
    const env = loadEnv(mode, process.cwd(), '');
    
<<<<<<< HEAD
    return {
      // 1. Set base to relative to ensure assets load correctly on Netlify
      base: './', 
      
=======
    const env = loadEnv(mode, '.', '');
    return {
>>>>>>> 6e656ca (Inital commit)
=======
    return {
      // 1. Set base to relative to ensure assets load correctly on Netlify
      base: './', 
      
>>>>>>> 5d8d9f5 (fix: force case-sensitive rename for Gallery component)
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
<<<<<<< HEAD
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
=======
      
      // 2. Optimized Define: Using || handles missing keys gracefully
>>>>>>> 5d8d9f5 (fix: force case-sensitive rename for Gallery component)
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
<<<<<<< HEAD
});
>>>>>>> 6e656ca (Inital commit)
=======
});
>>>>>>> 5d8d9f5 (fix: force case-sensitive rename for Gallery component)
