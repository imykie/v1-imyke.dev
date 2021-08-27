import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr()],
});
