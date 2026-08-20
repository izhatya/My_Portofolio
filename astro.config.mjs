import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://izhatya.github.io',
  base: '/My_Portofolio',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [preact(), icon()],
});
