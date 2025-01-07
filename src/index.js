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
    useSystemColorMode: true,
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