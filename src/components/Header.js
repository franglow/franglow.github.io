import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useColorModeValue,
  useColorMode,
  Icon,
  Text,
} from '@chakra-ui/react';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaMoon, FaSun } from 'react-icons/fa';
import { DiGithubBadge } from 'react-icons/di';

const links = [
  {
    icon: DiGithubBadge,
    label: 'GitHub',
    href: 'https://github.com/franglow',
  },
  {
    icon: IoLogoLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/francortez/',
  },
];

const NavLinkSocial = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
);

export default function Header() {
  const data = useStaticQuery(graphql`
    {
      allGithubData {
        nodes {
          data {
            user {
              name
              bio
              email
              avatarUrl
            }
          }
        }
      }
    }
  `);
  const profile = data.allGithubData.nodes[0].data.user;

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} px={[2, 4]}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Text fontWeight={600}>{profile.name}</Text>
        </HStack>
        <Flex alignItems="center" gridGap={4}>
          {links.map((link) => (
            <NavLinkSocial key={link.href} {...link} />
          ))}
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            ml={{ base: '0', md: '3' }}
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
