import React from 'react';
import {
  Box,
  Text,
  Stack,
  Grid,
  Badge,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';

const Feature = ({ title, desc, languages, id, url }) => (
  <Grid
    key={id}
    as="a"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    w="full"
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow="2xl"
    pt={6}
    pb={1}
    px={4}
  >
    <Text fontWeight={600}>{title}</Text>
    <Text color={useColorModeValue('gray.700', 'gray.400')}>{desc}</Text>
    <Stack align="center" justify="end" direction="row" mt={6}>
      {languages.map((item) => (
        <Badge
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight="400"
          key={item.id}
        >
          {item.name}
        </Badge>
      ))}
    </Stack>
  </Grid>
);

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      allGithubData {
        nodes {
          data {
            user {
              pinnedItems {
                nodes {
                  id
                  name
                  description
                  url
                  languages {
                    nodes {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const repos = data.allGithubData.nodes[0].data.user.pinnedItems.nodes;
  return (
    <Box py={6}>
      <Heading fontSize="2xl" fontFamily="body" py={6}>
        Projects
      </Heading>
      <Grid
        templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        justifyContent="center"
        gap={6}
      >
        {repos.map((repo) => (
          <Feature
            key={repo.id}
            title={repo.name}
            desc={repo.description}
            languages={repo.languages.nodes}
            id={repo.id}
            url={repo.url}
          />
        ))}
      </Grid>
    </Box>
  );
}
