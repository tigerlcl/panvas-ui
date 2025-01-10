import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  HStack,
  VStack,
  Icon,
  Badge,
  useColorMode,
  useTheme,
  InputGroup,
  InputLeftElement,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Avatar,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FiArchive,
  FiSearch,
  FiEye,
  FiHeart,
  FiMessageSquare,
  FiFileText,
  FiCode,
  FiImage,
  FiDatabase,
  FiClipboard,
  FiAward,
  FiCheck,
  FiClock,
  FiGrid,
  FiMoreHorizontal,
} from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

const MotionCard = motion(Card);

// Sample data for different categories
const categories = [
  {
    id: 'all',
    name: 'All',
    icon: FiGrid,
    items: [] // Will be populated dynamically
  },
  {
    id: 'papers',
    name: 'Research Papers',
    icon: FiFileText,
    items: [
      {
        id: 1,
        title: "VerifAI: Verified Generative AI",
        author: "John Doe",
        institution: "University of California",
        paperCoins: 450,
        views: 15,
        likes: 5,
        comments: 2,
        avatar: "https://i.pravatar.cc/150?img=60",
        isEnded: false,
        timeLimit: 345600 // 4 days in seconds
      },
      {
        id: 2,
        title: "Novel Deep Learning Architecture for Medical Imaging",
        author: "Sarah Chen",
        institution: "Stanford University",
        paperCoins: 380,
        views: 890,
        likes: 189,
        comments: 35,
        avatar: "https://i.pravatar.cc/150?img=44",
        isEnded: true,
        bestAnswer: {
          author: "Michael Brown",
          reward: 180
        }
      }
    ]
  },
  {
    id: 'proposals',
    name: 'Research Proposals',
    icon: FiClipboard,
    items: [
      {
        id: 1,
        title: "Quantum Computing Applications in Drug Discovery",
        author: "Michael Feynman",
        institution: "MIT",
        paperCoins: 620,
        views: 756,
        likes: 156,
        comments: 28,
        avatar: "https://i.pravatar.cc/150?img=11",
        isEnded: false,
        timeLimit: 259200 // 3 days in seconds
      },
      {
        id: 2,
        title: "Sustainable AI: Energy-Efficient Training Methods",
        author: "Emma Wilson",
        institution: "MIT",
        paperCoins: 450,
        views: 645,
        likes: 134,
        comments: 23,
        avatar: "https://i.pravatar.cc/150?img=15",
        isEnded: true,
        bestAnswer: {
          author: "John Smith",
          reward: 200
        }
      }
    ]
  },
  {
    id: 'code',
    name: 'Code Snippets',
    icon: FiCode,
    items: [
      {
        id: 1,
        title: "Efficient Implementation of Transformer Architecture",
        author: "Alex Johnson",
        institution: "Google Research",
        paperCoins: 300,
        views: 1567,
        likes: 312,
        comments: 54,
        avatar: "https://i.pravatar.cc/150?img=33",
        isEnded: false,
        timeLimit: 172800 // 2 days in seconds
      }
    ]
  },
  {
    id: 'datasets',
    name: 'Datasets',
    icon: FiDatabase,
    items: [
      {
        id: 1,
        title: "Large-scale Medical Imaging Dataset for AI Training",
        author: "Emma Wilson",
        institution: "Harvard Medical School",
        paperCoins: 750,
        views: 2103,
        likes: 423,
        comments: 67,
        avatar: "https://i.pravatar.cc/150?img=45",
        isEnded: false,
        timeLimit: 432000 // 5 days in seconds
      }
    ]
  },
  {
    id: 'images',
    name: 'Research Images',
    icon: FiImage,
    items: [
      {
        id: 1,
        title: "High-Resolution Microscopy Images of Neural Networks",
        author: "David Zhang",
        institution: "Berkeley",
        paperCoins: 280,
        views: 945,
        likes: 187,
        comments: 31,
        avatar: "https://i.pravatar.cc/150?img=22",
        isEnded: false,
        timeLimit: 86400 // 1 day in seconds
      }
    ]
  },
  {
    id: 'other',
    name: 'Other',
    icon: FiMoreHorizontal,
    items: [
      {
        id: 1,
        title: "Novel Research Methodology Framework",
        author: "Lisa Wang",
        institution: "Oxford University",
        paperCoins: 350,
        views: 678,
        likes: 145,
        comments: 29,
        avatar: "https://i.pravatar.cc/150?img=25",
        isEnded: false,
        timeLimit: 172800 // 2 days in seconds
      }
    ]
  }
];

function PreviewSpace() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  // Function to get all items for the "All" category
  const getAllItems = () => {
    const allItems = categories
      .filter(cat => cat.id !== 'all')
      .flatMap(cat => cat.items.map(item => ({ ...item, category: cat.id })));
    return allItems;
  };

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${days}d:${hours.toString().padStart(2, '0')}h:${minutes.toString().padStart(2, '0')}m`;
  };

  const CategoryCard = ({ item, category }) => (
    <MotionCard
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      opacity={item.isEnded ? 0.8 : 1}
    >
      <CardHeader pb={2}>
        <HStack justify="space-between">
          <HStack spacing={3}>
            <Avatar
              size="sm"
              src={item.avatar}
              name={item.author}
            />
            <VStack align="start" spacing={0}>
              <Text fontWeight="medium" fontSize="sm">
                {item.author}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {item.institution}
              </Text>
            </VStack>
          </HStack>
          <VStack spacing={1} align="end">
            {item.isEnded ? (
              <Badge colorScheme="gray" variant="solid">
                <HStack spacing={1}>
                  <Icon as={FiCheck} boxSize={3} />
                  <Text>Ended</Text>
                </HStack>
              </Badge>
            ) : (
              <>
                <Badge colorScheme="purple" variant="solid">
                  {item.paperCoins} PC
                </Badge>
                <HStack spacing={1}>
                  <Icon as={FiClock} size="xs" color="orange.400" />
                  <Text fontSize="xs" color="orange.400">
                    {formatTime(item.timeLimit)}
                  </Text>
                </HStack>
              </>
            )}
          </VStack>
        </HStack>
      </CardHeader>
      <CardBody py={2}>
        <Text fontWeight="bold" fontSize="md" mb={2} noOfLines={2}>
          {item.title}
        </Text>
        {item.isEnded && item.bestAnswer && (
          <HStack 
            spacing={2} 
            p={2} 
            bg={colorMode === 'light' ? 'green.50' : 'green.900'} 
            borderRadius="md"
            fontSize="xs"
          >
            <Icon as={FiAward} color="green.500" />
            <Text>Best Answer: {item.bestAnswer.author}</Text>
            <Badge colorScheme="green">+{item.bestAnswer.reward} PC</Badge>
          </HStack>
        )}
      </CardBody>
      <CardFooter pt={2} borderTopWidth="1px">
        <HStack justify="space-between" w="100%">
          <HStack spacing={4}>
            <HStack spacing={1}>
              <Icon as={FiEye} size="sm" />
              <Text fontSize="sm">{item.views}</Text>
            </HStack>
            <HStack spacing={1}>
              <Icon as={FiHeart} size="sm" />
              <Text fontSize="sm">{item.likes}</Text>
            </HStack>
            <HStack spacing={1}>
              <Icon as={FiMessageSquare} size="sm" />
              <Text fontSize="sm">{item.comments}</Text>
            </HStack>
          </HStack>
          <Button
            as={RouterLink}
            to={category.id === 'papers' && item.id === 1 ? '/space/paper/1' : '#'}
            size="sm"
            colorScheme={item.isEnded ? "gray" : "blue"}
            variant="ghost"
          >
            {item.isEnded ? "View Result" : "View Details"}
          </Button>
        </HStack>
      </CardFooter>
    </MotionCard>
  );

  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container maxW="container.xl" py={6}>
        {/* Compact Header Section */}
        <VStack spacing={6} mb={8} align="stretch">
          {/* Title and Search */}
          <HStack justify="space-between">
            <HStack spacing={3}>
              <Icon 
                as={FiArchive} 
                boxSize={8} 
                color={theme.semanticTokens.button[colorMode]}
              />
              <VStack align="start" spacing={0}>
                <Heading size="lg">Preview Space</Heading>
                <Text color="gray.500">Explore multi-modal research content</Text>
              </VStack>
            </HStack>
            <InputGroup maxW="400px">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color="gray.500" />
              </InputLeftElement>
              <Input 
                placeholder="Search by title, author, or institution..."
                bg={colorMode === 'light' ? 'white' : 'gray.700'}
              />
            </InputGroup>
          </HStack>

          {/* Category Tabs */}
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList>
              {categories.map((category) => (
                <Tab key={category.id}>
                  <HStack spacing={2}>
                    <Icon as={category.icon} />
                    <Text>{category.name}</Text>
                  </HStack>
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {categories.map((category) => (
                <TabPanel key={category.id} px={0}>
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                    {category.id === 'all' 
                      ? getAllItems().map((item) => (
                          <CategoryCard 
                            key={`${item.category}-${item.id}`} 
                            item={item} 
                            category={{ id: item.category }}
                          />
                        ))
                      : category.items.map((item) => (
                          <CategoryCard 
                            key={item.id} 
                            item={item} 
                            category={category}
                          />
                        ))
                    }
                  </SimpleGrid>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </VStack>
      </Container>
    </Box>
  );
}

export default PreviewSpace; 