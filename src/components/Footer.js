import React from 'react';
import { Box, Container, Stack, Text, Link, IconButton } from '@chakra-ui/react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <Box
      as="footer"
      bg="gray.50"
      borderTop="1px"
      borderColor="gray.200"
      _dark={{
        bg: 'gray.900',
        borderColor: 'gray.700'
      }}
    >
      <Container maxW="container.xl" py={4}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify="space-between"
          align="center"
        >
          <Text fontSize="md">
            © {new Date().getFullYear()} Panvas. All rights reserved.
          </Text>
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