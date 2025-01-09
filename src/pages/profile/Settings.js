import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Select,
  Divider,
  useColorMode,
  useTheme,
  Avatar,
  IconButton,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FiEdit2, FiSave, FiPlus } from 'react-icons/fi';

function Settings() {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState([
    'Computer Science',
    'Edge Computing',
    'AI Agent'
  ]);

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <VStack spacing={8} align="stretch">
      {/* Profile Settings */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        bg={colorMode === 'light' ? 'white' : 'gray.700'}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="md">Profile Settings</Heading>
          <HStack spacing={6} align="flex-start">
            <VStack spacing={4}>
              <Avatar 
                size="2xl" 
                src="https://i.pravatar.cc/300?img=50" 
                name="Dr. Smith"
              />
              <Button
                leftIcon={<FiEdit2 />}
                size="sm"
                variant="outline"
              >
                Change Photo
              </Button>
            </VStack>
            <VStack spacing={4} flex={1}>
              <FormControl>
                <FormLabel>Display Name</FormLabel>
                <Input placeholder="Your full name (e.g., Prof. John Smith)" />
              </FormControl>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input placeholder="Your affiliations (e.g., MSRA, HKUST)" />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input 
                  type="email" 
                  placeholder="Your institutional email"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Input 
                  placeholder="Brief description of your research interests and expertise"
                />
              </FormControl>
            </VStack>
          </HStack>
        </VStack>
      </Box>

      {/* Social Media Links */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        bg={colorMode === 'light' ? 'white' : 'gray.700'}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="md">Social Media Links</Heading>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Website</FormLabel>
              <Input placeholder="Your personal or lab website URL" />
            </FormControl>
            <FormControl>
              <FormLabel>GitHub</FormLabel>
              <Input placeholder="Your GitHub profile URL" />
            </FormControl>
            <FormControl>
              <FormLabel>Twitter</FormLabel>
              <Input placeholder="Your Twitter profile URL" />
            </FormControl>
            <FormControl>
              <FormLabel>LinkedIn</FormLabel>
              <Input placeholder="Your LinkedIn profile URL" />
            </FormControl>
          </VStack>
        </VStack>
      </Box>

      {/* Research Tags */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        bg={colorMode === 'light' ? 'white' : 'gray.700'}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="md">Research Tags</Heading>
          <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
            Add keywords that describe your research areas (e.g., Machine Learning, Computer Vision)
          </Text>
          <HStack>
            <Input
              placeholder="Type a research field or topic"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAddTag();
                }
              }}
            />
            <IconButton
              icon={<FiPlus />}
              onClick={handleAddTag}
              aria-label="Add tag"
            />
          </HStack>
          <Wrap spacing={2}>
            {tags.map((tag, index) => (
              <WrapItem key={index}>
                <Tag
                  size="lg"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="blue"
                >
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
      </Box>

      {/* Notification Settings */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        bg={colorMode === 'light' ? 'white' : 'gray.700'}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="md">Notification Settings</Heading>
          <VStack spacing={4} align="stretch">
            <FormControl display="flex" alignItems="center" justifyContent="space-between">
              <FormLabel mb={0}>Email Notifications</FormLabel>
              <Switch defaultChecked />
            </FormControl>
            <FormControl display="flex" alignItems="center" justifyContent="space-between">
              <FormLabel mb={0}>Review Request Alerts</FormLabel>
              <Switch defaultChecked />
            </FormControl>
            <FormControl display="flex" alignItems="center" justifyContent="space-between">
              <FormLabel mb={0}>PaperPoint Updates</FormLabel>
              <Switch defaultChecked />
            </FormControl>
            <FormControl display="flex" alignItems="center" justifyContent="space-between">
              <FormLabel mb={0}>Community Mentions</FormLabel>
              <Switch defaultChecked />
            </FormControl>
          </VStack>
        </VStack>
      </Box>

      {/* Privacy Settings */}
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        bg={colorMode === 'light' ? 'white' : 'gray.700'}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="md">Privacy Settings</Heading>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Profile Visibility</FormLabel>
              <Select defaultValue="public">
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="connections">Connections Only</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Activity Status</FormLabel>
              <Select defaultValue="online">
                <option value="online">Show when online</option>
                <option value="offline">Always appear offline</option>
              </Select>
            </FormControl>
          </VStack>
        </VStack>
      </Box>

      {/* Save Button */}
      <HStack justify="flex-end">
        <Button
          leftIcon={<FiSave />}
          colorScheme="blue"
          size="lg"
          px={8}
        >
          Save Changes
        </Button>
      </HStack>
    </VStack>
  );
}

export default Settings; 