import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  const { author } = data.site.siteMetadata;
  return (
    <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text>
          © {new Date().getFullYear()} {author}
        </Text>
      </Flex>
    </Box>
  );
}
