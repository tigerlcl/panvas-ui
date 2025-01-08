import React from 'react';
import { Box, Flex, Button, Heading, useColorMode, Image, Stack, useTheme } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const MotionButton = motion(Button);

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box
      bgGradient={theme.gradients.nav[colorMode]}
      px={5}
      py={3}
      position="sticky"
    >
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
        <Heading
          as={RouterLink}
          to="/"
          size="lg"
        >
          <Stack direction="row" align="center" display="flex" alignItems="center">
            <Image 
              src="/panvas-logo.svg"
              alt="Panvas"
              height="75px"
              borderRadius="md"
            />
            <Box 
              lineHeight="75px" 
              ml={2}
              fontSize="3xl"
              color={theme.semanticTokens.text[colorMode]}
            >Panvas
            </Box>
          </Stack>
        </Heading>
        <Flex gap={4}>
          <MotionButton
            as={RouterLink}
            to="/browse"
            variant="ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Papers
          </MotionButton>
          <MotionButton
            as={RouterLink}
            to="/community"
            variant="ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Community
          </MotionButton>
          <MotionButton
            as={RouterLink}
            to="/signin"
            color={'white'}
            bgGradient={theme.gradients.button[colorMode]}
            _hover={{ bgGradient: theme.gradients.button[colorMode]}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            shadow="lg"
          >
            Sign In
          </MotionButton>
          <MotionButton 
            onClick={toggleColorMode}
            variant="ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </MotionButton>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar; 