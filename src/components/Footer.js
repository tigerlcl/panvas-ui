import React from 'react';
import { Box, Container, Stack, Link, IconButton, Image, useColorMode, useTheme } from '@chakra-ui/react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { LiaCopyright } from "react-icons/lia";


function Footer() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box
      as="footer"
      bgGradient={theme.gradients.nav[colorMode]}
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
            <Box fontSize="lg" 
              fontWeight="bold"
              color={theme.semanticTokens.text[colorMode]}
              display="flex"
              alignItems="center">
              <LiaCopyright /> <Box as="span" ml={1}>{new Date().getFullYear()} Panvas. All rights reserved.</Box>
            </Box>
          </Stack>
          <Stack direction="row" spacing={3} align="center">
            <Box fontSize="lg" color={theme.semanticTokens.text[colorMode]}>
              Follow us on:</Box>
            <IconButton
              as={Link}
              href="https://github.com/HKUSTDial"
              aria-label="GitHub"
              icon={<FiGithub />}
              size="lg"
              variant="ghost"
            />
            <IconButton
              as={Link}
              href="https://twitter.com"
              aria-label="Twitter"
              icon={<FiTwitter />}
              size="lg"
              variant="ghost"
            />
            <IconButton
              as={Link}
              href="https://linkedin.com"
              aria-label="LinkedIn"
              icon={<FiLinkedin />}
              size="lg"
              variant="ghost"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer; 