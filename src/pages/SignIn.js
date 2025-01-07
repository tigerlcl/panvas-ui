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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff, FiGithub, FiMail } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const MotionBox = motion(Box);

function SignIn() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { colorMode } = useColorMode();
  const formBg = colorMode === 'light' ? 'white' : 'brand.tertiary';
  const headingColor = colorMode === 'light' ? 'black' : 'white';
  const textColor = colorMode === 'light' ? 'gray.600' : 'gray.200';

  return (
    <Container maxW="container.sm" py={8}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <VStack spacing={8} align="stretch">
          <VStack spacing={2} align="center">
            <Heading size="xl" color={headingColor}>
              Welcome Back
            </Heading>
            <Text color={textColor}>
              Sign in to continue to your research journey
            </Text>
          </VStack>

          <Box
            as={motion.div}
            p={8}
            bg={formBg}
            borderRadius="xl"
            shadow="xl"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  size="lg"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
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
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                colorScheme="blue"
                size="lg"
                width="full"
                as={motion.button}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                bg={colorMode === 'light' ? 'blue.500' : 'blue.200'}
                color={colorMode === 'light' ? 'white' : 'gray.800'}
              >
                Sign In
              </Button>

              <HStack justify="space-between" width="full">
                <Button
                  variant="link"
                  colorScheme="blue"
                  size="sm"
                  color={colorMode === 'light' ? 'blue.500' : 'blue.200'}
                >
                  Forgot Password?
                </Button>
                <Button
                  variant="link"
                  colorScheme="blue"
                  size="sm"
                  color={colorMode === 'light' ? 'blue.500' : 'blue.200'}
                >
                  Create Account
                </Button>
              </HStack>
            </VStack>

            <VStack mt={8} spacing={4}>
              <Divider />
              <Text color={textColor}>Or continue with</Text>

              <HStack spacing={4} width="full">
                <Button
                  variant="outline"
                  leftIcon={<FcGoogle />}
                  width="full"
                  as={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  borderColor={colorMode === 'light' ? 'gray.300' : 'gray.600'}
                  color={textColor}
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
                  borderColor={colorMode === 'light' ? 'gray.300' : 'gray.600'}
                  color={textColor}
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
                borderColor={colorMode === 'light' ? 'gray.300' : 'gray.600'}
                color={textColor}
              >
                Sign in with Email
              </Button>
            </VStack>
          </Box>
        </VStack>
      </MotionBox>
    </Container>
  );
}

export default SignIn; 