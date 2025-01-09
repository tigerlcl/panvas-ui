import React from 'react';
import { Box, Container, Stack, Link, IconButton, Image, useColorMode, useTheme, HStack } from '@chakra-ui/react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { LiaCopyright } from "react-icons/lia";

function Footer() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box
      as="footer"
      bgGradient={theme.gradients.nav[colorMode]}
      px={{ base: 4, md: 7 }}
      py={{ base: 3, md: 5 }}
    >
      <Container maxW="container.xl" py={{ base: 2, md: 4 }}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 3, md: 4 }}
          justify="space-between"
          align="center"
        >
          <Stack direction="row" spacing={{ base: 2, md: 4 }} align="center">
            {/* <Link href="https://www.hkust-gz.edu.cn" isExternal>
              <Image 
                src="/UST-GZ.svg"
                alt="HKUST(GZ)" 
                height={{ base: "30px", md: "40px" }}
                _dark={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link> */}
            <Box 
              fontSize={{ base: "sm", md: "lg" }}
              fontWeight="bold"
              color={theme.semanticTokens.text[colorMode]}
              display="flex"
              alignItems="center"
            >
              <LiaCopyright size={{ base: 16, md: 20 }} /> 
              <Box as="span" ml={1}>{new Date().getFullYear()} Panvas. All rights reserved.</Box>
            </Box>
          </Stack>
          <Stack direction="row" spacing={{ base: 1, md: 2 }} align="center">
            <Box 
              fontSize={{ base: "sm", md: "lg" }} 
              color={theme.semanticTokens.text[colorMode]}
              mr={{ base: 2, md: 3 }}
            >
              Follow us on:
            </Box>
            <HStack>
              <IconButton
                as={Link}
                href="https://github.com/HKUSTDial"
                aria-label="GitHub"
                icon={<FiGithub />}
                size={{ base: "sm", md: "lg" }}
                variant="ghost"
                fontSize={{ base: "18px", md: "22px" }}
              />
              <IconButton
                as={Link}
                href="https://twitter.com"
                aria-label="Twitter"
                icon={<FiTwitter />}
                size={{ base: "sm", md: "lg" }}
                variant="ghost"
                fontSize={{ base: "18px", md: "22px" }}
              />
              <IconButton
                as={Link}
                href="https://linkedin.com"
                aria-label="LinkedIn"
                icon={<FiLinkedin />}
                size={{ base: "sm", md: "lg" }}
                variant="ghost"
                fontSize={{ base: "18px", md: "22px" }}
              />
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer; 