import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  StatGroup,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorMode,
  useTheme,
  Icon,
} from '@chakra-ui/react';
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';

function Wallet() {
  const { colorMode } = useColorMode();
  const theme = useTheme();

  const transactions = [
    {
      id: 1,
      type: 'earn',
      amount: 50,
      description: 'Review accepted for AFlow paper',
      date: '2024-01-15',
      service: 'Forum Discussion'
    },
    {
      id: 2,
      type: 'cost',
      amount: 20,
      description: 'Posted help wanted request',
      date: '2024-01-14',
      service: 'Help Wanted'
    },
    {
      id: 3,
      type: 'earn',
      amount: 30,
      description: 'Carnival game completion',
      date: '2024-01-13',
      service: 'Carnival'
    },
    {
      id: 4,
      type: 'cost',
      amount: 15,
      description: 'Preprint submission',
      date: '2024-01-12',
      service: 'Preprint Hub'
    },
  ];

  return (
    <VStack spacing={8} align="stretch">
      {/* Balance Overview */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        bg={colorMode === 'light' ? 'white' : 'gray.700'}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="md">PaperPoints Balance</Heading>
          <StatGroup>
            <Stat>
              <StatLabel fontSize="lg">Current Balance</StatLabel>
              <StatNumber fontSize="4xl" color={theme.semanticTokens.button[colorMode]}>
                245 PP
              </StatNumber>
            </Stat>
            <Stat>
              <StatLabel fontSize="lg">This Month</StatLabel>
              <StatNumber color="green.400">
                <StatArrow type="increase" />
                80 PP
              </StatNumber>
              <Text fontSize="sm" color="gray.500">Earned</Text>
            </Stat>
            <Stat>
              <StatLabel fontSize="lg">This Month</StatLabel>
              <StatNumber color="red.400">
                <StatArrow type="decrease" />
                35 PP
              </StatNumber>
              <Text fontSize="sm" color="gray.500">Spent</Text>
            </Stat>
          </StatGroup>
        </VStack>
      </Box>

      {/* Recent Transactions */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        bg={colorMode === 'light' ? 'white' : 'gray.700'}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="md">Recent Transactions</Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Description</Th>
                  <Th>Service</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactions.map((transaction) => (
                  <Tr key={transaction.id}>
                    <Td>{transaction.date}</Td>
                    <Td>
                      <HStack>
                        <Icon
                          as={transaction.type === 'earn' ? FiArrowUpRight : FiArrowDownLeft}
                          color={transaction.type === 'earn' ? 'green.500' : 'red.500'}
                        />
                        <Text>{transaction.description}</Text>
                      </HStack>
                    </Td>
                    <Td>
                      <Badge colorScheme="blue">
                        {transaction.service}
                      </Badge>
                    </Td>
                    <Td isNumeric>
                      <Text
                        color={transaction.type === 'earn' ? 'green.500' : 'red.500'}
                        fontWeight="bold"
                      >
                        {transaction.type === 'earn' ? '+' : '-'}{transaction.amount} PP
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </Box>
    </VStack>
  );
}

export default Wallet; 