import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths(), netlifyPlugin(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('components/ShareButtons')) {
            return 'share';
          }
          if (id.includes('components/AudioPlayer')) {
            return 'audio';
          }
          if (id.includes('components/EpisodeContent')) {
            return 'content';
          }
        }
      }
    }
  }
});
