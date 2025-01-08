import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  useColorMode,
  useTheme,
  Card,
  CardBody,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FiAward, 
  FiGift, 
  FiTrendingUp, 
  FiCheckCircle, 
  FiMessageCircle, 
  FiThumbsUp, 
  FiBookOpen,
  FiUsers
} from 'react-icons/fi';


const MotionCard = motion(Card);

const earnPoints = [
  {
    title: "Paper Reviews",
    description: "Earn points by providing thoughtful reviews on preprints",
    icon: FiBookOpen,
    points: "50-200",
    details: [
      "Basic Review: 50 points",
      "Detailed Review: 100 points",
      "Expert Review: 200 points"
    ]
  },
  {
    title: "Community Engagement",
    description: "Participate in discussions and help fellow researchers",
    icon: FiMessageCircle,
    points: "10-50",
    details: [
      "Helpful Comment: 10 points",
      "Question Answer: 20 points",
      "Best Answer: 50 points"
    ]
  },
  {
    title: "Quality Contributions",
    description: "Get recognized for your valuable inputs",
    icon: FiThumbsUp,
    points: "20-100",
    details: [
      "Liked Review: 20 points",
      "Featured Comment: 50 points",
      "Top Contributor: 100 points"
    ]
  },
  {
    title: "Collaboration",
    description: "Work together with other researchers",
    icon: FiUsers,
    points: "30-150",
    details: [
      "Join Project: 30 points",
      "Share Resources: 50 points",
      "Project Completion: 150 points"
    ]
  }
];

const usePoints = [
  {
    title: "Premium Reviews",
    description: "Request expert reviews for your papers",
    icon: FiAward,
    cost: "200-500",
    details: [
      "Basic Review Request: 200 points",
      "Expert Review Request: 350 points",
      "Priority Review: 500 points"
    ]
  },
  {
    title: "Carnival Games",
    description: "Participate in paper decision betting and other games",
    icon: FiGift,
    cost: "50-200",
    details: [
      "Basic Bet: 50 points",
      "Premium Bet: 100 points",
      "Special Event Entry: 200 points"
    ]
  },
  {
    title: "Boost Visibility",
    description: "Promote your papers and increase exposure",
    icon: FiTrendingUp,
    cost: "100-300",
    details: [
      "Featured Paper: 100 points",
      "Trending Section: 200 points",
      "Newsletter Feature: 300 points"
    ]
  }
];

const FeatureCard = ({ item, type }) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <MotionCard
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
      shadow="xl"
    >
      <CardBody>
        <VStack align="start" spacing={4}>
          <HStack spacing={3}>
            <Icon as={item.icon} boxSize={6} color={theme.semanticTokens.button[colorMode]} />
            <Heading size="md" bgGradient={theme.gradients.button[colorMode]} bgClip="text">
              {item.title}
            </Heading>
          </HStack>
          <Text color={theme.semanticTokens.text[colorMode]}>
            {item.description}
          </Text>
          <HStack>
            <Text fontWeight="bold" bgGradient={theme.gradients.button[colorMode]} bgClip="text">
              {type === 'earn' ? 'Earn' : 'Cost'}: {type === 'earn' ? item.points : item.cost} points
            </Text>
          </HStack>
          <List spacing={2}>
            {item.details.map((detail, index) => (
              <ListItem key={index} color={theme.semanticTokens.text[colorMode]}>
                <ListIcon as={FiCheckCircle} color={theme.semanticTokens.button[colorMode]} />
                {detail}
              </ListItem>
            ))}
          </List>
        </VStack>
      </CardBody>
    </MotionCard>
  );
};

function PaperPoint() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container maxW="container.xl" py={10}>
        {/* Header Section */}
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading
            pb={5}
            size="2xl"
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
          >
            PaperPoint System
          </Heading>
          <Text
            fontSize="xl"
            color={theme.semanticTokens.text[colorMode]}
            maxW="2xl"
          >
            Our innovative reward system that recognizes and incentivizes valuable academic contributions.
          </Text>
        </VStack>

        {/* Earn Points Section */}
        <VStack spacing={8} mb={16}>
          <Heading size="xl" color={theme.semanticTokens.text[colorMode]}>
            How to Earn Points
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
            {earnPoints.map((item, index) => (
              <FeatureCard key={index} item={item} type="earn" />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Use Points Section */}
        <VStack spacing={8}>
          <Heading size="xl" color={theme.semanticTokens.text[colorMode]}>
            How to Use Points
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
            {usePoints.map((item, index) => (
              <FeatureCard key={index} item={item} type="use" />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

export default PaperPoint; 