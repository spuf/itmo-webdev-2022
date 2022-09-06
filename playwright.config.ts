import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  outputDir: '/tmp',
  use: { viewport: { width: 1280, height: 720 } },
}

export default config
