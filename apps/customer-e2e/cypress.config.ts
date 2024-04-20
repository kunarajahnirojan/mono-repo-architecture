import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run customer:serve',
        production: 'nx run customer:preview',
      },
      ciWebServerCommand: 'nx run customer:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
