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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FiMessageSquare, 
  FiHeart, 
  FiShare2, 
  FiFilter,
  FiChevronDown,
  FiSearch,
  FiLayout,
} from 'react-icons/fi';

const MotionCard = motion(Card);

const discussions = [
  {
    id: 1,
    subject: 'Computer Science',
    author: {
      name: "Dr. Alan Turner",
      avatar: "https://i.pravatar.cc/150?img=60",
      title: "ML Researcher at Stanford"
    },
    title: "Thoughts on the Future of Large Language Models",
    content: "As we see rapid advancements in LLMs, what are your perspectives on their potential impact on scientific research? Particularly interested in hearing about novel applications in academic workflows.",
    paperPoints: 450,
    likes: 42,
    comments: 15,
    shares: 8,
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    subject: 'Biology',
    author: {
      name: "Prof. Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=44",
      title: "Molecular Biology Professor"
    },
    title: "Latest Developments in CRISPR Technology",
    content: "Would love to discuss recent breakthroughs in CRISPR applications, especially regarding its potential in treating genetic disorders. What are your thoughts on the ethical implications?",
    paperPoints: 380,
    likes: 38,
    comments: 21,
    shares: 12,
    timestamp: "4 hours ago"
  },
  {
    id: 3,
    subject: 'Physics',
    author: {
      name: "Dr. Michael Feynman",
      avatar: "https://i.pravatar.cc/150?img=11",
      title: "Quantum Physics Researcher"
    },
    title: "Quantum Computing: Practical Applications",
    content: "Let's discuss the practical applications of quantum computing in solving complex scientific problems. What areas do you think will benefit most from quantum supremacy?",
    paperPoints: 620,
    likes: 56,
    comments: 28,
    shares: 15,
    timestamp: "6 hours ago"
  },
  {
    id: 4,
    subject: 'Medical Science',
    author: {
      name: "Dr. Lisa Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=14",
      title: "Neuroscience Research Fellow"
    },
    title: "Brain-Computer Interfaces in Medical Treatment",
    content: "Recent advances in BCI technology show promising results for treating neurological conditions. What are your thoughts on the current limitations and future possibilities?",
    paperPoints: 520,
    likes: 45,
    comments: 32,
    shares: 18,
    timestamp: "8 hours ago"
  }
];

function Square() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container maxW="container.xl" py={6}>
        {/* Compact Header Section */}
        <VStack spacing={6} mb={8} align="stretch">
          {/* Title and Description */}
          <HStack justify="space-between">
            <HStack spacing={3}>
              <Icon 
                as={FiLayout} 
                boxSize={8} 
                color={theme.semanticTokens.button[colorMode]}
              />
              <VStack align="start" spacing={1}>
                <Heading size="lg" color={theme.semanticTokens.text[colorMode]}>
                  Academic Square
                </Heading>
                <Text color={theme.semanticTokens.text[colorMode]}>
                  Join academic discussions across all scientific disciplines
                </Text>
              </VStack>
            </HStack>
            <Button
              colorScheme="blue"
              leftIcon={<Icon as={FiMessageSquare} />}
              bgGradient={theme.gradients.button[colorMode]}
              _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
            >
              Start Discussion
            </Button>
          </HStack>

          {/* Search and Filter Bar */}
          <HStack spacing={4}>
            <InputGroup maxW="600px">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color={theme.semanticTokens.text[colorMode]} />
              </InputLeftElement>
              <Input 
                placeholder="Search discussions by keyword, topic, or author..."
                bg={colorMode === 'light' ? 'white' : 'gray.700'}
                borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
                _hover={{
                  borderColor: theme.semanticTokens.button[colorMode]
                }}
                _focus={{
                  borderColor: theme.semanticTokens.button[colorMode],
                  boxShadow: `0 0 0 1px ${theme.semanticTokens.button[colorMode]}`
                }}
              />
            </InputGroup>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<Icon as={FiChevronDown} />}
                leftIcon={<Icon as={FiFilter} />}
                variant="outline"
              >
                Subject
              </MenuButton>
              <MenuList>
                <MenuItem>All Subjects</MenuItem>
                <MenuItem>Computer Science</MenuItem>
                <MenuItem>Biology</MenuItem>
                <MenuItem>Physics</MenuItem>
                <MenuItem>Medical Science</MenuItem>
                <MenuItem>Chemistry</MenuItem>
                <MenuItem>Mathematics</MenuItem>
                <MenuItem>Environmental Science</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </VStack>

        {/* Discussions Grid */}
        <SimpleGrid spacing={4}>
          {discussions.map((discussion) => (
            <MotionCard
              key={discussion.id}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              shadow="md"
            >
              <CardHeader pb={2}>
                <HStack justify="space-between">
                  <HStack spacing={4}>
                    <Avatar
                      src={discussion.author.avatar}
                      name={discussion.author.name}
                      size="sm"
                    />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="medium" fontSize="sm" color={theme.semanticTokens.text[colorMode]}>
                        {discussion.author.name}
                      </Text>
                      <Text fontSize="xs" color={theme.semanticTokens.text[colorMode]}>
                        {discussion.author.title}
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack>
                    <Badge colorScheme="purple" variant="solid">
                      {discussion.paperPoints} PP
                    </Badge>
                    <Badge colorScheme="blue" variant="subtle">
                      {discussion.subject}
                    </Badge>
                  </HStack>
                </HStack>
              </CardHeader>
              <CardBody py={2}>
                <Heading size="sm" mb={2} color={theme.semanticTokens.text[colorMode]}>
                  {discussion.title}
                </Heading>
                <Text fontSize="sm" color={theme.semanticTokens.text[colorMode]}>
                  {discussion.content}
                </Text>
              </CardBody>
              <Divider />
              <CardFooter pt={2}>
                <HStack justify="space-between" w="100%">
                  <HStack spacing={4}>
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
                  <Text fontSize="xs" color="gray.500">
                    {discussion.timestamp}
                  </Text>
                </HStack>
              </CardFooter>
            </MotionCard>
          ))}
        </SimpleGrid>

        {/* Load More Button */}
        <VStack spacing={4} mt={8}>
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

export default Square; 