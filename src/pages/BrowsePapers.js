import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Input,
  Select,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  HStack,
  Icon,
  Badge,
  useColorMode,
  useTheme,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiBookmark, FiThumbsUp, FiMessageSquare } from 'react-icons/fi';

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

const papers = [
  {
    id: 1,
    title: "Deep Learning Approaches in Medical Imaging",
    authors: "John Smith, Sarah Johnson",
    abstract: "This paper explores the applications of deep learning in medical imaging...",
    likes: 245,
    comments: 42,
    saves: 89,
    tags: ["Deep Learning", "Medical", "AI"]
  },
  {
    id: 2,
    title: "Quantum Computing: A New Era",
    authors: "Michael Brown, Lisa Davis",
    abstract: "An overview of recent advances in quantum computing and its implications...",
    likes: 189,
    comments: 35,
    saves: 76,
    tags: ["Quantum", "Computing", "Physics"]
  },
  // Add more papers as needed
];

function BrowsePapers() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box as={motion.div} initial="hidden" animate="show" variants={container}>
      <Container maxW="container.xl">
        {/* Search and Filter Section */}
        <MotionBox mb={8} variants={item}>
          <Heading mb={6} color="text.heading">
            Browse Papers
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <Input placeholder="Search papers..." />
            <Select placeholder="Filter by category">
              <option value="ai">Artificial Intelligence</option>
              <option value="ml">Machine Learning</option>
              <option value="dl">Deep Learning</option>
              <option value="cv">Computer Vision</option>
            </Select>
            <Select placeholder="Sort by">
              <option value="recent">Most Recent</option>
              <option value="cited">Most Cited</option>
              <option value="liked">Most Liked</option>
            </Select>
          </SimpleGrid>
        </MotionBox>

        {/* Papers Grid */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          {papers.map((paper) => (
            <MotionCard
              key={paper.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
              cursor="pointer"
            >
              <CardHeader>
                <Heading size="md" color="text.heading">{paper.title}</Heading>
                <Text color="text.default" fontSize="sm" mt={2}>
                  {paper.authors}
                </Text>
              </CardHeader>
              <CardBody>
                <Text noOfLines={3} color="text.default">
                  {paper.abstract}
                </Text>
                <HStack mt={4} spacing={2}>
                  {paper.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      bgGradient={theme.gradients.tag[colorMode]}
                      color="text.inverse"
                    >
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </CardBody>
              <CardFooter>
                <HStack spacing={6}>
                  <HStack>
                    <Icon as={FiThumbsUp} color="text.default" />
                    <Text color="text.default">{paper.likes}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FiMessageSquare} color="text.default" />
                    <Text color="text.default">{paper.comments}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FiBookmark} color="text.default" />
                    <Text color="text.default">{paper.saves}</Text>
                  </HStack>
                </HStack>
              </CardFooter>
            </MotionCard>
          ))}
        </SimpleGrid>

        {/* Load More Button */}
        <Box textAlign="center" mt={8}>
          <Button
            as={motion.button}
            colorScheme="blue"
            size="lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            bg="button.primary"
            color="button.text"
          >
            Load More Papers
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default BrowsePapers; 