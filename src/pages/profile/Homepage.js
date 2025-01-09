import React from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Grid,
  Heading,
  Text,
  Avatar,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode,
  useTheme,
  Icon,
  Button,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  Divider,
  IconButton,
  Link,
  Tooltip,
} from '@chakra-ui/react';
import { 
  FiCreditCard, 
  FiActivity, 
  FiSettings, 
  FiBookOpen,
  FiAward,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiClock,
} from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import Wallet from './Wallet';
import Activities from './Activities';
import Settings from './Settings';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

// Review Card Component from homepage.js
const ReviewCard = ({ title, agreePercent, authorStatus, imageSrc }) => {
  const { colorMode } = useColorMode();
  
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
      position="relative"
    >
      <Box
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${imageSrc})`}
        bgSize="cover"
        bgPosition="center"
        h="150px"
        p={4}
        color="white"
      >
        <VStack align="flex-start" h="full" justify="flex-end">
          <Heading size="md">{title}</Heading>
          <HStack>
            <Text fontSize="lg" fontWeight="bold">{agreePercent}%</Text>
            <Text>agree</Text>
          </HStack>
          <HStack>
            <Text>author</Text>
            <Badge
              colorScheme={authorStatus === 'accept' ? 'green' : 'red'}
            >
              {authorStatus}
            </Badge>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

function Homepage() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  // User data from homepage.js
  const userData = {
    name: "Sequoia Joyce",
    isVerified: true,
    badges: [
      { label: "Rising Star", color: "orange" },
      { label: "First Paper", color: "green" },
      { label: "Active Reviewer", color: "blue" }
    ],
    affiliation: "University of California, Los Angeles",
    timezone: "UTC-8",
    bio: "First-year PhD student focusing on computer vision",
    tags: ["Deep Learning", "Computer Vision", "PyTorch"],
    social: {
      website: "www.google.com",
      github: "www.github.com/",
      twitter: "www.x.com/",
      linkedin: "www.linkedin.com/",
      email: ""
    },
    stats: {
      following: 45,
      followers: 28,
      reviews: 8,
      preprints: 2
    },
    reviews: {
      all: "75%",
      accepted: 6,
      rejected: 2
    },
    recentWorks: [
      {
        title: "Review for NeRF++",
        agreePercent: 88,
        authorStatus: "accept",
        imageSrc: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a"
      },
      {
        title: "Review for CLIP-Gen",
        agreePercent: 92,
        authorStatus: "accept",
        imageSrc: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
      },
      {
        title: "Review for DiffusionNet",
        agreePercent: 45,
        authorStatus: "reject",
        imageSrc: "https://images.unsplash.com/photo-1507413245164-6160d8298b31"
      },
      {
        title: "Review for StyleGAN3",
        agreePercent: 76,
        authorStatus: "accept",
        imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
      }
    ]
  };

  return (
    <Container maxW="container.xl" py={8}>
      {/* Profile Header */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        mb={8}
        bg={colorMode === 'light' ? 'white' : 'gray.700'}
      >
        <Grid templateColumns={{ base: "1fr", sm: "120px 1fr auto" }} gap={6}>
          <VStack spacing={4}>
            <Avatar 
              size="2xl" 
              src="https://i.pravatar.cc/300?img=23" 
              name={userData.name}
            />
          </VStack>
          <VStack align="start" spacing={3}>
            <HStack spacing={2} align="center">
              <Heading size="lg">{userData.name}</Heading>
              {userData.isVerified && (
                <Box display="inline-block" position="relative">
                  <Tooltip 
                    label="Verified Account" 
                    hasArrow 
                    placement="right"
                    offset={[-4, 8]}
                  >
                    <span>
                      <Icon 
                        as={FaCheckCircle} 
                        color="yellow.400" 
                        boxSize={6} 
                        position="relative"
                        top="1px"
                      />
                    </span>
                  </Tooltip>
                </Box>
              )}
            </HStack>
            <HStack spacing={2} flexWrap="wrap">
              {userData.badges.map((badge, index) => (
                <Badge
                  key={index}
                  colorScheme={badge.color}
                  variant="subtle"
                  px={2}
                  py={1}
                  borderRadius="full"
                >
                  {badge.label}
                </Badge>
              ))}
            </HStack>
            <HStack spacing={2} align="center">
              <Icon as={FiMapPin} color={colorMode === 'light' ? 'gray.600' : 'gray.400'} />
              <Text fontSize="lg" color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                {userData.affiliation}
              </Text>
              <Text color={colorMode === 'light' ? 'gray.400' : 'gray.500'}>•</Text>
              <Icon as={FiClock} color={colorMode === 'light' ? 'gray.600' : 'gray.400'} />
              <Text fontSize="md" color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                {userData.timezone}
              </Text>
            </HStack>
            <Text>{userData.bio}</Text>
            <HStack spacing={2}>
              {userData.tags.map((tag, index) => (
                <Badge key={index} colorScheme="blue" fontSize="sm">
                  {tag}
                </Badge>
              ))}
            </HStack>
            <HStack spacing={2} pt={2}>
              {userData.social.website && (
                <IconButton
                  as={Link}
                  href={userData.social.website}
                  isExternal
                  aria-label="Website"
                  icon={<FiGlobe />}
                  variant="ghost"
                  size="sm"
                />
              )}
              {userData.social.github && (
                <IconButton
                  as={Link}
                  href={userData.social.github}
                  isExternal
                  aria-label="GitHub"
                  icon={<FiGithub />}
                  variant="ghost"
                  size="sm"
                />
              )}
              {userData.social.twitter && (
                <IconButton
                  as={Link}
                  href={userData.social.twitter}
                  isExternal
                  aria-label="Twitter"
                  icon={<FiTwitter />}
                  variant="ghost"
                  size="sm"
                />
              )}
              {userData.social.linkedin && (
                <IconButton
                  as={Link}
                  href={userData.social.linkedin}
                  isExternal
                  aria-label="LinkedIn"
                  icon={<FiLinkedin />}
                  variant="ghost"
                  size="sm"
                />
              )}
              {userData.social.email && (
                <IconButton
                  as={Link}
                  href={userData.social.email}
                  aria-label="Email"
                  icon={<FiMail />}
                  variant="ghost"
                  size="sm"
                />
              )}
            </HStack>
          </VStack>
          <MotionButton
            color={'white'}
            bgGradient={theme.gradients.button[colorMode]}
            _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            shadow="lg"
            size="lg"
          >
            Following
          </MotionButton>
        </Grid>
      </Box>

      {/* Profile Tabs */}
      <Tabs variant="enclosed" colorScheme="blue">
        <TabList>
          <Tab><HStack><Icon as={FiBookOpen} /><Text>Portfolio</Text></HStack></Tab>
          <Tab><HStack><Icon as={FiCreditCard} /><Text>Wallet</Text></HStack></Tab>
          <Tab><HStack><Icon as={FiActivity} /><Text>Activities</Text></HStack></Tab>
          <Tab><HStack><Icon as={FiSettings} /><Text>Settings</Text></HStack></Tab>
        </TabList>

        <TabPanels>
          {/* Portfolio Tab */}
          <TabPanel>
            <VStack spacing={8} align="stretch">
              {/* Academic Stats */}
              <Box
                borderWidth="1px"
                borderRadius="lg"
                p={6}
                bg={colorMode === 'light' ? 'white' : 'gray.700'}
              >
                <VStack align="stretch" spacing={4}>
                  <HStack>
                    <Icon as={FiAward} boxSize={6} color={theme.semanticTokens.button[colorMode]} />
                    <Heading size="md">Academic Impact</Heading>
                  </HStack>
                  <Grid 
                    templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} 
                    gap={4}
                  >
                    <Stat>
                      <StatLabel>Following</StatLabel>
                      <StatNumber>{userData.stats.following}</StatNumber>
                    </Stat>
                    <Stat>
                      <StatLabel>Followers</StatLabel>
                      <StatNumber>{userData.stats.followers}</StatNumber>
                    </Stat>
                    <Stat>
                      <StatLabel>Reviews</StatLabel>
                      <StatNumber>{userData.stats.reviews}</StatNumber>
                    </Stat>
                    <Stat>
                      <StatLabel>Preprints</StatLabel>
                      <StatNumber>{userData.stats.preprints}</StatNumber>
                    </Stat>
                  </Grid>
                </VStack>
              </Box>

              {/* Review Profile */}
              <Box
                borderWidth="1px"
                borderRadius="lg"
                p={6}
                bg={colorMode === 'light' ? 'white' : 'gray.700'}
              >
                <VStack align="stretch" spacing={4}>
                  <Heading size="md">Review Profile</Heading>
                  <HStack spacing={4}>
                    <Stat>
                      <StatLabel>All Reviews</StatLabel>
                      <StatNumber color="yellow.400">{userData.reviews.all}</StatNumber>
                    </Stat>
                    <Stat>
                      <StatLabel>Accepted</StatLabel>
                      <StatNumber color="green.400">{userData.reviews.accepted}</StatNumber>
                    </Stat>
                    <Stat>
                      <StatLabel>Rejected</StatLabel>
                      <StatNumber color="red.400">{userData.reviews.rejected}</StatNumber>
                    </Stat>
                  </HStack>
                  <Divider />
                  <Box>
                    <Heading size="sm" mb={4}>Recent Reviews</Heading>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={4}>
                      {userData.recentWorks.map((work, index) => (
                        <ReviewCard key={index} {...work} />
                      ))}
                    </Grid>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </TabPanel>

          {/* Other Tabs */}
          <TabPanel>
            <Wallet />
          </TabPanel>
          <TabPanel>
            <Activities />
          </TabPanel>
          <TabPanel>
            <Settings />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default Homepage; 