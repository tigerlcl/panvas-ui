import React from 'react';
import { VStack, Button, Icon } from '@chakra-ui/react';
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

  return (
    <VStack spacing={2} align="stretch" p={4}>
      {navItems.map((item) => (
        <MotionButton
          key={item.path}
          as={RouterLink}
          to={item.path}
          variant="ghost"
          justifyContent="flex-start"
          leftIcon={<Icon as={item.icon} />}
          isActive={location.pathname === item.path}
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