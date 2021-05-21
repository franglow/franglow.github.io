import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
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
  return (
    <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text>
          © {new Date().getFullYear()} {profile.name}
        </Text>
      </Flex>
    </Box>
  );
}
