import { extendTheme } from '@chakra-ui/react';

// Color mode config
const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

// Brand colors - all being used in gradients and semantic tokens
const colors = {
  brand: {
    primary: '#f6416c',
    secondary: '#ff8177',
    tertiary: '#2d3436',
    accent: '#fff6b7',
  },
};

// Semantic tokens - cleaned up to only used tokens
const semanticTokens = {
  colors: {
    text: {
      default: { _light: 'gray.600', _dark: 'gray.200' },
      heading: { _light: 'black', _dark: 'white' },
      inverse: { _light: 'white', _dark: 'gray.800' },
    },
    bg: {
      secondary: { _light: 'white', _dark: 'brand.tertiary' },
    },
    button: {
      primary: { _light: 'blue.500', _dark: 'blue.200' },
      text: { _light: 'white', _dark: 'gray.800' },
    },
    border: {
      secondary: { _light: 'gray.300', _dark: 'gray.600' },
    },
  },
};

// Custom gradients - cleaned up to only used ones
const gradients = {
  nav: {
    light: 'linear(to-r, #fdfcfb, #e2d1c3)',
    dark: 'linear(to-r, #12063b, #09555c)',
  },
  button: {
    light: 'linear(to-r, #f6416c, #ff8177)',
    dark: 'linear(to-r, #f6416c, #2d3436)',
  },
  tag: {
    light: 'linear(to-r, #f6416c, #ff8177)',
    dark: 'linear(to-r, #f6416c, #2d3436)',
  },
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

// Component-specific theme customizations
const components = {
  Button: {
    variants: {
      gradient: (props) => ({
        bgGradient: props.colorMode === 'light' ? gradients.button.light : gradients.button.dark,
        color: 'white',
        _hover: {
          transform: 'translateY(-2px)',
        },
      }),
    },
  },
  Card: {
    baseStyle: (props) => ({
      container: {
        bg: props.colorMode === 'light' ? 'white' : 'brand.tertiary',
      },
    }),
  },
};

const theme = extendTheme({
  config,
  colors,
  semanticTokens,
  styles,
  components,
  gradients,
});

export default theme; 