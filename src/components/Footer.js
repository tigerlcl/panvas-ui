import React from 'react';
import { Box, Container, Stack, Text, Link, IconButton, Image, useColorMode } from '@chakra-ui/react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

function Footer() {
  const { colorMode } = useColorMode();
  const bgGradient = colorMode === 'light'
    ? 'linear(to-r, #fdfcfb, #e2d1c3)'
    : 'linear(to-r, #12063b, #09555c)';

  return (
    <Box
      as="footer"
      bgGradient={bgGradient}
      px={7}
      py={5}
    >
      <Container maxW="container.xl" py={4}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="space-between"
          align="center"
        >
          <Stack direction="row" spacing={4} align="center">
            {/* <Link href="https://www.hkust-gz.edu.cn" isExternal>
              <Image 
                src="/UST-GZ.svg"
                alt="HKUST(GZ)" 
                height="40px"
                _dark={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link> */}
            <Text fontSize="md">
              © {new Date().getFullYear()} Panvas. All rights reserved.
            </Text>
          </Stack>
          <Stack direction="row" spacing={3} align="center">
            <Text fontSize="md">Follow us on:</Text>
            <IconButton
              as={Link}
              href="https://github.com/HKUSTDial"
              aria-label="GitHub"
              icon={<FiGithub />}
              size="md"
              variant="ghost"
            />
            <IconButton
              as={Link}
              href="https://twitter.com"
              aria-label="Twitter"
              icon={<FiTwitter />}
              size="md"
              variant="ghost"
            />
            <IconButton
              as={Link}
              href="https://linkedin.com"
              aria-label="LinkedIn"
              icon={<FiLinkedin />}
              size="md"
              variant="ghost"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer; 