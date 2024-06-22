import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true, // 파일 시스템 이벤트 감지를 위한 폴링 사용 (필요한 경우)
    },
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    svgr({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    // Build Chrome Extension
    crx({ manifest }),
  ],
});
