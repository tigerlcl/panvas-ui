import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Badge,
  useColorMode,
  useTheme,
  Link,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Grid,
  Progress,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import { 
  FiCoffee,
  FiFileText,
  FiUsers,
} from 'react-icons/fi';

const TaskEngagementCard = ({ title, stats, recentTasks }) => {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const getStatusColor = (status) => {
    const colors = {
      completed: "green",
      pending: "yellow",
      withdrawn: "red",
      rewarded: "purple"
    };
    return colors[status] || "gray";
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      bg={colorMode === 'light' ? 'white' : 'gray.700'}
    >
      <VStack align="stretch" spacing={4}>
        <Heading size="md">{title}</Heading>
        
        {/* Statistics */}
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <Stat>
            <StatLabel>Success Rate</StatLabel>
            <StatNumber color="green.400">{stats.successRate}%</StatNumber>
            <Progress value={stats.successRate} colorScheme="green" size="sm" mt={2} />
          </Stat>
          <Stat>
            <StatLabel>Total Tasks</StatLabel>
            <StatNumber>{stats.totalTasks}</StatNumber>
            <StatHelpText>{stats.activeNow} active now</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Avg. Response</StatLabel>
            <StatNumber>{stats.avgResponse}h</StatNumber>
            <StatHelpText>response time</StatHelpText>
          </Stat>
        </Grid>

        {/* Recent Tasks */}
        <Box>
          <Text fontSize="sm" fontWeight="medium" mb={2}>Recent Tasks</Text>
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>Task</Th>
                <Th>Type</Th>
                <Th>Status</Th>
                <Th>Time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {recentTasks.map((task, index) => (
                <Tr key={index}>
                  <Td>
                    <Link color={theme.semanticTokens.button[colorMode]}>
                      {task.title}
                    </Link>
                  </Td>
                  <Td>
                    <Tag size="sm" variant="subtle" colorScheme="blue">
                      <TagLeftIcon as={task.typeIcon} />
                      <TagLabel>{task.type}</TagLabel>
                    </Tag>
                  </Td>
                  <Td>
                    <Badge colorScheme={getStatusColor(task.status)}>
                      {task.status}
                    </Badge>
                  </Td>
                  <Td>
                    <Text fontSize="xs" color="gray.500">
                      {task.time}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

function RoomCredit() {

  // Sample data for helper activities
  const helperData = {
    stats: {
      successRate: 92,
      totalTasks: 24,
      activeNow: 3,
      avgResponse: 4
    },
    recentTasks: [
      {
        title: "Review ML Paper Draft",
        type: "Review",
        typeIcon: FiFileText,
        status: "completed",
        time: "2 days ago"
      },
      {
        title: "ML Survey Questions",
        type: "Survey",
        typeIcon: FiUsers,
        status: "pending",
        time: "1 day ago"
      },
      {
        title: "Test New Algorithm",
        type: "Experiment",
        typeIcon: FiCoffee,
        status: "completed",
        time: "3 days ago"
      }
    ]
  };

  // Sample data for requester activities
  const requesterData = {
    stats: {
      successRate: 85,
      totalTasks: 12,
      activeNow: 2,
      avgResponse: 6
    },
    recentTasks: [
      {
        title: "Need Review on CV Paper",
        type: "Review",
        typeIcon: FiFileText,
        status: "rewarded",
        time: "1 week ago"
      },
      {
        title: "Deep Learning Survey",
        type: "Survey",
        typeIcon: FiUsers,
        status: "pending",
        time: "2 days ago"
      },
      {
        title: "Model Testing Help",
        type: "Experiment",
        typeIcon: FiCoffee,
        status: "withdrawn",
        time: "5 days ago"
      }
    ]
  };

  return (
    <VStack spacing={8} align="stretch">
      {/* Helper Performance */}
      <TaskEngagementCard 
        title="Helper Performance" 
        stats={helperData.stats}
        recentTasks={helperData.recentTasks}
      />

      {/* Requester History */}
      <TaskEngagementCard 
        title="Requester History" 
        stats={requesterData.stats}
        recentTasks={requesterData.recentTasks}
      />
    </VStack>
  );
}

export default RoomCredit; 