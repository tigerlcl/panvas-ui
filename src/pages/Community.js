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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiHeart, FiShare2 } from 'react-icons/fi';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const discussions = [
  {
    id: 1,
    author: {
      name: "Dr. Emily Chen",
      avatar: "https://i.pravatar.cc/150?img=1",
      title: "AI Researcher"
    },
    title: "The Future of Quantum Machine Learning",
    content: "What are your thoughts on the intersection of quantum computing and machine learning?...",
    likes: 42,
    comments: 15,
    shares: 8,
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    author: {
      name: "Prof. James Wilson",
      avatar: "https://i.pravatar.cc/150?img=2",
      title: "Computer Science Professor"
    },
    title: "Ethics in AI Development",
    content: "Let's discuss the ethical considerations in developing AI systems...",
    likes: 38,
    comments: 21,
    shares: 12,
    timestamp: "4 hours ago"
  },
];

function Community() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box as={motion.div} initial="hidden" animate="show" variants={container}>
      <Container maxW="container.xl">
        {/* Header Section */}
        <MotionBox mb={8} variants={item}>
          <Heading mb={4} color="text.heading">
            Community Discussions
          </Heading>
          <Text color="text.default">
            Join the conversation with fellow researchers and academics
          </Text>
        </MotionBox>

        {/* Create Post Button */}
        <MotionBox mb={8} variants={item}>
          <Button
            colorScheme="blue"
            size="lg"
            leftIcon={<Icon as={FiMessageSquare} />}
            as={motion.button}
            bgColor={theme.semanticTokens.button[colorMode]}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Discussion
          </Button>
        </MotionBox>

        {/* Discussions Grid */}
        <SimpleGrid spacing={6}>
          {discussions.map((discussion) => (
            <MotionCard
              key={discussion.id}
              variants={item}
              whileHover={{ scale: 1.01 }}
            >
              <CardHeader>
                <HStack spacing={4}>
                  <Avatar
                    src={discussion.author.avatar}
                    name={discussion.author.name}
                  />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold" color="text.heading">
                      {discussion.author.name}
                    </Text>
                    <Text fontSize="sm" color="text.default">
                      {discussion.author.title}
                    </Text>
                    <Text fontSize="xs" color="text.default">
                      {discussion.timestamp}
                    </Text>
                  </VStack>
                </HStack>
              </CardHeader>
              <CardBody>
                <Heading size="md" mb={2} color="text.heading">
                  {discussion.title}
                </Heading>
                <Text color="text.default">{discussion.content}</Text>
              </CardBody>
              <Divider />
              <CardFooter>
                <HStack spacing={8}>
                  <Button
                    variant="ghost"
                    leftIcon={<Icon as={FiHeart} />}
                    as={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    color="text.default"
                  >
                    {discussion.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    leftIcon={<Icon as={FiMessageSquare} />}
                    as={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    color="text.default"
                  >
                    {discussion.comments}
                  </Button>
                  <Button
                    variant="ghost"
                    leftIcon={<Icon as={FiShare2} />}
                    as={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    color="text.default"
                  >
                    {discussion.shares}
                  </Button>
                </HStack>
              </CardFooter>
            </MotionCard>
          ))}
        </SimpleGrid>

        {/* Load More Button */}
        <Box textAlign="center" mt={8}>
          <Button
            colorScheme="blue"
            variant="outline"
            size="lg"
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            bg="bg.secondary"
            color="button.primary"
            borderColor="button.primary"
          >
            Load More Discussions
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Community; 