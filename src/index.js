import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ChakraProvider,
  extendTheme,
  ColorModeScript,
} from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      primary: '#f6416c',
      secondary: '#ff8177',
      tertiary: '#2d3436',
      accent: '#fff6b7',
      neutral: '#eaeaea',
    },
    gradients: {
      primary: 'linear(115deg, #fff6b7, #f6416c)',
      secondary: 'linear(to-r, #f6416c, #ff8177)',
      accent: 'linear(to-r, #fff6b7, #ff8177)',
      dark: 'linear(115deg, #2d3436, #f6416c)',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? 'gray.50' : 'gray.900',
        color: props.colorMode === 'light' ? 'gray.800' : 'gray.200',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          transform: 'translateY(-2px)',
          shadow: 'lg',
        },
        _active: {
          transform: 'translateY(0)',
        },
        transition: 'all 0.2s',
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
); 