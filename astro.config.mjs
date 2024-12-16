import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cv.sbstn.sh',
  integrations: [tailwind({ applyBaseStyles: false })]
});
