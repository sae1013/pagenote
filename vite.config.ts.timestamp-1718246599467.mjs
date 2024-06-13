// vite.config.ts
import { defineConfig } from "file:///Users/minwoojung/repo/react-content-script/node_modules/vite/dist/node/index.js";
import react from "file:///Users/minwoojung/repo/react-content-script/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///Users/minwoojung/repo/react-content-script/node_modules/vite-plugin-svgr/dist/index.mjs";
import { crx } from "file:///Users/minwoojung/repo/react-content-script/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "React Content Script",
  version: "1.0.0",
  action: {
    default_title: "Popup",
    default_popup: "index.html",
    default_icon: "logo192.png"
  },
  icons: {},
  permissions: ["activeTab", "scripting"],
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["content-script/src/main.tsx"],
      media: []
    }
  ]
};

// vite.config.ts
var vite_config_default = defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true
      }
    }),
    crx({ manifest: manifest_default })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWlud29vanVuZy9yZXBvL3JlYWN0LWNvbnRlbnQtc2NyaXB0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWlud29vanVuZy9yZXBvL3JlYWN0LWNvbnRlbnQtc2NyaXB0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9taW53b29qdW5nL3JlcG8vcmVhY3QtY29udGVudC1zY3JpcHQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcbmltcG9ydCB7IGNyeCB9IGZyb20gXCJAY3J4anMvdml0ZS1wbHVnaW5cIjtcbmltcG9ydCBtYW5pZmVzdCBmcm9tIFwiLi9tYW5pZmVzdC5qc29uXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICB3YXRjaDoge1xuICAgICAgdXNlUG9sbGluZzogdHJ1ZSwgLy8gXHVEMzBDXHVDNzdDIFx1QzJEQ1x1QzJBNFx1RDE1QyBcdUM3NzRcdUJDQTRcdUQyQjggXHVBQzEwXHVDOUMwXHVCOTdDIFx1QzcwNFx1RDU1QyBcdUQzRjRcdUI5QzEgXHVDMEFDXHVDNkE5IChcdUQ1NDRcdUM2OTRcdUQ1NUMgXHVBQ0JEXHVDNkIwKVxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHN2Z3Ioe1xuICAgICAgc3Znck9wdGlvbnM6IHtcbiAgICAgICAgaWNvbjogdHJ1ZSxcbiAgICAgICAgLy8gLi4uc3ZnciBvcHRpb25zIChodHRwczovL3JlYWN0LXN2Z3IuY29tL2RvY3Mvb3B0aW9ucy8pXG4gICAgICB9LFxuICAgIH0pLFxuICAgIC8vIEJ1aWxkIENocm9tZSBFeHRlbnNpb25cbiAgICBjcngoeyBtYW5pZmVzdCB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVCxTQUFTLG9CQUFvQjtBQUNoVixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsYUFBYTtBQUFBLFFBQ1gsTUFBTTtBQUFBLE1BRVI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUVELElBQUksRUFBRSwyQkFBUyxDQUFDO0FBQUEsRUFDbEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
