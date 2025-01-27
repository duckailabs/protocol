import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenPond Protocol",
  description: "OpenPond Protocol Specification and OIPs",
  srcDir: "./",
  outDir: ".vitepress/dist",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Documentation",
        link: "https://docs.duckai.ai",
      },
      { text: "Specification", link: "/" },
    ],
    sidebar: [
      {
        text: "Protocol",
        items: [
          { text: "Specification", link: "/" },
          { text: "OIP Process", link: "/OIP" },
        ],
      },
      {
        text: "OIPs",
        collapsed: false,
        items: [
          { text: "OIP-1: Purpose and Guidelines", link: "/proposals/oip-1" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/duckailabs/protocol" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 OpenPond",
    },
  },

  // Markdown config
  markdown: {
    lineNumbers: true,
    toc: { level: [2, 3] },
  },

  // Build config
  cacheDir: ".vitepress/cache",

  // Base URL - update this if serving from a sub-path
  base: "/",

  // Head tags
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  vite: {
    ssr: {
      noExternal: ["vue"],
    },
  },
});
