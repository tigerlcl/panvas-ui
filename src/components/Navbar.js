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
  Portal,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons';
import SignIn from '../pages/SignIn';

const MotionButton = motion(Button);

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [serviceIsOpen, setServiceIsOpen] = useState(false);
  const [resourceIsOpen, setResourceIsOpen] = useState(false);

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
          
          {/* Navigation Section */}
          <HStack spacing={8} flex={1} justify="center">
            {/* About Us - Direct Link */}
            <Button
              as={RouterLink}
              to="/team"
              variant="ghost"
              fontSize="xl"
              fontWeight="medium"
              _hover={{
                bg: 'whiteAlpha.200'
              }}
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
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                  fontSize="xl"
                  fontWeight="medium"
                  _hover={{
                    bg: 'whiteAlpha.200'
                  }}
                >
                  Service
                </MenuButton>
                <MenuList
                  py={0}
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
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                  fontSize="xl"
                  fontWeight="medium"
                  _hover={{
                    bg: 'whiteAlpha.200'
                  }}
                >
                  Resource
                </MenuButton>
                <MenuList
                  py={0}
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
          </HStack>
        </Flex>
      </Box>
      <SignIn isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Navbar; 