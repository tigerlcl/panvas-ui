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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Link as ChakraLink,
  useColorMode,
  useTheme
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBook, FiMessageCircle, FiArchive, FiTrendingUp, FiGift } from 'react-icons/fi';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const topics = [
  { id: 1, title: "Machine Learning", count: 120 },
  { id: 2, title: "Data Science", count: 95 },
  { id: 3, title: "Artificial Intelligence", count: 87 },
  { id: 4, title: "Computer Vision", count: 63 },
  { id: 5, title: "Natural Language Processing", count: 58 },
];

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
      variants={container}
      color="text.default"
    >
      {/* Hero Section with Gradient */}
      <MotionBox
        py={20}
        mb={10}
        mx={-4}
        variants={item}
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          bgColor: theme.semanticTokens.colors.bg.secondary[colorMode],
          pointerEvents: 'none',
        }}
      >
        <Container maxW="container.xl" position="relative">
          <VStack spacing={8} align="center" textAlign="center">
            <Heading 
              size="2xl" 
              color="text.heading"
              bgGradient={theme.gradients.button[colorMode]}
              bgClip="text"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
            >
              One-Stop Academic Hub
            </Heading>
            <Text 
              fontSize={{ base: "xl", md: "2xl" }} 
              color="text.default"
              maxW="2xl"
              textShadow="0 2px 4px rgba(0,0,0,0.1)"
            >
              Discover, discuss, and collaborate on academic papers in a
              vibrant research community! <br/>
              Make Academy Great Again!
            </Text>
            <Button
              as={motion.button}
              size="lg"
              variant="gradient"
              px={8}
              py={6}
              fontSize="xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              shadow="lg"
              transition="all 0.2s"
            >
              Get Started for Free
            </Button>
          </VStack>
        </Container>
      </MotionBox>

      <Container maxW="container.xl">
        {/* Popular Topics Section with Gradient Cards */}
        <MotionBox mb={10} variants={item}>
          <Heading 
            size="lg" 
            mb={6} 
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
          >
            Popular Topics
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {topics.map((topic) => (
              <MotionCard
                key={topic.id}
                bg="bg.secondary"
                variants={item}
                whileHover={{ scale: 1.02 }}
                cursor="pointer"
                overflow="hidden"
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  bgGradient: 'linear(to-br, whiteAlpha.50, transparent)',
                  pointerEvents: 'none',
                }}
                borderWidth="1px"
                borderColor="border.secondary"
                shadow="lg"
              >
                <CardHeader 
                  bgGradient={theme.gradients.button[colorMode]}
                >
                  <Heading size="md" color="text.inverse">{topic.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Text color="text.default">{topic.count} papers</Text>
                </CardBody>
                <CardFooter>
                  <Button
                    as={Link}
                    to={`/topic/${topic.id}`}
                    variant="ghost"
                    _hover={{
                      bgGradient: theme.gradients.button[colorMode],
                      color: "text.inverse",
                    }}
                  >
                    View Papers
                  </Button>
                </CardFooter>
              </MotionCard>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Recent Activities Section */}
        <MotionBox mb={10} variants={item}>
          <Heading             
            size="lg" 
            mb={6} 
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
          >
            Recent Activities
          </Heading>
          <MotionCard bg="bg.secondary">
            <CardBody>
              <VStack
                spacing={4}
                align="stretch"
                maxH="300px"
                overflowY="auto"
              >
                {recentActivities.map((activity, index) => (
                  <Flex
                    key={activity.id}
                    align="center"
                    gap={4}
                    as={motion.div}
                    variants={item}
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
                        color="brand.primary"
                      >
                        "{activity.paper}"
                      </ChakraLink>
                    </Text>
                  </Flex>
                ))}
              </VStack>
            </CardBody>
          </MotionCard>
        </MotionBox>

        {/* Features Section with Gradient Icons */}
        <MotionBox mb={10} variants={item}>
          <Heading 
            size="lg" 
            mb={6} 
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
          >
            Why Choose Panvas?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {features.map((feature, index) => (
              <Box key={index}>
                <Flex align="center" mb={2}>
                  <Icon as={feature.icon} boxSize={6} mr={2} color="brand.primary" />
                  <Heading size="md" fontWeight="semibold" color="text.heading">{feature.title}</Heading>
                </Flex>
                <Text color="text.default">{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default Home; 