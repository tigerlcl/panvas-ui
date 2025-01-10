import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
  useColorMode,
  useTheme,
  Badge,
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FiArchive,
  FiSearch,
  FiClock,
  FiFileText,
  FiUsers,
  FiCode,
  FiDatabase,
  FiMoreHorizontal,
} from 'react-icons/fi';

const MotionCard = motion(Card);

// Sample data for different categories
const categories = [
  {
    id: 'all',
    name: 'All Requests',
    icon: FiArchive,
    items: [] // Will be populated with all items
  },
  {
    id: 'review',
    name: 'Paper Review',
    icon: FiFileText,
    items: [
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
          role: 'Professor at MIT',
          avatar: 'https://i.pravatar.cc/150?img=11'
        }
      }
    ]
  },
  {
    id: 'survey',
    name: 'Surveys',
    icon: FiUsers,
    items: [
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
          role: 'Research Lead',
          avatar: 'https://i.pravatar.cc/150?img=12'
        }
      }
    ]
  },
  {
    id: 'experiment',
    name: 'Experiments',
    icon: FiDatabase,
    items: [
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
          role: 'Research Fellow',
          avatar: 'https://i.pravatar.cc/150?img=13'
        }
      }
    ]
  },
  {
    id: 'code',
    name: 'Code Review',
    icon: FiCode,
    items: [
      {
        id: 4,
        type: 'Code Review',
        title: 'Review ML Model Implementation',
        description: 'Need review for PyTorch implementation of a new attention mechanism.',
        reward: 200,
        deadline: '5 days',
        expertise: ['PyTorch', 'Deep Learning'],
        author: {
          name: 'Alex Chen',
          role: 'PhD Student',
          avatar: 'https://i.pravatar.cc/150?img=14'
        }
      }
    ]
  },
  {
    id: 'other',
    name: 'Other',
    icon: FiMoreHorizontal,
    items: [
      {
        id: 5,
        type: 'General Help',
        title: 'Research Project Planning Help',
        description: 'Looking for advice on structuring a 6-month research project in NLP.',
        reward: 150,
        deadline: '3 days',
        expertise: ['Project Management', 'NLP'],
        author: {
          name: 'Emma Wilson',
          role: 'Graduate Student',
          avatar: 'https://i.pravatar.cc/150?img=15'
        }
      }
    ]
  }
];

// Populate 'All' category with items from all other categories
categories[0].items = categories.slice(1).reduce((acc, category) => [...acc, ...category.items], []);

function ConsultingRoom() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const RequestCard = ({ item }) => (
    <MotionCard
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
    >
      <CardHeader pb={2}>
        <HStack justify="space-between">
          <HStack spacing={3}>
            <Avatar
              size="sm"
              src={item.author.avatar}
              name={item.author.name}
            />
            <VStack align="start" spacing={0}>
              <Text fontWeight="medium" fontSize="sm">
                {item.author.name}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {item.author.role}
              </Text>
            </VStack>
          </HStack>
          <Badge colorScheme="purple" variant="solid">
            {item.reward} PC
          </Badge>
        </HStack>
      </CardHeader>
      <CardBody py={2}>
        <Text fontWeight="bold" fontSize="md" mb={2} noOfLines={2}>
          {item.title}
        </Text>
        <Text fontSize="sm" color="gray.500" noOfLines={2} mb={2}>
          {item.description}
        </Text>
        <HStack spacing={2} wrap="wrap">
          {item.expertise.map((skill, index) => (
            <Badge
              key={index}
              colorScheme="blue"
              variant="subtle"
              fontSize="xs"
            >
              {skill}
            </Badge>
          ))}
        </HStack>
      </CardBody>
      <CardFooter pt={2} borderTopWidth="1px">
        <HStack justify="space-between" w="100%">
          <HStack spacing={2}>
            <Icon as={FiClock} size="sm" color="orange.400" />
            <Text fontSize="sm" color="orange.400">
              {item.deadline}
            </Text>
          </HStack>
          <Button
            size="sm"
            colorScheme="blue"
            variant="ghost"
          >
            Apply Now
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
                as={FiUsers} 
                boxSize={8} 
                color={theme.semanticTokens.button[colorMode]}
              />
              <VStack align="start" spacing={0}>
                <Heading size="lg">Consulting Room</Heading>
                <Text color="gray.500">Find opportunities to help and earn rewards</Text>
              </VStack>
            </HStack>
            <InputGroup maxW="400px">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color="gray.500" />
              </InputLeftElement>
              <Input 
                placeholder="Search by title, expertise, or reward..."
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
                  <VStack spacing={4} align="stretch">
                    {category.items.map((item) => (
                      <RequestCard key={item.id} item={item} />
                    ))}
                  </VStack>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </VStack>
      </Container>
    </Box>
  );
}

export default ConsultingRoom; 