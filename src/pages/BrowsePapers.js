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
  VStack,
  Icon,
  Badge,
  useColorMode,
  useTheme,
  Tag,
  TagLabel,
  TagLeftIcon,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FiBookmark, 
  FiThumbsUp, 
  FiMessageSquare, 
  FiTag,
  FiSearch,
  FiBook,
  FiDownload,
  FiEye
} from 'react-icons/fi';

const MotionCard = motion(Card);

const papers = [
  {
    id: 1,
    title: "Novel Biomarkers for Early Detection of Alzheimer's Disease",
    authors: "Maria Rodriguez, John Chen, Sarah Thompson",
    abstract: "This study identifies three novel blood-based biomarkers that show promising results in early-stage Alzheimer's detection, potentially enabling non-invasive screening methods...",
    journal: "Nature Medicine",
    field: "Neuroscience",
    likes: 245,
    comments: 42,
    saves: 89,
    views: 1205,
    tags: ["Neuroscience", "Alzheimer's", "Biomarkers"]
  },
  {
    id: 2,
    title: "Climate Change Effects on Marine Biodiversity",
    authors: "David Wilson, Emma Brown, Michael Zhang",
    abstract: "A comprehensive analysis of how rising ocean temperatures and acidification are impacting coral reef ecosystems and marine biodiversity in the Pacific Ocean...",
    journal: "Nature Climate Change",
    field: "Environmental Science",
    likes: 189,
    comments: 35,
    saves: 76,
    views: 890,
    tags: ["Climate Change", "Marine Biology", "Ecology"]
  },
  {
    id: 3,
    title: "Economic Implications of Remote Work: Post-Pandemic Analysis",
    authors: "Jennifer Park, Robert Martinez",
    abstract: "This paper examines the long-term economic effects of widespread remote work adoption, analyzing productivity metrics, real estate markets, and urban development patterns...",
    journal: "Journal of Economic Perspectives",
    field: "Economics",
    likes: 156,
    comments: 28,
    saves: 67,
    views: 723,
    tags: ["Economics", "Remote Work", "Urban Development"]
  },
  {
    id: 4,
    title: "Advances in CRISPR Gene Therapy for Rare Diseases",
    authors: "Lisa Chen, Mohammed Al-Rashid",
    abstract: "Recent developments in CRISPR-Cas9 technology showing promising results in treating rare genetic disorders, with focus on improved delivery methods and reduced off-target effects...",
    journal: "Cell",
    field: "Genetics",
    likes: 312,
    comments: 54,
    saves: 143,
    views: 1567,
    tags: ["Genetics", "CRISPR", "Gene Therapy"]
  }
];

function BrowsePapers() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container maxW="container.xl" py={10}>
        {/* Header Section */}
        <VStack spacing={6} mb={16} textAlign="center">
          <Icon as={FiBook} boxSize={12} color={theme.semanticTokens.button[colorMode]} />
          <Heading
            size="2xl"
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
            letterSpacing="tight"
            py={2}
          >
            Browse Research Papers
          </Heading>
          <Text
            fontSize="xl"
            color={theme.semanticTokens.text[colorMode]}
            maxW="2xl"
            px={4}
          >
            Explore cutting-edge research across various academic fields. Find, discuss, and collaborate on papers that matter to you.
          </Text>
        </VStack>

        {/* Search and Filter Section */}
        <VStack spacing={6} mb={12}>
          <InputGroup size="lg" maxW="3xl">
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color={theme.semanticTokens.button[colorMode]} />
            </InputLeftElement>
            <Input 
              placeholder="Search papers by title, author, or keywords..."
              variant="filled"
              _focus={{
                borderColor: theme.semanticTokens.button[colorMode],
                boxShadow: 'none',
              }}
            />
          </InputGroup>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} w="100%" maxW="3xl">
            <Select placeholder="Select Field">
              <option value="neuroscience">Neuroscience</option>
              <option value="environmental">Environmental Science</option>
              <option value="economics">Economics</option>
              <option value="genetics">Genetics</option>
              <option value="psychology">Psychology</option>
            </Select>
            <Select placeholder="Publication Date">
              <option value="last-week">Last Week</option>
              <option value="last-month">Last Month</option>
              <option value="last-year">Last Year</option>
              <option value="all-time">All Time</option>
            </Select>
            <Select placeholder="Sort By">
              <option value="relevance">Relevance</option>
              <option value="date">Publication Date</option>
              <option value="citations">Citation Count</option>
              <option value="views">Views</option>
            </Select>
          </SimpleGrid>
        </VStack>

        {/* Papers Grid */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          {papers.map((paper) => (
            <MotionCard
              key={paper.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              shadow="xl"
            >
              <CardHeader>
                <VStack align="start" spacing={4}>
                  <Badge
                    colorScheme="blue"
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    {paper.field}
                  </Badge>
                  <Heading size="md" color={theme.semanticTokens.text[colorMode]}>
                    {paper.title}
                  </Heading>
                  <Text fontSize="sm" color={theme.semanticTokens.text[colorMode]}>
                    {paper.authors}
                  </Text>
                  <Text fontSize="sm" fontStyle="italic" color={theme.semanticTokens.text[colorMode]}>
                    {paper.journal}
                  </Text>
                </VStack>
              </CardHeader>
              <CardBody>
                <Text color={theme.semanticTokens.text[colorMode]} noOfLines={3} mb={4}>
                  {paper.abstract}
                </Text>
                <HStack spacing={2} flexWrap="wrap">
                  {paper.tags.map((tag, index) => (
                    <Tag
                      key={index}
                      size="sm"
                      variant="subtle"
                      colorScheme="cyan"
                    >
                      <TagLeftIcon as={FiTag} />
                      <TagLabel>{tag}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </CardBody>
              <CardFooter>
                <HStack justify="space-between" w="100%">
                  <HStack spacing={6}>
                    <HStack spacing={2}>
                      <Icon as={FiEye} color={theme.semanticTokens.text[colorMode]} />
                      <Text fontSize="sm" color={theme.semanticTokens.text[colorMode]}>{paper.views}</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={FiThumbsUp} color={theme.semanticTokens.text[colorMode]} />
                      <Text fontSize="sm" color={theme.semanticTokens.text[colorMode]}>{paper.likes}</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={FiMessageSquare} color={theme.semanticTokens.text[colorMode]} />
                      <Text fontSize="sm" color={theme.semanticTokens.text[colorMode]}>{paper.comments}</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={FiBookmark} color={theme.semanticTokens.text[colorMode]} />
                      <Text fontSize="sm" color={theme.semanticTokens.text[colorMode]}>{paper.saves}</Text>
                    </HStack>
                  </HStack>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    size="sm"
                    leftIcon={<Icon as={FiDownload} />}
                    bgGradient={theme.gradients.button[colorMode]}
                    _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
                  >
                    Download PDF
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
            Load More Papers
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default BrowsePapers; 