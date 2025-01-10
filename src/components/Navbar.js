import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  Button, 
  Heading, 
  useColorMode, 
  Image, 
  useTheme, 
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
  Avatar,
  Icon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { 
  FiLayout, 
  FiArchive, 
  FiUsers, 
  FiGift, 
  FiBookOpen,
  FiHelpCircle,
  FiAward,
} from 'react-icons/fi';
import SignIn from './SignIn';

const MotionButton = motion(Button);

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const { isOpen: isSignInOpen, onOpen: onSignInOpen, onClose: onSignInClose } = useDisclosure();
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
        px={7}
        py={5}
        position="sticky"
        top={0}
        zIndex={1000}
      >
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
          <HStack>
            <Box 
              borderRadius="md"
              display="flex"
              alignItems="center"
              size="lg"
            >
              <Image 
                src="/panvas-logo.svg"
                alt="Panvas"
                height="50px"
                width="50px"
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
            {/* Home Button */}
            <Button
              as={RouterLink}
              to="/"
              {...menuButtonStyles}
            >
              Home
            </Button>

            {/* Solutions */}
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
                  Solutions
                </MenuButton>
                <MenuList
                  py={2}
                  borderRadius="md"
                  shadow="lg"
                >
                  <MenuItem as={RouterLink} to="/square">
                    <HStack>
                      <Icon as={FiLayout} />
                      <Text>Square</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/preview">
                    <HStack>
                      <Icon as={FiArchive} />
                      <Text>Preview Space</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/consulting">
                    <HStack>
                      <Icon as={FiUsers} />
                      <Text>Consulting Room</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/carnival">
                    <HStack>
                      <Icon as={FiGift} />
                      <Text>Carnival</Text>
                    </HStack>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>

            {/* Resources */}
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
                  Resources
                </MenuButton>
                <MenuList
                  py={2}
                  borderRadius="md"
                  shadow="lg"
                >
                  <MenuItem as={RouterLink} to="/paperpoint">
                    <HStack>
                      <Icon as={FiAward} />
                      <Text>PaperPoint</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/blogs">
                    <HStack>
                      <Icon as={FiBookOpen} />
                      <Text>Blogs</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/faqs">
                    <HStack>
                      <Icon as={FiHelpCircle} />
                      <Text>FAQs</Text>
                    </HStack>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>

            {/* About Us - Moved to last */}
            <Button
              as={RouterLink}
              to="/about-us"
              {...menuButtonStyles}
            >
              About Us
            </Button>
          </HStack>

          {/* Right Section */}
          <HStack spacing={4}>
            <MotionButton
              as={RouterLink}
              to="/homepage"
              variant="ghost"
              _hover={{ bg: colorMode === 'light' ? 'whiteAlpha.300' : 'whiteAlpha.200' }}
              height="40px"
              px={2}
            >
              <HStack spacing={2}>
                <Avatar 
                  size="sm" 
                  src="https://i.pravatar.cc/300?img=23" 
                  name="Sequoia Joyce"
                />
                <Box>
                  <Text 
                    fontSize="sm" 
                    fontWeight="medium"
                    color={theme.semanticTokens.text[colorMode]}
                  >
                    Sequoia Joyce
                  </Text>
                  <Text 
                    fontSize="xs" 
                    color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                  >
                    Demo User
                  </Text>
                </Box>
              </HStack>
            </MotionButton>
            <MotionButton
              onClick={onSignInOpen}
              color={'white'}
              bgGradient={theme.gradients.button[colorMode]}
              _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              shadow="lg"
              size="md"
            >
              Sign In
            </MotionButton>
            <MotionButton 
              onClick={toggleColorMode}
              variant="ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              {...menuButtonStyles}
              size="md"
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </MotionButton>
          </HStack>
        </Flex>
      </Box>
      <SignIn isOpen={isSignInOpen} onClose={onSignInClose} />
    </>
  );
}

export default Navbar; 