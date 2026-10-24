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

const projects = [
  {
    id: 'base-pages',
    title: 'base-pages.com',
    url: 'https://base-pages.com',
    desc:
      'My consulting home. I turn vague goals from founders and small teams into scoped, priced work, then ship it end to end — directing the tools, reviewing what they produce, and owning what goes live. Built with 100% AI-generated code.',
    tags: ['AI-generated code', 'Consulting', 'Web'],
  },
  {
    id: 'carma-retreats',
    title: 'carma-retreats.com',
    url: 'https://carma-retreats.com',
    desc:
      'A one-page site with an inquiry form for a Berlin yoga-retreat host, replacing bookings that kept getting lost in Instagram DMs. The first retreat after launch sold out. Built with 100% AI-generated code.',
    tags: ['AI-generated code', 'Client work', 'Web'],
  },
];

const Feature = ({ title, desc, tags, id, url }) => (
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
      {tags.map((tag) => (
        <Badge
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight="400"
          key={tag}
        >
          {tag}
        </Badge>
      ))}
    </Stack>
  </Grid>
);

export default function Projects() {
  return (
    <Box py={6}>
      <Heading fontSize="2xl" fontFamily="body" py={6}>
        Selected work
      </Heading>
      <Grid
        templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        justifyContent="center"
        gap={6}
      >
        {projects.map((project) => (
          <Feature
            key={project.id}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
            id={project.id}
            url={project.url}
          />
        ))}
      </Grid>
    </Box>
  );
}
