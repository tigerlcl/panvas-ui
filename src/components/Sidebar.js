import React from 'react';
import { VStack, Button, Icon, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FiHome, FiBook, FiUsers, FiSettings } from 'react-icons/fi';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

const navItems = [
  { icon: FiHome, label: 'Home', path: '/' },
  { icon: FiBook, label: 'My Papers', path: '/papers' },
  { icon: FiUsers, label: 'Community', path: '/community' },
  { icon: FiSettings, label: 'Settings', path: '/settings' },
];

function Sidebar() {
  const location = useLocation();
  const { colorMode } = useColorMode();

  const sidebarGradient = colorMode === 'light'
    ? 'linear(115deg, rgba(255, 246, 183, 0.1), rgba(246, 65, 108, 0.1))'
    : 'linear(115deg, rgba(45, 52, 54, 0.9), rgba(246, 65, 108, 0.2))';

  const activeGradient = 'linear(to-r, #f6416c, #ff8177)';

  return (
    <VStack
      spacing={2}
      align="stretch"
      p={4}
      bgGradient={sidebarGradient}
      backdropFilter="blur(10px)"
    >
      {navItems.map((item) => (
        <MotionButton
          key={item.path}
          as={RouterLink}
          to={item.path}
          variant="ghost"
          justifyContent="flex-start"
          leftIcon={<Icon as={item.icon} />}
          bgGradient={location.pathname === item.path ? activeGradient : 'none'}
          color={location.pathname === item.path ? 'white' : colorMode === 'light' ? 'gray.700' : 'white'}
          _hover={{
            bgGradient: activeGradient,
            color: 'white',
          }}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.label}
        </MotionButton>
      ))}
    </VStack>
  );
}

export default Sidebar; 