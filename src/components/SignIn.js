import React from 'react';
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  IconButton,
  Divider,
  HStack,
  useColorMode,
  useTheme,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react';
import { FiEye, FiEyeOff, FiGithub, FiMail } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';


function SignIn({ isOpen, onClose }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="md"
    >
      <DrawerOverlay backgroundColor="rgba(0, 0, 0, 0.4)" />
      <DrawerContent bg={colorMode === 'light' ? 'white' : 'gray.800'}>
        <DrawerCloseButton color={theme.semanticTokens.text[colorMode]} />
        <DrawerHeader />
        <DrawerBody>
          <Container maxW="container.sm" py={10}>
            <VStack spacing={10} align="stretch">
              <VStack spacing={2} align="center">
                <Heading size="xl" bgGradient={theme.gradients.button[colorMode]} bgClip="text">
                  Welcome On Board
                </Heading>
                <Text color={theme.semanticTokens.text[colorMode]}>
                  Sign in to kickstart your research journey
                </Text>
              </VStack>

              <Box
                p={8}
                bg={colorMode === 'light' ? 'white' : 'gray.700'}
                borderRadius="xl"
                boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "xl",
                  pointerEvents: "none"
                }}
              >
                <VStack spacing={4}>
                  <FormControl>
                    <FormLabel color={theme.semanticTokens.text[colorMode]}>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      size="lg"
                      bg={colorMode === 'light' ? 'white' : 'gray.700'}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color={theme.semanticTokens.text[colorMode]}>Password</FormLabel>
                    <InputGroup size="lg">
                      <Input
                        type={show ? 'text' : 'password'}
                        placeholder="Enter your password"
                        bg={colorMode === 'light' ? 'white' : 'gray.700'}
                      />
                      <InputRightElement>
                        <IconButton
                          variant="ghost"
                          onClick={handleClick}
                          icon={show ? <FiEyeOff /> : <FiEye />}
                          color={theme.semanticTokens.text[colorMode]}
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>

                  <Button 
                    size="lg"
                    width="full"
                    bgGradient={theme.gradients.button[colorMode]}
                    _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
                    color="white"
                  >
                    Sign In
                  </Button>

                  <HStack justify="space-between" width="full">
                    <Button
                      variant="link"
                      size="sm"
                      color={theme.semanticTokens.button[colorMode]}
                    >
                      Forgot Password?
                    </Button>
                    <Button
                      variant="link"
                      size="sm"
                      color={theme.semanticTokens.button[colorMode]}
                    >
                      Create Account
                    </Button>
                  </HStack>

                  <VStack spacing={4} pt={6} width="full">
                    <Divider />
                    <Text color={theme.semanticTokens.text[colorMode]}>Or continue with</Text>

                    <HStack spacing={4} width="full">
                      <Button
                        variant="outline"
                        leftIcon={<FcGoogle />}
                        width="full"
                        color={theme.semanticTokens.text[colorMode]}
                        borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
                        _hover={{
                          bg: colorMode === 'light' ? 'gray.50' : 'gray.600'
                        }}
                      >
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        leftIcon={<FiGithub />}
                        width="full"
                        color={theme.semanticTokens.text[colorMode]}
                        borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
                        _hover={{
                          bg: colorMode === 'light' ? 'gray.50' : 'gray.600'
                        }}
                      >
                        GitHub
                      </Button>
                    </HStack>

                    <Button
                      variant="outline"
                      leftIcon={<FiMail />}
                      width="full"
                      color={theme.semanticTokens.text[colorMode]}
                      borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
                      _hover={{
                        bg: colorMode === 'light' ? 'gray.50' : 'gray.600'
                      }}
                    >
                      Sign in with Email
                    </Button>
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </Container>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default SignIn; 