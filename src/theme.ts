import type { Theme } from 'theme-ui';

export const theme: Theme = {
  config: {
    initialColorModeName: 'light',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#212529',
    background: '#fdf2e4',
    primary: '#ffb86c',
    modes: {
      dark: {
        text: '#fdf2e4',
        background: '#212529',
        primary: 'black',
      },
    },
  },
};
