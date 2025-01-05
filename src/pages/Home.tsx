import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Link as ChakraLink
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FiBook, FiMessageCircle, FiShield, FiTrendingUp } from 'react-icons/fi'

const topics = [
  { id: 1, title: "Machine Learning", count: 120 },
  { id: 2, title: "Data Science", count: 95 },
  { id: 3, title: "Artificial Intelligence", count: 87 },
  { id: 4, title: "Computer Vision", count: 63 },
  { id: 5, title: "Natural Language Processing", count: 58 },
]

const recentActivities = [
  { id: 1, user: "Alice", action: "commented on", paper: "Neural Networks in Healthcare" },
  { id: 2, user: "Bob", action: "uploaded", paper: "Reinforcement Learning: A New Approach" },
  { id: 3, user: "Charlie", action: "reviewed", paper: "Quantum Computing: Current State and Future" },
  { id: 4, user: "David", action: "liked", paper: "Ethical Implications of AI" },
  { id: 5, user: "Eve", action: "shared", paper: "Blockchain in Supply Chain Management" },
]

const features = [
  {
    icon: FiBook,
    title: 'Academic Papers',
    description: 'Access and discuss the latest research papers in your field'
  },
  {
    icon: FiMessageCircle,
    title: 'Community Discussion',
    description: 'Engage in meaningful discussions with fellow researchers'
  },
  {
    icon: FiShield,
    title: 'Content Safety',
    description: 'Maintain high-quality academic discussions with content moderation'
  },
  {
    icon: FiTrendingUp,
    title: 'Research Impact',
    description: 'Track and increase the impact of your research'
  }
]

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.50" py={20} mb={10} mx={-4}>
        <Container maxW="container.xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="2xl">Your Academic Research Hub</Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Discover, discuss, and collaborate on academic papers in a vibrant research community
            </Text>
            <Button size="lg" colorScheme="blue">Get Started</Button>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl">
        {/* Popular Topics Section */}
        <Box mb={10}>
          <Heading size="lg" mb={6}>Popular Topics</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {topics.map((topic) => (
              <Card key={topic.id}>
                <CardHeader>
                  <Heading size="md">{topic.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Text color="gray.600">{topic.count} papers</Text>
                </CardBody>
                <CardFooter>
                  <Button as={Link} to={`/topic/${topic.id}`} variant="ghost">
                    View Papers
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* Recent Activities Section */}
        <Box mb={10}>
          <Heading size="lg" mb={6}>Recent Activities</Heading>
          <Card>
            <CardHeader>
              <Heading size="md">Community Updates</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch" maxH="300px" overflowY="auto">
                {recentActivities.map((activity) => (
                  <Flex key={activity.id} align="center" gap={4}>
                    <Icon as={FiTrendingUp} boxSize={5} color="blue.500" />
                    <Text>
                      <Text as="span" fontWeight="semibold">{activity.user}</Text>
                      {" "}{activity.action}{" "}
                      <ChakraLink color="blue.500">"{activity.paper}"</ChakraLink>
                    </Text>
                  </Flex>
                ))}
              </VStack>
            </CardBody>
          </Card>
        </Box>

        {/* Features Section */}
        <Box mb={10}>
          <Heading size="lg" mb={6}>Why Choose Panvas?</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature, index) => (
              <VStack key={index} align="start" spacing={4}>
                <Icon as={feature.icon} boxSize={6} color="blue.500" />
                <Heading size="md">{feature.title}</Heading>
                <Text color="gray.600">{feature.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}

export default Home 