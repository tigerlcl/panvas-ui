import React from 'react';
import { Box, Flex, Button, Heading, useColorMode, Image, Stack, Text, useTheme } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const MotionButton = motion(Button);

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box
      bgGradient={theme.gradients.nav[colorMode]}
      px={7}
      py={5}
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
              height="50px"
            />
            <Text 
              lineHeight="50px" 
              ml={2}
              fontSize="3xl"
              bgGradient={'linear(to-t, #F31C1C, #FA8AAE)'}
              bgClip="text"
            >Panvas</Text>
          </Stack>
        </Heading>
        <Flex gap={4}>
          <MotionButton
            as={RouterLink}
            to="/browse"
            variant="ghost"
            _hover={{ bg: 'whiteAlpha.200' }}
            _hover={{ bg: 'whiteAlpha.200' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Papers
          </MotionButton>
          <MotionButton
            as={RouterLink}
            to="/community"
            variant="ghost"
            _hover={{ bg: 'whiteAlpha.200' }}
            _hover={{ bg: 'whiteAlpha.200' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Community
          </MotionButton>
          <MotionButton
            as={RouterLink}
            to="/signin"
            variant="gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </MotionButton>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar; 