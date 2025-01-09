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
  IconButton,
  Link,
  Tooltip,
} from '@chakra-ui/react';
import { 
  FiCreditCard, 
  FiBox, 
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
  FiEdit2,
  FiFileText,
  FiHelpCircle,
} from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import Wallet from './Wallet';
import Participation from './Participation';
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
      { 
        label: "Rising Star", 
        color: "orange",
        description: "Top 10% new contributors"
      },
      { 
        label: "First Paper", 
        color: "green",
        description: "Published first paper"
      },
      { 
        label: "Active Reviewer", 
        color: "blue",
        description: "8+ quality reviews"
      }
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
    timeline: [
      {
        title: "Started PhD Program",
        time: "2 days ago",
        type: "status",
        content: "Excited to start my PhD journey at UCLA's Computer Science Department!",
        icon: FiBookOpen,
        iconBg: "blue.500"
      },
      {
        title: "Paper Review Completed",
        time: "1 week ago",
        type: "paper",
        content: "Reviewed 'Advanced Techniques in Neural Rendering' - provided detailed feedback on methodology and experiments.",
        status: "completed",
        icon: FiFileText,
        iconBg: "purple.500"
      },
      {
        title: "Won Weekly Challenge",
        time: "2 weeks ago",
        type: "carnival",
        content: "Achieved highest score in the Computer Vision Quiz Challenge!",
        icon: FiAward,
        iconBg: "green.500"
      },
      {
        title: "Helped Debug Model",
        time: "3 weeks ago",
        type: "help",
        content: "Assisted in debugging a transformer architecture implementation",
        status: "solved",
        icon: FiHelpCircle,
        iconBg: "orange.500"
      },
      {
        title: "Relocated",
        time: "1 month ago",
        type: "status",
        content: "Moved from Berkeley to Los Angeles to join UCLA",
        icon: FiMapPin,
        iconBg: "red.500"
      },
      {
        title: "Published First Paper",
        time: "2 months ago",
        type: "paper",
        content: "My paper on 'Efficient Neural Rendering' was accepted at SIGGRAPH 2024!",
        status: "completed",
        icon: FiFileText,
        iconBg: "purple.500"
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
            <HStack spacing={6}>
              <HStack spacing={2}>
                <Text fontWeight="semibold">{userData.stats.following}</Text>
                <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>Following</Text>
              </HStack>
              <Text color={colorMode === 'light' ? 'gray.300' : 'gray.600'}>•</Text>
              <HStack spacing={2}>
                <Text fontWeight="semibold">{userData.stats.followers}</Text>
                <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>Followers</Text>
              </HStack>
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
          <Tab><HStack><Icon as={FiBox} /><Text>Participation</Text></HStack></Tab>
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
                    <Heading size="md">Badges</Heading>
                  </HStack>
                  <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
                    {userData.badges.map((badge, index) => (
                      <HStack 
                        key={index}
                        p={3}
                        borderWidth="1px"
                        borderRadius="lg"
                        spacing={3}
                        bg={colorMode === 'light' ? 'white' : 'gray.600'}
                      >
                        <Icon 
                          as={FiAward} 
                          color={`${badge.color}.400`}
                          boxSize={5}
                        />
                        <VStack spacing={0} align="start">
                          <Text fontWeight="medium">{badge.label}</Text>
                          <Text fontSize="xs" color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                            {badge.description || 'Achievement unlocked'}
                          </Text>
                        </VStack>
                      </HStack>
                    ))}
                  </Grid>
                </VStack>
              </Box>

              {/* Recent Activities */}
              <Box
                borderWidth="1px"
                borderRadius="lg"
                p={6}
                bg={colorMode === 'light' ? 'white' : 'gray.700'}
              >
                <VStack align="stretch" spacing={6}>
                  <HStack justify="space-between">
                    <HStack>
                      <Icon as={FiBox} boxSize={6} color={theme.semanticTokens.button[colorMode]} />
                      <Heading size="md">Recent Activities</Heading>
                    </HStack>
                    <Button 
                      size="sm" 
                      leftIcon={<Icon as={FiEdit2} />}
                      variant="outline"
                    >
                      Add Update
                    </Button>
                  </HStack>

                  {/* Timeline */}
                  <VStack align="stretch" spacing={0}>
                    {userData.timeline && userData.timeline.map((item, index) => (
                      <HStack 
                        key={index} 
                        spacing={4} 
                        position="relative" 
                        pb={4}
                      >
                        {/* Timeline line */}
                        {index !== userData.timeline.length - 1 && (
                          <Box
                            position="absolute"
                            left="16px"
                            top="32px"
                            bottom="-4px"
                            width="2px"
                            bg={colorMode === 'light' ? 'gray.100' : 'gray.600'}
                          />
                        )}
                        
                        {/* Timeline content */}
                        <Box position="relative" zIndex={1}>
                          <Icon 
                            as={item.icon} 
                            boxSize={8}
                            p={1.5}
                            borderRadius="full"
                            color="white"
                            bg={item.iconBg || theme.semanticTokens.button[colorMode]}
                          />
                        </Box>
                        
                        <VStack align="start" spacing={1} flex={1} pt={1}>
                          <Text fontWeight="semibold" fontSize="lg">{item.title}</Text>
                          <Box 
                            width="full"
                            bg="transparent"
                          >
                            <Text mb={item.type !== 'status' ? 2 : 0}>{item.content}</Text>
                            {item.type === 'paper' && (
                              <HStack spacing={2}>
                                <Badge variant="subtle" colorScheme="purple">PAPER REVIEW</Badge>
                                <Badge variant="subtle" colorScheme={item.status === 'completed' ? 'green' : 'yellow'}>
                                  {item.status.toUpperCase()}
                                </Badge>
                              </HStack>
                            )}
                            {item.type === 'help' && (
                              <HStack spacing={2}>
                                <Badge variant="subtle" colorScheme="orange">HELP WANTED</Badge>
                                <Badge variant="subtle" colorScheme={item.status === 'solved' ? 'green' : 'yellow'}>
                                  {item.status.toUpperCase()}
                                </Badge>
                              </HStack>
                            )}
                            {item.type === 'carnival' && (
                              <Badge variant="subtle" colorScheme="green">CARNIVAL ACHIEVEMENT</Badge>
                            )}
                            <Text fontSize="sm" color="gray.500" mt={2}>
                              {item.time}
                            </Text>
                          </Box>
                        </VStack>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </TabPanel>

          {/* Other Tabs */}
          <TabPanel>
            <Wallet />
          </TabPanel>
          <TabPanel>
            <Participation />
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