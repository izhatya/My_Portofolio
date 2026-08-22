import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://izhatya.my.id',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [preact(), icon()],
});
