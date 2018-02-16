import { configure } from '@storybook/react'
import '@storybook/addon-console'

function loadStories() {
  require('../stories/index.js')
  // You can require as many stories as you need.
}

import { setConsoleOptions } from '@storybook/addon-console'

configure(loadStories, module)
