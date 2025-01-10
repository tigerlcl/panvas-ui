import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  Button,
  Icon,
  useColorMode,
  Avatar,
  Input,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { 
  FiClock,
  FiAward,
  FiSend,
  FiArrowLeft,
  FiThumbsUp,
  FiThumbsDown,
  FiDownload,
  FiExternalLink,
  FiEye,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// Demo paper data
const paperData = {
  id: "2023.01",
  title: "Need feedback on our verification framework for generative AI",
  owner: {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=60",
    role: "PhD Student at University of California"
  },
  collaborators: [
    {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=44",
      role: "Research Scientist"
    }
  ],
  metadata: {
    paperTitle: "VerifAI: Verified Generative AI",
    description: "We've developed a framework for verifying and validating generative AI models. The paper introduces novel techniques for testing model outputs and ensuring data quality.",
    request: "Looking for feedback on our methodology and potential gaps in our verification approach. Particularly interested in thoughts on scalability and real-world applicability."
  },
  timeLimit: 345600, // 4 days in seconds
  paperCoins: 50,
  views: 15,
  resources: [
    {
      type: "pdf",
      name: "VerifAI_Draft_v1.pdf",
      url: "#"
    },
    {
      type: "link",
      name: "Project Repository",
      url: "https://github.com/verifai"
    }
  ],
  comments: [
    {
      id: 1,
      author: "Michael Brown",
      avatar: "https://i.pravatar.cc/150?img=33",
      content: "The verification framework looks promising. Have you considered edge cases where the model generates syntactically correct but semantically meaningless output?",
      timestamp: "5 hours ago",
      upvotes: 12,
      downvotes: 2
    },
    {
      id: 2,
      author: "Emma Wilson",
      avatar: "https://i.pravatar.cc/150?img=45",
      content: "Excellent methodology for ensuring AI system reliability. Would love to see this applied to multimodal models.",
      timestamp: "3 hours ago",
      upvotes: 8,
      downvotes: 1
    }
  ]
};

function SpacePaper() {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(paperData.timeLimit);
  const [comments, setComments] = useState(paperData.comments);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${days}d:${hours.toString().padStart(2, '0')}h:${minutes.toString().padStart(2, '0')}m:${remainingSeconds.toString().padStart(2, '0')}s`;
  };

  const handleVote = (commentId, isUpvote) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        if (isUpvote) {
          return { ...comment, upvotes: comment.upvotes + 1 };
        } else {
          return { ...comment, downvotes: comment.downvotes + 1 };
        }
      }
      return comment;
    }));
  };

  return (
    <Container maxW="container.xl" py={4}>
      {/* Back Button */}
      <Button
        leftIcon={<FiArrowLeft />}
        mb={4}
        onClick={() => navigate('/preview')}
        variant="ghost"
        size="sm"
      >
        Back to Preview Space
      </Button>

      <VStack spacing={4} align="stretch">
        {/* Title & Metadata */}
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          bg={colorMode === 'light' ? 'white' : 'gray.700'}
        >
          {/* Header Section */}
          <HStack justify="space-between" mb={3}>
            <VStack align="start" spacing={1}>
              <Heading size="md">{paperData.title}</Heading>
              <Text fontSize="sm" color="gray.500">{paperData.metadata.paperTitle}</Text>
            </VStack>
            <HStack spacing={4}>
              <Badge
                colorScheme="purple"
                px={3}
                py={1}
                borderRadius="full"
                display="flex"
                alignItems="center"
              >
                <Icon as={FiAward} mr={1} />
                {paperData.paperCoins} PC
              </Badge>
              <Badge
                colorScheme="blue"
                px={3}
                py={1}
                borderRadius="full"
                display="flex"
                alignItems="center"
              >
                <Icon as={FiEye} mr={1} />
                {paperData.views}
              </Badge>
            </HStack>
          </HStack>

          {/* Owner & Time Info */}
          <HStack 
            justify="space-between" 
            mb={3} 
            pb={3}
            borderBottomWidth="1px"
          >
            {/* Owner & Collaborators */}
            <HStack spacing={3}>
              <HStack spacing={2}>
                <Avatar size="xs" src={paperData.owner.avatar} name={paperData.owner.name} />
                <VStack align="start" spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">{paperData.owner.name}</Text>
                  <Text fontSize="xs" color="gray.500">{paperData.owner.role}</Text>
                </VStack>
              </HStack>
              {paperData.collaborators.map((collab, index) => (
                <HStack key={index} spacing={2}>
                  <Avatar size="xs" src={collab.avatar} name={collab.name} />
                  <VStack align="start" spacing={0}>
                    <Text fontSize="sm" fontWeight="medium">{collab.name}</Text>
                    <Text fontSize="xs" color="gray.500">{collab.role}</Text>
                  </VStack>
                </HStack>
              ))}
            </HStack>
            {/* Time Counter */}
            <HStack>
              <Icon as={FiClock} color="orange.400" />
              <Text
                fontSize="sm"
                fontWeight="bold"
                fontFamily="mono"
                color={timeLeft < 86400 ? "red.400" : "orange.400"}
              >
                {formatTime(timeLeft)}
              </Text>
            </HStack>
          </HStack>

          {/* Content Section */}
          <VStack align="start" spacing={2}>
            <Text fontSize="sm" lineHeight="tall">{paperData.metadata.description}</Text>
            <Box 
              w="100%" 
              p={3} 
              bg={colorMode === 'light' ? 'blue.50' : 'blue.900'} 
              borderRadius="md"
              mt={2}
            >
              <Text fontSize="sm" fontWeight="medium" color={colorMode === 'light' ? 'blue.600' : 'blue.200'}>
                Request: {paperData.metadata.request}
              </Text>
            </Box>
          </VStack>

          {/* Resources */}
          <HStack mt={4} spacing={3}>
            {paperData.resources.map((resource, index) => (
              <Button
                key={index}
                size="sm"
                variant="outline"
                leftIcon={resource.type === 'pdf' ? <FiDownload /> : <FiExternalLink />}
                as={Link}
                href={resource.url}
                isExternal
              >
                {resource.name}
              </Button>
            ))}
          </HStack>
        </Box>

        {/* Comments */}
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          bg={colorMode === 'light' ? 'white' : 'gray.700'}
        >
          <HStack justify="space-between" mb={4}>
            <Heading size="sm">Comments</Heading>
            <Text fontSize="sm" color="gray.500">{comments.length} responses</Text>
          </HStack>
          <VStack align="stretch" spacing={3}>
            {comments.map((comment) => (
              <Box
                key={comment.id}
                p={3}
                borderWidth="1px"
                borderRadius="md"
                position="relative"
              >
                <HStack spacing={2} mb={2}>
                  <Avatar size="xs" src={comment.avatar} name={comment.author} />
                  <VStack align="start" spacing={0}>
                    <Text fontSize="sm" fontWeight="medium">{comment.author}</Text>
                    <Text fontSize="xs" color="gray.500">{comment.timestamp}</Text>
                  </VStack>
                </HStack>
                <Text fontSize="sm" mb={2}>{comment.content}</Text>
                <HStack>
                  <HStack spacing={3}>
                    <HStack spacing={1}>
                      <IconButton
                        icon={<FiThumbsUp />}
                        aria-label="Upvote"
                        variant="ghost"
                        size="xs"
                        onClick={() => handleVote(comment.id, true)}
                      />
                      <Text fontSize="sm">{comment.upvotes}</Text>
                    </HStack>
                    <HStack spacing={1}>
                      <IconButton
                        icon={<FiThumbsDown />}
                        aria-label="Downvote"
                        variant="ghost"
                        size="xs"
                        onClick={() => handleVote(comment.id, false)}
                      />
                      <Text fontSize="sm">{comment.downvotes}</Text>
                    </HStack>
                  </HStack>
                </HStack>
              </Box>
            ))}
            
            {/* Add Comment Input */}
            <HStack spacing={2}>
              <Input placeholder="Add a comment..." size="sm" />
              <IconButton
                icon={<FiSend />}
                aria-label="Send comment"
                colorScheme="blue"
                size="sm"
              />
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default SpacePaper; 