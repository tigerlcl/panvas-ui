import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  Button, 
  Heading, 
  useColorMode, 
  Image, 
  Stack, 
  useTheme, 
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import SignIn from '../pages/SignIn';

const MotionButton = motion(Button);

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [serviceIsOpen, setServiceIsOpen] = useState(false);
  const [resourceIsOpen, setResourceIsOpen] = useState(false);

  const menuButtonStyles = {
    variant: "ghost",
    fontSize: "xl",
    fontWeight: "medium",
    _hover: {
      bg: 'whiteAlpha.200',
    },
    _focus: {
      boxShadow: 'none',
      bg: 'whiteAlpha.200'
    },
    _active: {
      bg: 'whiteAlpha.200'
    },
  };

  return (
    <>
      <Box
        bgGradient={theme.gradients.nav[colorMode]}
        px={5}
        py={3}
        position="sticky"
        top={0}
        zIndex={1000}
      >
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
          <HStack as={RouterLink} to="/" spacing={3}>
            <Box 
              bg={colorMode === 'dark' ? 'gray.800' : 'transparent'}
              borderRadius="md"
              p={2}
              display="flex"
              alignItems="center"
            >
              <Image 
                src="/panvas-logo.svg"
                alt="Panvas"
                height="40px"
                width="40px"
              />
            </Box>
            <Heading
              fontSize="2xl"
              color={theme.semanticTokens.text[colorMode]}
              fontWeight="bold"
            >
              Panvas
            </Heading>
          </HStack>
          
          {/* Navigation Section */}
          <HStack spacing={8} flex={1} justify="center">
            {/* About Us - Direct Link */}
            <Button
              as={RouterLink}
              to="/team"
              {...menuButtonStyles}
            >
              About Us
            </Button>

            {/* Service */}
            <Box 
              onMouseEnter={() => setServiceIsOpen(true)}
              onMouseLeave={() => setServiceIsOpen(false)}
            >
              <Menu isOpen={serviceIsOpen}>
                <MenuButton
                  as={Button}
                  rightIcon={serviceIsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  {...menuButtonStyles}
                >
                  Service
                </MenuButton>
                <MenuList
                  py={2}
                  borderRadius="md"
                  shadow="lg"
                >
                  <MenuItem as={RouterLink} to="/community">
                    Forum Discussion
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/browse">
                    Preprint Hub
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/help-wanted">
                    Help Wanted Zone
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/carnival">
                    Carnival
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>

            {/* Resource */}
            <Box 
              onMouseEnter={() => setResourceIsOpen(true)}
              onMouseLeave={() => setResourceIsOpen(false)}
            >
              <Menu isOpen={resourceIsOpen}>
                <MenuButton
                  as={Button}
                  rightIcon={resourceIsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  {...menuButtonStyles}
                >
                  Resource
                </MenuButton>
                <MenuList
                  py={2}
                  borderRadius="md"
                  shadow="lg"
                >
                  <MenuItem as={RouterLink} to="/paperpoint">
                    PaperPoint
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/blogs">
                    Blogs
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/faqs">
                    FAQs
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </HStack>

          {/* Right Section */}
          <HStack spacing={4}>
            <MotionButton
              onClick={onOpen}
              color={'white'}
              bgGradient={theme.gradients.button[colorMode]}
              _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
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
              {...menuButtonStyles}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </MotionButton>
          </HStack>
        </Flex>
      </Box>
      <SignIn isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Navbar; 