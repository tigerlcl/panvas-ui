import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  Button,
  Flex,
  Link as ChakraLink,
  useColorMode,
  useTheme
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiBook, FiMessageCircle, FiArchive, FiTrendingUp, FiGift } from 'react-icons/fi';


const MotionBox = motion(Box);


const recentActivities = [
  { id: 1, user: "Alice", action: "commented on", paper: "Neural Networks in Healthcare" },
  { id: 2, user: "Bob", action: "uploaded", paper: "Reinforcement Learning: A New Approach" },
  { id: 3, user: "Charlie", action: "reviewed", paper: "Quantum Computing: Current State and Future" },
  { id: 4, user: "David", action: "liked", paper: "Ethical Implications of AI" },
  { id: 5, user: "Eve", action: "shared", paper: "Blockchain in Supply Chain Management" },
];

const features = [
  {
    icon: FiMessageCircle,
    title: 'Community Discussion',
    description: 'Engage with papers through reactions, comments, and anonymous discussions. Build meaningful connections with fellow researchers.',
  },
  {
    icon: FiBook,
    title: 'Preprint Hub',
    description: 'Share your paper drafts for community review. Discover trending papers and stay updated with hot topics in your field.',
  },
  {
    icon: FiArchive,
    title: 'Help Wanted Zone',
    description: 'Request paid review services, post questionnaires, or recruit experiment subjects. Earn PanCoins for contributing.',
  },
  {
    icon: FiGift,
    title: 'Carnival',
    description: 'Participate in exciting mini-games like paper decision betting. Use PanCoins to join and win more rewards.',
  }
];

function Home() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box
      as={motion.div}
      initial="hidden"
      animate="show"
    >
      {/* Hero Section with Gradient */}
      <MotionBox
        py={10}
        mx={-4}
        mb={10}
      >
        <Container maxW="container.xl" position="relative">
          <VStack spacing={5} align="center" textAlign="center">
            <Heading
              bgGradient={theme.gradients.button[colorMode]}
              bgClip="text"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
            >
              One-Stop Academic Hub
            </Heading>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              color={theme.semanticTokens.text[colorMode]}
              maxW="2xl"
            >
              Research, Collaborate, Win-Win! <br />
              Unleash Ideas, Connect Minds, and Earn Rewards! <br />
              Make Academy Great Again!
            </Text>
            <Button
              as={motion.button}
              size="lg"
              variant="ghost"
              px={8}
              py={6}
              fontSize="xl"
              color={'white'}
              bgGradient={theme.gradients.button[colorMode]}
              _hover={{ bgGradient: theme.gradients.button[colorMode] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              shadow="lg"
            >
              Get Started for Free
            </Button>
          </VStack>
        </Container>
      </MotionBox>

      <Container maxW="container.xl">
        {/* Features Section */}
        <MotionBox mb={10}>
          <Heading
            size="lg"
            mb={6}
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
          >
            Why Choose Panvas?
          </Heading>
          <SimpleGrid
            px={3}
            py={5}
            columns={{ base: 1, md: 2 }}
            spacing={8}
            boxShadow={theme.customShadow[colorMode]}
            borderRadius="lg"
          >
            {features.map((feature, index) => (
              <Box key={index}>
                <Flex align="center" mb={2}>
                  <Icon as={feature.icon} boxSize={6} mr={2} />
                  <Heading size="md" fontWeight="semibold">{feature.title}</Heading>
                </Flex>
                <Text color="text.default">{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Recent Activities Section */}
        <MotionBox mb={10}>
          <Heading
            size="lg"
            mb={6}
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
          >
            Recent Activities
          </Heading>
          <VStack
            px={3}
            py={5}
            spacing={6}
            align="stretch"
            maxH="300px"
            boxShadow={theme.customShadow[colorMode]}
            borderRadius="lg"
          >
            {recentActivities.map((activity, index) => (
              <Flex
                key={activity.id}
                align="center"
                gap={4}
                as={motion.div}
                custom={index}
                animate="show"
              >
                <Icon
                  as={FiTrendingUp}
                  boxSize={5}
                  color="brand.primary"
                />
                <Text>
                  <Text as="span" fontWeight="semibold">
                    {activity.user}
                  </Text>
                  {' '}
                  {activity.action}{' '}
                  <ChakraLink
                    color={theme.semanticTokens.button[colorMode]}
                  >
                    "{activity.paper}"
                  </ChakraLink>
                </Text>
              </Flex>
            ))}
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default Home; 