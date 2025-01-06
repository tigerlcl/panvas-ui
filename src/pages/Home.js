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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBook, FiMessageCircle, FiShield, FiTrendingUp } from 'react-icons/fi';

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
    icon: FiBook,
    title: 'Academic Papers',
    description: 'Access and discuss the latest research papers in your field'
  },
  {
    icon: FiMessageCircle,
    title: 'Community Discussion',
    description: 'Engage in meaningful discussions with fellow researchers'
  },
  {
    icon: FiShield,
    title: 'Content Safety',
    description: 'Maintain high-quality academic discussions with content moderation'
  },
  {
    icon: FiTrendingUp,
    title: 'Research Impact',
    description: 'Track and increase the impact of your research'
  }
];

function Home() {
  const { colorMode } = useColorMode();
  const cardBg = colorMode === 'light' ? 'white' : 'brand.tertiary';
  const textColor = colorMode === 'light' ? 'gray.600' : 'gray.200';
  const headingColor = colorMode === 'light' ? 'white' : 'white';
  
  // Hero section gradient based on color mode
  const heroGradient = colorMode === 'light'
    ? 'linear(115deg, #fff6b7, #f6416c)'
    : 'linear(115deg, #2d3436, #f6416c)';

  // Complementary gradients for other sections
  const cardHeaderGradient = colorMode === 'light'
    ? 'linear(to-r, #f6416c, #ff8177)'
    : 'linear(to-r, #f6416c, #2d3436)';

  const textGradient = colorMode === 'light'
    ? 'linear(to-r, #fff6b7, #f6416c)'
    : 'linear(to-r, #fff6b7, #ff8177)';

  const buttonGradient = 'linear(to-r, #f6416c, #ff8177)';
  const buttonHoverGradient = 'linear(to-r, #ff8177, #f6416c)';

  return (
    <Box
      as={motion.div}
      initial="hidden"
      animate="show"
      variants={container}
      color={textColor}
    >
      {/* Hero Section with Gradient */}
      <MotionBox
        bgGradient={heroGradient}
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
          bgGradient: 'linear(to-br, whiteAlpha.200, transparent)',
          pointerEvents: 'none',
        }}
      >
        <Container maxW="container.xl" position="relative">
          <VStack spacing={8} align="center" textAlign="center">
            <Heading 
              size="2xl" 
              color={headingColor}
              bgGradient={textGradient}
              bgClip="text"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
            >
              Your Academic Research Hub
            </Heading>
            <Text 
              fontSize={{ base: "xl", md: "2xl" }} 
              color="white"
              maxW="2xl"
              textShadow="0 2px 4px rgba(0,0,0,0.1)"
            >
              Discover, discuss, and collaborate on academic papers in a
              vibrant research community
            </Text>
            <Button
              as={motion.button}
              size="lg"
              bgGradient={buttonGradient}
              color="white"
              px={8}
              py={6}
              fontSize="xl"
              _hover={{
                bgGradient: buttonHoverGradient,
                transform: 'translateY(-2px)',
              }}
              _active={{
                bgGradient: buttonGradient,
                transform: 'translateY(0)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              shadow="lg"
              transition="all 0.2s"
            >
              Get Started
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
            bgGradient={textGradient}
            bgClip="text"
          >
            Popular Topics
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {topics.map((topic) => (
              <MotionCard
                key={topic.id}
                bg={cardBg}
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
                borderColor={colorMode === 'light' ? 'gray.200' : 'whiteAlpha.200'}
                shadow="lg"
              >
                <CardHeader 
                  bgGradient={cardHeaderGradient}
                >
                  <Heading size="md" color="white">{topic.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Text color={textColor}>{topic.count} papers</Text>
                </CardBody>
                <CardFooter>
                  <Button
                    as={Link}
                    to={`/topic/${topic.id}`}
                    variant="ghost"
                    _hover={{
                      bgGradient: buttonGradient,
                      color: 'white',
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
          <Heading size="lg" mb={6} color={headingColor}>
            Recent Activities
          </Heading>
          <MotionCard bg={cardBg}>
            <CardHeader>
              <Heading size="md" color={headingColor}>
                Community Updates
              </Heading>
            </CardHeader>
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
                        color={
                          colorMode === 'light'
                            ? 'brand.secondary'
                            : 'brand.accent'
                        }
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
            bgGradient={textGradient}
            bgClip="text"
          >
            Why Choose Panvas?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature, index) => (
              <VStack
                key={index}
                align="start"
                spacing={4}
                as={motion.div}
                variants={item}
                whileHover={{ y: -5 }}
                p={6}
                borderRadius="lg"
                bgGradient={colorMode === 'light'
                  ? 'linear(to-br, white, gray.50)'
                  : 'linear(115deg, rgba(246, 65, 108, 0.1), rgba(255, 246, 183, 0.1))'}
                shadow="lg"
              >
                <Icon
                  as={feature.icon}
                  boxSize={8}
                  bgGradient={textGradient}
                  bgClip="text"
                />
                <Heading size="md" bgGradient={textGradient} bgClip="text">
                  {feature.title}
                </Heading>
                <Text color={textColor}>{feature.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default Home; 