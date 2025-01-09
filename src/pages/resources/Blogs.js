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
  Image,
  Tag,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FiBookOpen,
  FiClock,
  FiMessageSquare,
  FiHeart,
  FiShare2,
  FiTag,
} from 'react-icons/fi';

const MotionCard = motion(Card);

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Introducing PaperPoint: A New Way to Engage with Research',
    description: 'Learn about our innovative reward system that recognizes and incentivizes valuable academic contributions.',
    image: 'https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?auto=format&fit=crop&q=80&w=1200',
    category: 'Platform Update',
    date: 'Oct 15, 2023',
    readTime: '5 min read',
    author: {
      name: 'Sarah Chen',
      role: 'Product Manager',
      avatar: 'https://i.pravatar.cc/150?img=45'
    },
    tags: ['Feature Release', 'Rewards', 'Community'],
    stats: {
      likes: 124,
      comments: 28,
      shares: 45
    }
  },
  {
    id: 2,
    title: 'Best Practices for Academic Paper Reviews',
    description: 'Tips and guidelines for writing helpful and constructive paper reviews that benefit the research community.',
    image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80&w=1200',
    category: 'Guide',
    date: 'Oct 12, 2023',
    readTime: '8 min read',
    author: {
      name: 'Dr. Michael Lee',
      role: 'Academic Advisor',
      avatar: 'https://i.pravatar.cc/150?img=46'
    },
    tags: ['Academic Writing', 'Peer Review', 'Research'],
    stats: {
      likes: 256,
      comments: 42,
      shares: 89
    }
  },
  {
    id: 3,
    title: 'Community Highlights: September 2023',
    description: 'Celebrating our top contributors and showcasing impactful research discussions from the past month.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    category: 'Community',
    date: 'Oct 1, 2023',
    readTime: '6 min read',
    author: {
      name: 'Emma Wilson',
      role: 'Community Manager',
      avatar: 'https://i.pravatar.cc/150?img=47'
    },
    tags: ['Community', 'Recognition', 'Research Impact'],
    stats: {
      likes: 189,
      comments: 34,
      shares: 56
    }
  }
];

const BlogCard = ({ post }) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <MotionCard
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
      shadow="xl"
      overflow="hidden"
    >
      <Image
        src={post.image}
        alt={post.title}
        h="200px"
        w="100%"
        objectFit="cover"
      />
      <CardBody>
        <VStack align="start" spacing={4}>
          <HStack justify="space-between" w="100%">
            <Badge 
              colorScheme={
                post.category === 'Platform Update' ? 'blue' :
                post.category === 'Guide' ? 'green' :
                'purple'
              }
              px={2}
              py={1}
              borderRadius="md"
            >
              {post.category}
            </Badge>
            <HStack>
              <Icon as={FiClock} />
              <Text fontSize="sm">{post.readTime}</Text>
            </HStack>
          </HStack>

          <Heading size="md" color={theme.semanticTokens.text[colorMode]}>
            {post.title}
          </Heading>

          <Text color={theme.semanticTokens.text[colorMode]} noOfLines={2}>
            {post.description}
          </Text>

          <HStack spacing={2} flexWrap="wrap">
            {post.tags.map((tag, index) => (
              <Tag
                key={index}
                size="sm"
                variant="subtle"
                colorScheme="cyan"
              >
                <Icon as={FiTag} mr={1} />
                {tag}
              </Tag>
            ))}
          </HStack>

          <HStack justify="space-between" w="100%">
            <HStack>
              <Avatar size="sm" src={post.author.avatar} name={post.author.name} />
              <Box>
                <Text fontSize="sm" fontWeight="bold" color={theme.semanticTokens.text[colorMode]}>
                  {post.author.name}
                </Text>
                <Text fontSize="xs" color={theme.semanticTokens.text[colorMode]}>
                  {post.author.role}
                </Text>
              </Box>
            </HStack>
            <Text fontSize="sm" color={theme.semanticTokens.text[colorMode]}>
              {post.date}
            </Text>
          </HStack>

          <HStack justify="space-between" w="100%" pt={2}>
            <HStack>
              <Button variant="ghost" size="sm" leftIcon={<Icon as={FiHeart} />}>
                {post.stats.likes}
              </Button>
              <Button variant="ghost" size="sm" leftIcon={<Icon as={FiMessageSquare} />}>
                {post.stats.comments}
              </Button>
              <Button variant="ghost" size="sm" leftIcon={<Icon as={FiShare2} />}>
                {post.stats.shares}
              </Button>
            </HStack>
            <Button
              variant="solid"
              colorScheme="blue"
              size="sm"
              rightIcon={<Icon as={FiBookOpen} />}
            >
              Read More
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </MotionCard>
  );
};

function Blogs() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container maxW="container.xl" py={10}>
        {/* Header Section */}
        <VStack spacing={6} mb={16} textAlign="center">
          <Icon as={FiBookOpen} boxSize={12} color={theme.semanticTokens.button[colorMode]} />
          <Heading
            size="2xl"
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
            letterSpacing="tight"
            py={2}
          >
            Recent Updates & Insights
          </Heading>
          <Text
            fontSize="xl"
            color={theme.semanticTokens.text[colorMode]}
            maxW="2xl"
            px={4}
          >
            Stay updated with the latest news, guides, and community highlights from the Panvas team.
          </Text>
        </VStack>

        {/* Category Filter */}
        <HStack justify="center" mb={8} spacing={4}>
          <Button
            colorScheme="blue"
            bgGradient={theme.gradients.button[colorMode]}
            _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
          >
            All Posts
          </Button>
          <Button variant="ghost">Platform Updates</Button>
          <Button variant="ghost">Guides</Button>
          <Button variant="ghost">Community</Button>
        </HStack>

        {/* Blog Posts Grid */}
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Blogs; 