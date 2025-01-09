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
  VStack,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  Avatar,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from '@chakra-ui/icons';
import SignIn from '../pages/SignIn';

const MotionButton = motion(Button);

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const { isOpen: isSignInOpen, onOpen: onSignInOpen, onClose: onSignInClose } = useDisclosure();
  const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();
  const [serviceIsOpen, setServiceIsOpen] = useState(false);
  const [resourceIsOpen, setResourceIsOpen] = useState(false);
  
  const isMobile = useBreakpointValue({ base: true, md: false });

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

  const MobileNavItem = ({ to, children, onClose }) => (
    <Button
      as={RouterLink}
      to={to}
      variant="ghost"
      width="full"
      justifyContent="flex-start"
      fontSize="md"
      py={2}
      onClick={onClose}
      height="auto"
      _hover={{
        bg: colorMode === 'light' ? 'gray.100' : 'gray.700'
      }}
    >
      {children}
    </Button>
  );

  const MobileNav = () => (
    <Drawer
      isOpen={isMenuOpen}
      placement="right"
      onClose={onMenuClose}
      size="xs"
    >
      <DrawerOverlay />
      <DrawerContent 
        bg={colorMode === 'light' ? 'white' : 'gray.800'}
        maxW="250px"
      >
        <DrawerCloseButton 
          color={theme.semanticTokens.text[colorMode]} 
          size="md"
          mt={2}
        />
        <DrawerHeader 
          borderBottomWidth="1px"
          fontSize="lg"
          py={4}
        >
          Menu
        </DrawerHeader>
        <DrawerBody>
          <VStack spacing={4} align="stretch" pt={4}>
            <MobileNavItem to="/team" onClose={onMenuClose}>About Us</MobileNavItem>
            
            <Box py={2}>
              <Text 
                fontWeight="bold" 
                mb={2} 
                fontSize="md"
                color={theme.semanticTokens.text[colorMode]}
              >
                Solutions
              </Text>
              <VStack spacing={2} pl={4}>
                <MobileNavItem to="/community" onClose={onMenuClose}>Forum Discussion</MobileNavItem>
                <MobileNavItem to="/browse" onClose={onMenuClose}>Preprint Hub</MobileNavItem>
                <MobileNavItem to="/help-wanted" onClose={onMenuClose}>Help Wanted Zone</MobileNavItem>
                <MobileNavItem to="/carnival" onClose={onMenuClose}>Carnival</MobileNavItem>
              </VStack>
            </Box>

            <Box py={2}>
              <Text 
                fontWeight="bold" 
                mb={2} 
                fontSize="md"
                color={theme.semanticTokens.text[colorMode]}
              >
                Resources
              </Text>
              <VStack spacing={2} pl={4}>
                <MobileNavItem to="/paperpoint" onClose={onMenuClose}>PaperPoint</MobileNavItem>
                <MobileNavItem to="/blogs" onClose={onMenuClose}>Blogs</MobileNavItem>
                <MobileNavItem to="/faqs" onClose={onMenuClose}>FAQs</MobileNavItem>
              </VStack>
            </Box>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

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
          <HStack as={RouterLink} to="/" spacing={3}>
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
              fontSize={{ base: "xl", md: "2xl" }}
              color={theme.semanticTokens.text[colorMode]}
              fontWeight="bold"
            >
              Panvas
            </Heading>
          </HStack>
          
          {/* Navigation Section - Desktop */}
          {!isMobile && (
            <HStack spacing={8} flex={1} justify="center">
              {/* About Us - Direct Link */}
              <Button
                as={RouterLink}
                to="/team"
                {...menuButtonStyles}
              >
                About Us
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
                    <MenuItem as={RouterLink} to="/community">Forum Discussion</MenuItem>
                    <MenuItem as={RouterLink} to="/browse">Preprint Hub</MenuItem>
                    <MenuItem as={RouterLink} to="/help-wanted">Help Wanted Zone</MenuItem>
                    <MenuItem as={RouterLink} to="/carnival">Carnival</MenuItem>
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
                    <MenuItem as={RouterLink} to="/paperpoint">PaperPoint</MenuItem>
                    <MenuItem as={RouterLink} to="/blogs">Blogs</MenuItem>
                    <MenuItem as={RouterLink} to="/faqs">FAQs</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </HStack>
          )}

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
                  src="https://i.pravatar.cc/300?img=50" 
                  name="Prof. Lee"
                />
                <Box display={{ base: 'none', md: 'block' }}>
                  <Text 
                    fontSize="sm" 
                    fontWeight="medium"
                    color={theme.semanticTokens.text[colorMode]}
                  >
                    Prof. Lee
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
              size={{ base: "sm", md: "md" }}
            >
              Sign In
            </MotionButton>
            <MotionButton 
              onClick={toggleColorMode}
              variant="ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              {...menuButtonStyles}
              size={{ base: "sm", md: "md" }}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </MotionButton>
            {isMobile && (
              <IconButton
                aria-label="Open menu"
                icon={<HamburgerIcon />}
                onClick={onMenuOpen}
                variant="ghost"
                {...menuButtonStyles}
                size={{ base: "sm", md: "md" }}
              />
            )}
          </HStack>
        </Flex>
      </Box>
      <SignIn isOpen={isSignInOpen} onClose={onSignInClose} />
      {isMobile && <MobileNav />}
    </>
  );
}

export default Navbar; 