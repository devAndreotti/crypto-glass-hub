
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/crypto-glass-hub/', // <-- ESSA LINHA É FUNDAMENTAL
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['@splinetool/runtime']
  },
  build: {
    rollupOptions: {
      external: (id) => {
        // Don't externalize @splinetool packages - they should be bundled
        if (id.includes('@splinetool')) {
          return false;
        }
        return false;
      }
    }
  }
}));
