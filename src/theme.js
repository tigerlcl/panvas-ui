import { extendTheme } from '@chakra-ui/react';

// Color mode config
const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

// Semantic tokens - cleaned up to only used tokens
const semanticTokens = {
  text: { light: 'gray.800', dark: 'gray.200'},
  bg: { light: 'whiteAlpha.600', dark: 'whiteAlpha.900'},
  button: { light: 'blue.500', dark: 'blue.200' },
};

// Custom gradients
const gradients = {
  nav: {
    light: 'linear(to-r, #fdfcfb, #e2d1c3)',
    dark: 'linear(to-r, #2c4875, #09555c)',
  },
  button: {
    light: 'linear(to-r, #f6416c, #ff8177)',
    dark: 'linear(to-r,  #004ff9, #58b8c7)',
  },
};

// Custom shadow
const customShadow = {
  light: "0 4px 6px rgba(0, 0, 0, 0.1)", // Light mode shadow
  dark: "0 4px 6px rgba(255, 255, 255, 0.2)", // Dark mode shadow
};

// Global styles
const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
      color: props.colorMode === 'dark' ? 'white' : 'gray.800',
    },
  }),
};


const theme = extendTheme({
  config,
  customShadow,
  semanticTokens,
  styles,
  gradients,
});

export default theme; 