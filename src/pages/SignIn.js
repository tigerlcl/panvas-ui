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
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff, FiGithub, FiMail } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const MotionBox = motion(Box);

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
        <DrawerCloseButton color="text.default" />
        <DrawerHeader />
        <DrawerBody>
          <Container maxW="container.sm" py={8}>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              boxShadow={theme.customShadow[colorMode]}
              borderRadius="lg"
              bg={colorMode === 'light' ? 'white' : 'gray.800'}
            >
              <VStack spacing={8} align="stretch">
                <VStack spacing={2} align="center">
                  <Heading size="xl" color="text.heading">
                    Welcome On Board
                  </Heading>
                  <Text color="text.default">
                    Sign in to kickstart your research journey
                  </Text>
                </VStack>

                <Box
                  as={motion.div}
                  p={8}
                  bg="bg.secondary"
                  borderRadius="xl"
                  shadow="xl"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <VStack spacing={4}>
                    <FormControl>
                      <FormLabel color="text.default">Email</FormLabel>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        size="lg"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel color="text.default">Password</FormLabel>
                      <InputGroup size="lg">
                        <Input
                          type={show ? 'text' : 'password'}
                          placeholder="Enter your password"
                        />
                        <InputRightElement>
                          <IconButton
                            variant="ghost"
                            onClick={handleClick}
                            icon={show ? <FiEyeOff /> : <FiEye />}
                            color="text.default"
                          />
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>

                    <Button 
                      size="lg"
                      width="full"
                      as={motion.button}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      bgGradient={theme.gradients.button[colorMode]}
                      _hover={{ bgGradient: theme.gradients.button[colorMode]}}
                      color="white"
                    >
                      Sign In
                    </Button>

                    <HStack justify="space-between" width="full">
                      <Button
                        variant="link"
                        colorScheme="blue"
                        size="sm"
                        color="button.primary"
                      >
                        Forgot Password?
                      </Button>
                      <Button
                        variant="link"
                        colorScheme="blue"
                        size="sm"
                        color="button.primary"
                      >
                        Create Account
                      </Button>
                    </HStack>
                  </VStack>

                  <VStack mt={8} spacing={4}>
                    <Divider />
                    <Text color="text.default">Or continue with</Text>

                    <HStack spacing={4} width="full">
                      <Button
                        variant="outline"
                        leftIcon={<FcGoogle />}
                        width="full"
                        as={motion.button}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        borderColor="border.secondary"
                        color="text.default"
                      >
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        leftIcon={<FiGithub />}
                        width="full"
                        as={motion.button}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        borderColor="border.secondary"
                        color="text.default"
                      >
                        GitHub
                      </Button>
                    </HStack>

                    <Button
                      variant="outline"
                      leftIcon={<FiMail />}
                      width="full"
                      as={motion.button}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      borderColor="border.secondary"
                      color="text.default"
                    >
                      Sign in with Email
                    </Button>
                  </VStack>
                </Box>
              </VStack>
            </MotionBox>
          </Container>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default SignIn; 