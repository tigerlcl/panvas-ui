import { VStack, Button, Icon } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FiHome, FiFileText, FiUsers, FiSettings } from 'react-icons/fi'

const menuItems = [
  { icon: FiHome, label: 'Home', path: '/' },
  { icon: FiFileText, label: 'My Papers', path: '/papers' },
  { icon: FiUsers, label: 'Community', path: '/community' },
  { icon: FiSettings, label: 'Settings', path: '/settings' }
]

const Sidebar = () => {
  return (
    <VStack spacing={2} align="stretch">
      {menuItems.map((item) => (
        <Button
          key={item.path}
          as={Link}
          to={item.path}
          variant="ghost"
          justifyContent="flex-start"
          leftIcon={<Icon as={item.icon} />}
        >
          {item.label}
        </Button>
      ))}
    </VStack>
  )
}

export default Sidebar 