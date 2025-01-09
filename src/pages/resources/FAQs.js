import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  useColorMode,
  useTheme,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FiHelpCircle,
  FiSearch,
  FiDollarSign,
  FiUsers,
  FiBookOpen,
  FiAward,
} from 'react-icons/fi';

// FAQ categories with their questions and answers
const faqCategories = [
  {
    title: "Getting Started",
    icon: FiUsers,
    faqs: [
      {
        question: "How do I create an account?",
        answer: "You can create an account by clicking the 'Sign In' button in the top right corner and selecting 'Create Account'. You'll need to provide your email address and create a password. Academic email addresses are preferred for verification purposes."
      },
      {
        question: "Is Panvas free to use?",
        answer: "Yes, Panvas is completely free to use! You can browse papers, participate in discussions, and earn PaperPoints without any cost. Some premium features may require spending your earned PaperPoints."
      },
      {
        question: "How do I verify my academic status?",
        answer: "After creating your account, you can verify your academic status by going to your profile settings and clicking 'Verify Academic Status'. You'll need to provide your institutional email address or upload relevant documentation."
      }
    ]
  },
  {
    title: "PaperPoint System",
    icon: FiAward,
    faqs: [
      {
        question: "What are PaperPoints?",
        answer: "PaperPoints are our platform's digital currency that you earn by contributing to the community through reviews, discussions, and other activities. They can be used for various features like requesting expert reviews or participating in carnival games."
      },
      {
        question: "How do I earn PaperPoints?",
        answer: "You can earn PaperPoints in multiple ways: writing paper reviews (50-200 points), participating in discussions (10-50 points), getting likes on your contributions (20 points), and completing collaborative projects (30-150 points)."
      },
      {
        question: "What can I spend PaperPoints on?",
        answer: "PaperPoints can be spent on requesting expert reviews (200-500 points), participating in carnival games (50-200 points), and boosting your paper's visibility (100-300 points)."
      }
    ]
  },
  {
    title: "Paper Reviews",
    icon: FiBookOpen,
    faqs: [
      {
        question: "How does the review process work?",
        answer: "When you submit a paper for review, it becomes available to qualified reviewers in your field. Reviewers can provide feedback, suggestions, and ratings. You can request specific types of reviews using your PaperPoints."
      },
      {
        question: "What makes a good review?",
        answer: "A good review is constructive, specific, and balanced. It should address both strengths and areas for improvement, provide concrete examples, and offer actionable suggestions. We encourage reviewers to follow our review guidelines for consistency."
      },
      {
        question: "How long should a review take?",
        answer: "The expected timeline for reviews varies by type: basic reviews typically take 3-5 days, while detailed expert reviews might take 7-10 days. You can see the estimated completion time when requesting a review."
      }
    ]
  },
  {
    title: "Payments & Rewards",
    icon: FiDollarSign,
    faqs: [
      {
        question: "Can I convert PaperPoints to real money?",
        answer: "No, PaperPoints cannot be converted to real currency. They are a platform-specific reward system designed to encourage and recognize valuable contributions to the academic community."
      },
      {
        question: "What happens to unused PaperPoints?",
        answer: "PaperPoints don't expire as long as your account remains active. However, if an account is inactive for more than 12 months, the points may be redistributed to active community members."
      },
      {
        question: "Are there any premium features?",
        answer: "Yes, some features like priority reviews, enhanced visibility, and special carnival events require PaperPoints. These features are designed to add value while maintaining fair access to core platform functionality."
      }
    ]
  }
];

function FAQs() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container maxW="container.xl" py={10}>
        {/* Header Section */}
        <VStack spacing={6} mb={16} textAlign="center">
          <Icon as={FiHelpCircle} boxSize={12} color={theme.semanticTokens.button[colorMode]} />
          <Heading
            size="2xl"
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
            letterSpacing="tight"
            py={2}
          >
            Frequently Asked Questions
          </Heading>
          <Text
            fontSize="xl"
            color={theme.semanticTokens.text[colorMode]}
            maxW="2xl"
            px={4}
          >
            Find answers to common questions about Panvas, our features, and how to make the most of the platform.
          </Text>
        </VStack>

        {/* Search Bar */}
        <Box maxW="2xl" mx="auto" mb={12}>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color={theme.semanticTokens.button[colorMode]} />
            </InputLeftElement>
            <Input 
              placeholder="Search frequently asked questions..."
              variant="filled"
              _focus={{
                borderColor: theme.semanticTokens.button[colorMode],
                boxShadow: 'none',
              }}
            />
          </InputGroup>
        </Box>

        {/* FAQ Categories */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {faqCategories.map((category, index) => (
            <Box key={index}>
              <Heading
                size="md"
                mb={4}
                display="flex"
                alignItems="center"
                color={theme.semanticTokens.text[colorMode]}
              >
                <Icon as={category.icon} mr={2} />
                {category.title}
              </Heading>
              <Accordion allowMultiple>
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} border="none" mb={2}>
                    <AccordionButton
                      bg={colorMode === 'light' ? 'white' : 'gray.700'}
                      _hover={{
                        bg: colorMode === 'light' ? 'gray.50' : 'gray.600'
                      }}
                      borderRadius="md"
                      shadow="sm"
                    >
                      <Box flex="1" textAlign="left" fontWeight="medium">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} px={4}>
                      {faq.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          ))}
        </SimpleGrid>

        {/* Contact Support */}
        <VStack spacing={4} mt={16} textAlign="center">
          <Text fontSize="lg" color={theme.semanticTokens.text[colorMode]}>
            Can't find what you're looking for?
          </Text>
          <Button
            colorScheme="blue"
            size="lg"
            bgGradient={theme.gradients.button[colorMode]}
            _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
          >
            Contact Support
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default FAQs; 