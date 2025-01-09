import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Image,
  useColorMode,
  useTheme,
  Link,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const MotionBox = motion(Box);

// Team members data - you can easily update this array to add/modify team members
const teamMembers = [
  {
    name: "Team Member 1",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/400?img=12",
    bio: "Brief introduction about the team member's background and expertise.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@email.com"
    }
  },
  {
    name: "Team Member 2",
    role: "CTO",
    image: "https://i.pravatar.cc/400?img=56",
    bio: "Brief introduction about the team member's background and expertise.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@email.com"
    }
  },
  {
    name: "Team Member 3",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/400?img=7",
    bio: "Brief introduction about the team member's background and expertise.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@email.com"
    }
  },
  {
    name: "Team Member 4",
    role: "Product Manager",
    image: "https://i.pravatar.cc/400?img=45",
    bio: "Brief introduction about the team member's background and expertise.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@email.com"
    }
  },
  {
    name: "Team Member 5",
    role: "UX Designer",
    image: "https://i.pravatar.cc/400?img=31",
    bio: "Brief introduction about the team member's background and expertise.",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@email.com"
    }
  },
];

const TeamMemberCard = ({ member }) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      borderRadius="lg"
      overflow="hidden"
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
      shadow="xl"
      w="100%"
    >
      <Image
        src={member.image}
        alt={member.name}
        w="100%"
        h="200px"
        objectFit="cover"
      />
      <VStack p={4} align="start" spacing={2}>
        <Heading size="sm" color={theme.semanticTokens.text[colorMode]}>
          {member.name}
        </Heading>
        <Text
          color={theme.semanticTokens.text[colorMode]}
          fontSize="xs"
          fontWeight="bold"
        >
          {member.role}
        </Text>
        <Text 
          color={theme.semanticTokens.text[colorMode]}
          fontSize="sm"
          noOfLines={2}
        >
          {member.bio}
        </Text>
        <HStack spacing={4}>
          <Link href={member.links.github} isExternal>
            <Icon as={FiGithub} boxSize={4} />
          </Link>
          <Link href={member.links.linkedin} isExternal>
            <Icon as={FiLinkedin} boxSize={4} />
          </Link>
          <Link href={member.links.email}>
            <Icon as={FiMail} boxSize={4} />
          </Link>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

function Team() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container maxW="container.xl" py={10}>
        {/* Header Section */}
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading
            size="2xl"
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
          >
            Our Team
          </Heading>
          <Text
            fontSize="xl"
            color={theme.semanticTokens.text[colorMode]}
            maxW="2xl"
          >
            Meet the passionate individuals behind Panvas who are dedicated to revolutionizing academic collaboration.
          </Text>
        </VStack>

        {/* Team Members Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
          spacing={4}
          px={{ base: 4, md: 8 }}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </SimpleGrid>

        {/* Vision Section */}
        <VStack spacing={6} mt={16} textAlign="center">
          <Heading
            size="xl"
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
          >
            Our Vision
          </Heading>
          <Text
            fontSize="lg"
            color={theme.semanticTokens.text[colorMode]}
            maxW="3xl"
          >
            At Panvas, we envision a future where academic collaboration knows no bounds. 
            Our platform bridges the gap between researchers, making knowledge sharing and 
            peer review more accessible, efficient, and rewarding than ever before.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Team; 