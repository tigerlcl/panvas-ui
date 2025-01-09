import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Button,
  Icon,
  useColorMode,
  useTheme,
  Card,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FiAward,
  FiTrendingUp,
  FiMessageSquare,
  FiEdit3,
  FiThumbsUp,
  FiGift,
  FiStar,
  FiBookOpen,
  FiZap,
  FiTarget
} from 'react-icons/fi';

const MotionCard = motion(Card);

// Sample data for earning points
const earningPoints = [
  {
    title: 'Write Paper Reviews',
    description: 'Earn points by providing detailed reviews on research papers',
    points: '50-200',
    icon: FiEdit3,
    color: 'blue'
  },
  {
    title: 'Engage in Discussions',
    description: 'Participate in meaningful academic discussions',
    points: '10-50',
    icon: FiMessageSquare,
    color: 'green'
  },
  {
    title: 'Get Likes',
    description: 'Receive likes on your contributions from other members',
    points: '20',
    icon: FiThumbsUp,
    color: 'purple'
  },
  {
    title: 'Complete Projects',
    description: 'Collaborate on research projects with other members',
    points: '30-150',
    icon: FiTarget,
    color: 'orange'
  }
];

// Sample data for using points
const usingPoints = [
  {
    title: 'Request Expert Reviews',
    description: 'Get detailed feedback from field experts',
    points: '200-500',
    icon: FiStar,
    color: 'yellow'
  },
  {
    title: 'Join Carnival Games',
    description: 'Participate in academic prediction games',
    points: '50-200',
    icon: FiGift,
    color: 'pink'
  },
  {
    title: 'Boost Visibility',
    description: 'Increase your paper\'s visibility in the community',
    points: '100-300',
    icon: FiZap,
    color: 'cyan'
  },
  {
    title: 'Premium Features',
    description: 'Access exclusive platform features',
    points: '150-400',
    icon: FiBookOpen,
    color: 'teal'
  }
];

const FeatureCard = ({ title, description, points, icon: IconComponent, color }) => {
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
          <Icon 
            as={IconComponent} 
            boxSize={8} 
            color={`${color}.400`}
          />
          <VStack align="start" spacing={2}>
            <Heading size="md" color={theme.semanticTokens.text[colorMode]}>
              {title}
            </Heading>
            <Text color={theme.semanticTokens.text[colorMode]}>
              {description}
            </Text>
          </VStack>
          <Badge
            colorScheme={color}
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
          >
            {points} Points
          </Badge>
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
        <VStack spacing={6} mb={16} textAlign="center">
          <Icon as={FiAward} boxSize={12} color={theme.semanticTokens.button[colorMode]} />
          <Heading
            size="2xl"
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
            letterSpacing="tight"
            py={2}
          >
            PaperPoint System
          </Heading>
          <Text
            fontSize="xl"
            color={theme.semanticTokens.text[colorMode]}
            maxW="2xl"
            px={4}
          >
            Our digital currency that rewards valuable academic contributions and unlocks premium features.
          </Text>
        </VStack>

        {/* Stats Overview */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={16}>
          <Stat
            px={8}
            py={6}
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            shadow="xl"
            borderRadius="lg"
            textAlign="center"
          >
            <StatLabel fontSize="lg" mb={2}>Total Points Earned</StatLabel>
            <StatNumber fontSize="4xl" fontWeight="bold" color={theme.semanticTokens.button[colorMode]}>
              1,234,567
            </StatNumber>
            <StatHelpText>
              <Icon as={FiTrendingUp} /> By Community
            </StatHelpText>
          </Stat>
          <Stat
            px={8}
            py={6}
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            shadow="xl"
            borderRadius="lg"
            textAlign="center"
          >
            <StatLabel fontSize="lg" mb={2}>Active Users</StatLabel>
            <StatNumber fontSize="4xl" fontWeight="bold" color={theme.semanticTokens.button[colorMode]}>
              15,432
            </StatNumber>
            <StatHelpText>
              <Icon as={FiTrendingUp} /> This Month
            </StatHelpText>
          </Stat>
          <Stat
            px={8}
            py={6}
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            shadow="xl"
            borderRadius="lg"
            textAlign="center"
          >
            <StatLabel fontSize="lg" mb={2}>Points Redeemed</StatLabel>
            <StatNumber fontSize="4xl" fontWeight="bold" color={theme.semanticTokens.button[colorMode]}>
              987,654
            </StatNumber>
            <StatHelpText>
              <Icon as={FiTrendingUp} /> Total Value
            </StatHelpText>
          </Stat>
        </SimpleGrid>

        {/* Earning Points Section */}
        <VStack spacing={8} mb={16}>
          <Heading size="xl" color={theme.semanticTokens.text[colorMode]}>
            How to Earn Points
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="100%">
            {earningPoints.map((item, index) => (
              <FeatureCard key={index} {...item} />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Using Points Section */}
        <VStack spacing={8}>
          <Heading size="xl" color={theme.semanticTokens.text[colorMode]}>
            Ways to Use Points
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="100%">
            {usingPoints.map((item, index) => (
              <FeatureCard key={index} {...item} />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Call to Action */}
        <VStack spacing={4} mt={16} textAlign="center">
          <Button
            size="lg"
            colorScheme="blue"
            bgGradient={theme.gradients.button[colorMode]}
            _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
            leftIcon={<Icon as={FiAward} />}
          >
            Start Earning Points
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default PaperPoint; 