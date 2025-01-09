import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  Icon,
  useColorMode,
  useTheme,
  Card,
  CardBody,
  Badge,
  Avatar,
  Divider,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FiArchive, 
  FiDollarSign, 
  FiUsers, 
  FiClock,
  FiTag,
  FiAward
} from 'react-icons/fi';

const MotionCard = motion(Card);

// Sample data for different types of requests
const requests = [
  {
    id: 1,
    type: 'Review Request',
    title: 'Need Expert Review for ML Paper',
    description: 'Looking for an experienced researcher to review my paper on deep learning applications in healthcare.',
    reward: 500,
    deadline: '7 days',
    expertise: ['Machine Learning', 'Healthcare'],
    author: {
      name: 'Dr. Smith',
      avatar: 'https://i.pravatar.cc/150?img=11'
    }
  },
  {
    id: 2,
    type: 'Survey',
    title: 'Research Survey on Academic Writing',
    description: 'Participate in a 15-minute survey about academic writing habits and preferences.',
    reward: 50,
    deadline: '30 days',
    expertise: ['Academic Writing'],
    author: {
      name: 'Prof. Johnson',
      avatar: 'https://i.pravatar.cc/150?img=12'
    }
  },
  {
    id: 3,
    type: 'Experiment',
    title: 'Participants Needed for Psychology Study',
    description: 'Recruiting participants for a virtual study on decision-making processes.',
    reward: 100,
    deadline: '14 days',
    expertise: ['Psychology', 'Decision Making'],
    author: {
      name: 'Dr. Williams',
      avatar: 'https://i.pravatar.cc/150?img=13'
    }
  },
  {
    id: 4,
    type: 'Review Request',
    title: 'Statistical Analysis Review Needed',
    description: 'Seeking statistician to review methodology and analysis section of research paper.',
    reward: 300,
    deadline: '5 days',
    expertise: ['Statistics', 'Research Methods'],
    author: {
      name: 'Prof. Brown',
      avatar: 'https://i.pravatar.cc/150?img=14'
    }
  }
];

const RequestCard = ({ request }) => {
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
          <HStack justify="space-between" w="100%">
            <Badge 
              colorScheme={
                request.type === 'Review Request' ? 'blue' :
                request.type === 'Survey' ? 'green' :
                'purple'
              }
              fontSize="sm"
              px={2}
              py={1}
              borderRadius="md"
            >
              {request.type}
            </Badge>
            <HStack>
              <Icon as={FiClock} />
              <Text fontSize="sm">{request.deadline}</Text>
            </HStack>
          </HStack>

          <Heading size="md" color={theme.semanticTokens.text[colorMode]}>
            {request.title}
          </Heading>

          <Text color={theme.semanticTokens.text[colorMode]}>
            {request.description}
          </Text>

          <HStack spacing={2} flexWrap="wrap">
            {request.expertise.map((skill, index) => (
              <Tag
                key={index}
                size="sm"
                variant="subtle"
                colorScheme="cyan"
              >
                <TagLeftIcon as={FiTag} />
                <TagLabel>{skill}</TagLabel>
              </Tag>
            ))}
          </HStack>

          <Divider />

          <HStack justify="space-between" w="100%">
            <HStack>
              <Avatar size="sm" src={request.author.avatar} name={request.author.name} />
              <Text fontSize="sm" color={theme.semanticTokens.text[colorMode]}>
                {request.author.name}
              </Text>
            </HStack>
            <HStack>
              <Icon as={FiAward} color={theme.semanticTokens.button[colorMode]} />
              <Text 
                fontWeight="bold" 
                color={theme.semanticTokens.button[colorMode]}
              >
                {request.reward} Points
              </Text>
            </HStack>
          </HStack>

          <Button
            w="100%"
            colorScheme="blue"
            bgGradient={theme.gradients.button[colorMode]}
            _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
          >
            Apply Now
          </Button>
        </VStack>
      </CardBody>
    </MotionCard>
  );
};

function HelpWanted() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container maxW="container.xl" py={10}>
        {/* Header Section */}
        <VStack spacing={4} mb={12} textAlign="center">
          <Icon as={FiArchive} boxSize={10} color={theme.semanticTokens.button[colorMode]} />
          <Heading
            size="2xl"
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
          >
            Help Wanted Zone
          </Heading>
          <Text
            fontSize="xl"
            color={theme.semanticTokens.text[colorMode]}
            maxW="2xl"
          >
            Find opportunities to contribute and earn rewards, or post your own requests for research assistance.
          </Text>
        </VStack>

        {/* Action Buttons */}
        <HStack justify="center" mb={8} spacing={4}>
          <Button
            leftIcon={<Icon as={FiDollarSign} />}
            colorScheme="blue"
            size="lg"
            bgGradient={theme.gradients.button[colorMode]}
            _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
          >
            Post a Request
          </Button>
          <Button
            leftIcon={<Icon as={FiUsers} />}
            variant="outline"
            size="lg"
            borderColor={theme.semanticTokens.button[colorMode]}
            color={theme.semanticTokens.button[colorMode]}
          >
            Browse Opportunities
          </Button>
        </HStack>

        {/* Requests Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {requests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default HelpWanted; 