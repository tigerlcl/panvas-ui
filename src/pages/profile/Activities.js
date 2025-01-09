import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  Icon,
  Divider,
  useColorMode,
  useTheme,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FiMessageSquare, 
  FiFileText, 
  FiHelpCircle, 
  FiAward,
  FiClock 
} from 'react-icons/fi';

const ActivityItem = ({ icon, title, description, time, service, link }) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const serviceColors = {
    'Forum Discussion': 'blue',
    'Preprint Hub': 'purple',
    'Help Wanted': 'orange',
    'Carnival': 'green'
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
    >
      <HStack spacing={4} align="flex-start">
        <Icon 
          as={icon} 
          boxSize={5}
          color={theme.semanticTokens.button[colorMode]}
          mt={1}
        />
        <VStack align="stretch" spacing={2} flex={1}>
          <HStack justify="space-between" align="flex-start">
            <VStack align="start" spacing={1}>
              <Link
                as={RouterLink}
                to={link}
                fontWeight="medium"
                _hover={{ color: theme.semanticTokens.button[colorMode] }}
              >
                {title}
              </Link>
              <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                {description}
              </Text>
            </VStack>
            <HStack spacing={2} align="center">
              <Badge colorScheme={serviceColors[service]}>
                {service}
              </Badge>
              <HStack spacing={1} color={colorMode === 'light' ? 'gray.500' : 'gray.400'}>
                <Icon as={FiClock} boxSize={3} />
                <Text fontSize="xs">{time}</Text>
              </HStack>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

function Activities() {
  const { colorMode } = useColorMode();

  const activities = [
    {
      icon: FiMessageSquare,
      title: "Commented on 'Deep Learning Advances in 2024'",
      description: "Great insights on transformer architectures!",
      time: "2 hours ago",
      service: "Forum Discussion",
      link: "/community"
    },
    {
      icon: FiFileText,
      title: "Submitted a new preprint",
      description: "Neural Networks in Computer Vision: A Survey",
      time: "1 day ago",
      service: "Preprint Hub",
      link: "/browse"
    },
    {
      icon: FiHelpCircle,
      title: "Posted a help request",
      description: "Looking for collaborators on ML project",
      time: "2 days ago",
      service: "Help Wanted",
      link: "/help-wanted"
    },
    {
      icon: FiAward,
      title: "Won the weekly challenge",
      description: "Completed the AI Quiz with perfect score",
      time: "3 days ago",
      service: "Carnival",
      link: "/carnival"
    }
  ];

  return (
    <VStack spacing={8} align="stretch">
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        bg={colorMode === 'light' ? 'white' : 'gray.700'}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="md">Recent Activities</Heading>
          <VStack spacing={4} align="stretch">
            {activities.map((activity, index) => (
              <React.Fragment key={index}>
                <ActivityItem {...activity} />
                {index < activities.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </VStack>
        </VStack>
      </Box>
    </VStack>
  );
}

export default Activities; 