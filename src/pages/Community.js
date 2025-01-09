import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Avatar,
  HStack,
  VStack,
  Button,
  Icon,
  Divider,
  useColorMode,
  useTheme,
  Tag,
  TagLabel,
  Badge,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FiMessageSquare, 
  FiHeart, 
  FiShare2, 
  FiUsers,
  FiTag,
  FiBookOpen,
  FiFilter
} from 'react-icons/fi';

const MotionCard = motion(Card);

const discussions = [
  {
    id: 1,
    type: 'Paper Discussion',
    author: {
      name: "Dr. Emily Chen",
      avatar: "https://i.pravatar.cc/150?img=60",
      title: "Neuroscience Researcher"
    },
    title: "Neural Mechanisms of Memory Formation",
    content: "Looking for insights on the latest paper in Nature Neuroscience about synaptic plasticity in memory formation. Has anyone implemented similar protocols in their research?",
    tags: ["Neuroscience", "Memory", "Research Methods"],
    likes: 42,
    comments: 15,
    shares: 8,
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    type: 'Topic Discussion',
    author: {
      name: "Prof. James Wilson",
      avatar: "https://i.pravatar.cc/150?img=44",
      title: "Environmental Science Professor"
    },
    title: "Climate Change Impact on Marine Ecosystems",
    content: "Let's discuss the latest findings on coral reef resilience and adaptation strategies. What interventions have shown the most promise in your research?",
    tags: ["Climate Change", "Marine Biology", "Conservation"],
    likes: 38,
    comments: 21,
    shares: 12,
    timestamp: "4 hours ago"
  },
  {
    id: 3,
    type: 'Paper Discussion',
    author: {
      name: "Dr. Sarah Martinez",
      avatar: "https://i.pravatar.cc/150?img=11",
      title: "Molecular Biology Researcher"
    },
    title: "CRISPR Applications in Rare Diseases",
    content: "Fascinating new paper in Cell about novel CRISPR techniques for treating rare genetic disorders. Would love to hear thoughts on the methodology and potential applications.",
    tags: ["CRISPR", "Genetics", "Medical Research"],
    likes: 56,
    comments: 28,
    shares: 15,
    timestamp: "6 hours ago"
  }
];

function Community() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container maxW="container.xl" py={10}>
        {/* Header Section */}
        <VStack spacing={6} mb={16} textAlign="center">
          <Icon as={FiUsers} boxSize={12} color={theme.semanticTokens.button[colorMode]} />
          <Heading
            size="2xl"
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
            letterSpacing="tight"
            py={2}
          >
            Community Discussions
          </Heading>
          <Text
            fontSize="xl"
            color={theme.semanticTokens.text[colorMode]}
            maxW="2xl"
            px={4}
          >
            Join the conversation with fellow researchers. Discuss papers, share insights, and explore new ideas together.
          </Text>
        </VStack>

        {/* Action Buttons */}
        <HStack justify="space-between" mb={8} wrap="wrap" spacing={4}>
          <HStack spacing={4}>
            <Button
              colorScheme="blue"
              size="lg"
              leftIcon={<Icon as={FiMessageSquare} />}
              bgGradient={theme.gradients.button[colorMode]}
              _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
            >
              Start Discussion
            </Button>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<Icon as={FiBookOpen} />}
              borderColor={theme.semanticTokens.button[colorMode]}
              color={theme.semanticTokens.button[colorMode]}
            >
              Share Paper
            </Button>
          </HStack>
          <Button
            variant="ghost"
            size="lg"
            leftIcon={<Icon as={FiFilter} />}
          >
            Filter Discussions
          </Button>
        </HStack>

        {/* Discussions Grid */}
        <SimpleGrid spacing={6}>
          {discussions.map((discussion) => (
            <MotionCard
              key={discussion.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              shadow="xl"
            >
              <CardHeader>
                <VStack align="stretch" spacing={4}>
                  <HStack justify="space-between">
                    <HStack spacing={4}>
                      <Avatar
                        src={discussion.author.avatar}
                        name={discussion.author.name}
                      />
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold" color={theme.semanticTokens.text[colorMode]}>
                          {discussion.author.name}
                        </Text>
                        <Text fontSize="sm" color={theme.semanticTokens.text[colorMode]}>
                          {discussion.author.title}
                        </Text>
                      </VStack>
                    </HStack>
                    <Badge
                      colorScheme={discussion.type === 'Paper Discussion' ? 'blue' : 'green'}
                      px={2}
                      py={1}
                      borderRadius="md"
                    >
                      {discussion.type}
                    </Badge>
                  </HStack>
                  <Text fontSize="sm" color={theme.semanticTokens.text[colorMode]}>
                    {discussion.timestamp}
                  </Text>
                </VStack>
              </CardHeader>
              <CardBody>
                <Heading size="md" mb={4} color={theme.semanticTokens.text[colorMode]}>
                  {discussion.title}
                </Heading>
                <Text color={theme.semanticTokens.text[colorMode]} mb={4}>
                  {discussion.content}
                </Text>
                <HStack spacing={2} flexWrap="wrap">
                  {discussion.tags.map((tag, index) => (
                    <Tag
                      key={index}
                      size="sm"
                      variant="subtle"
                      colorScheme="cyan"
                    >
                      <Icon as={FiTag} mr={1} />
                      <TagLabel>{tag}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </CardBody>
              <Divider />
              <CardFooter>
                <HStack justify="space-between" w="100%">
                  <HStack spacing={6}>
                    <Button
                      variant="ghost"
                      size="sm"
                      leftIcon={<Icon as={FiHeart} />}
                      color={theme.semanticTokens.text[colorMode]}
                    >
                      {discussion.likes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      leftIcon={<Icon as={FiMessageSquare} />}
                      color={theme.semanticTokens.text[colorMode]}
                    >
                      {discussion.comments}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      leftIcon={<Icon as={FiShare2} />}
                      color={theme.semanticTokens.text[colorMode]}
                    >
                      {discussion.shares}
                    </Button>
                  </HStack>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    size="sm"
                    bgGradient={theme.gradients.button[colorMode]}
                    _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
                  >
                    Join Discussion
                  </Button>
                </HStack>
              </CardFooter>
            </MotionCard>
          ))}
        </SimpleGrid>

        {/* Load More Button */}
        <VStack spacing={4} mt={16} textAlign="center">
          <Button
            size="lg"
            variant="outline"
            borderColor={theme.semanticTokens.button[colorMode]}
            color={theme.semanticTokens.button[colorMode]}
          >
            Load More Discussions
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default Community; 