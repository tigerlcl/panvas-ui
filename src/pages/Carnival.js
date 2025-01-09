import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  Icon,
  useColorMode,
  useTheme,
  Card,
  CardBody,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FiGift,
  FiTrendingUp,
  FiClock,
  FiUsers,
  FiAward,
  FiBarChart2
} from 'react-icons/fi';

const MotionCard = motion(Card);

// Sample data for betting games
const games = [
  {
    id: 1,
    type: 'Paper Decision',
    title: 'Will this ML paper be accepted?',
    description: 'Predict if "Deep Learning in Healthcare" will be accepted in Nature AI',
    deadline: '2 days',
    totalPool: 2500,
    participants: 48,
    odds: {
      accept: 65,
      reject: 35
    },
    minBet: 50,
    maxBet: 200,
    players: [
      { name: 'User 1', avatar: 'https://i.pravatar.cc/150?img=21' },
      { name: 'User 2', avatar: 'https://i.pravatar.cc/150?img=22' },
      { name: 'User 3', avatar: 'https://i.pravatar.cc/150?img=23' },
      { name: 'User 4', avatar: 'https://i.pravatar.cc/150?img=24' },
      { name: 'User 5', avatar: 'https://i.pravatar.cc/150?img=25' },
    ]
  },
  {
    id: 2,
    type: 'Citation Prediction',
    title: 'Citation Count Betting',
    description: 'Predict the 6-month citation count for "Quantum Computing Advances"',
    deadline: '5 days',
    totalPool: 1800,
    participants: 32,
    odds: {
      high: 40,
      medium: 35,
      low: 25
    },
    minBet: 30,
    maxBet: 150,
    players: [
      { name: 'User 6', avatar: 'https://i.pravatar.cc/150?img=26' },
      { name: 'User 7', avatar: 'https://i.pravatar.cc/150?img=27' },
      { name: 'User 8', avatar: 'https://i.pravatar.cc/150?img=28' },
    ]
  },
  {
    id: 3,
    type: 'Review Quality',
    title: 'Best Review Competition',
    description: 'Vote for the most helpful review of the week and win rewards',
    deadline: '3 days',
    totalPool: 1000,
    participants: 25,
    minBet: 20,
    maxBet: 100,
    players: [
      { name: 'User 9', avatar: 'https://i.pravatar.cc/150?img=29' },
      { name: 'User 10', avatar: 'https://i.pravatar.cc/150?img=30' },
      { name: 'User 11', avatar: 'https://i.pravatar.cc/150?img=31' },
      { name: 'User 12', avatar: 'https://i.pravatar.cc/150?img=32' },
    ]
  }
];

const GameCard = ({ game }) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <MotionCard
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
      shadow="xl"
    >
      <CardBody>
        <VStack align="start" spacing={4}>
          <HStack justify="space-between" w="100%">
            <Badge 
              colorScheme={
                game.type === 'Paper Decision' ? 'blue' :
                game.type === 'Citation Prediction' ? 'green' :
                'purple'
              }
              fontSize="sm"
              px={2}
              py={1}
              borderRadius="md"
            >
              {game.type}
            </Badge>
            <HStack>
              <Icon as={FiClock} />
              <Text fontSize="sm">{game.deadline} left</Text>
            </HStack>
          </HStack>

          <Heading size="md" color={theme.semanticTokens.text[colorMode]}>
            {game.title}
          </Heading>

          <Text color={theme.semanticTokens.text[colorMode]}>
            {game.description}
          </Text>

          {game.odds && (
            <Box w="100%">
              {game.type === 'Paper Decision' ? (
                <>
                  <HStack justify="space-between" mb={2}>
                    <Text fontSize="sm">Accept ({game.odds.accept}%)</Text>
                    <Text fontSize="sm">Reject ({game.odds.reject}%)</Text>
                  </HStack>
                  <Progress 
                    value={game.odds.accept}
                    colorScheme="green"
                    borderRadius="full"
                  />
                </>
              ) : (
                <HStack spacing={4}>
                  <Stat>
                    <StatLabel>High</StatLabel>
                    <StatNumber>{game.odds.high}%</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Medium</StatLabel>
                    <StatNumber>{game.odds.medium}%</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Low</StatLabel>
                    <StatNumber>{game.odds.low}%</StatNumber>
                  </Stat>
                </HStack>
              )}
            </Box>
          )}

          <HStack justify="space-between" w="100%">
            <AvatarGroup size="sm" max={3}>
              {game.players.map((player, index) => (
                <Avatar
                  key={index}
                  name={player.name}
                  src={player.avatar}
                />
              ))}
            </AvatarGroup>
            <HStack>
              <Icon as={FiUsers} />
              <Text fontSize="sm">{game.participants} players</Text>
            </HStack>
          </HStack>

          <HStack justify="space-between" w="100%">
            <Text fontSize="sm" color={theme.semanticTokens.text[colorMode]}>
              Bet Range: {game.minBet}-{game.maxBet} points
            </Text>
            <HStack>
              <Icon as={FiAward} color={theme.semanticTokens.button[colorMode]} />
              <Text 
                fontWeight="bold" 
                color={theme.semanticTokens.button[colorMode]}
              >
                Pool: {game.totalPool}
              </Text>
            </HStack>
          </HStack>

          <Button
            w="100%"
            colorScheme="blue"
            bgGradient={theme.gradients.button[colorMode]}
            _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
          >
            Place Bet
          </Button>
        </VStack>
      </CardBody>
    </MotionCard>
  );
};

function Carnival() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Container maxW="container.xl" py={10}>
        {/* Header Section */}
        <VStack spacing={4} mb={12} textAlign="center">
          <Icon as={FiGift} boxSize={10} color={theme.semanticTokens.button[colorMode]} />
          <Heading
            size="2xl"
            bgGradient={theme.gradients.button[colorMode]}
            bgClip="text"
          >
            Research Carnival
          </Heading>
          <Text
            fontSize="xl"
            color={theme.semanticTokens.text[colorMode]}
            maxW="2xl"
          >
            Make predictions, place bets, and win rewards while engaging with academic research in a fun way!
          </Text>
        </VStack>

        {/* Stats Section */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={12}>
          <Stat
            px={6}
            py={4}
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            shadow="xl"
            borderRadius="lg"
          >
            <StatLabel>Total Prize Pool</StatLabel>
            <StatNumber color={theme.semanticTokens.button[colorMode]}>5,300</StatNumber>
            <StatHelpText>
              <Icon as={FiTrendingUp} /> Active Points
            </StatHelpText>
          </Stat>
          <Stat
            px={6}
            py={4}
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            shadow="xl"
            borderRadius="lg"
          >
            <StatLabel>Active Players</StatLabel>
            <StatNumber color={theme.semanticTokens.button[colorMode]}>105</StatNumber>
            <StatHelpText>
              <Icon as={FiUsers} /> Current Games
            </StatHelpText>
          </Stat>
          <Stat
            px={6}
            py={4}
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            shadow="xl"
            borderRadius="lg"
          >
            <StatLabel>Success Rate</StatLabel>
            <StatNumber color={theme.semanticTokens.button[colorMode]}>68%</StatNumber>
            <StatHelpText>
              <Icon as={FiBarChart2} /> Average Win Rate
            </StatHelpText>
          </Stat>
        </SimpleGrid>

        {/* Games Grid */}
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Carnival; 