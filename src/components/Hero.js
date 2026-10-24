import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  useColorModeValue,
  Avatar,
  Center,
} from '@chakra-ui/react';

export default function Hero() {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          avatar
          bioplus
        }
      }
    }
  `);
  const { author, avatar, bioplus } = site.siteMetadata;

  return (
    <>
      <Container maxW="3xl">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '1xl', sm: '3xl', md: '5xl' }}
            lineHeight="110%"
          >
            Hi 👋 I am {author} <br />
            <Text as="span" color="green.500">
              Frontend &amp; Product Engineer
            </Text>
          </Heading>
          <Center>
            <Avatar size="2xl" name={author} src={avatar} />
          </Center>
          <Text
            color={useColorModeValue('gray.500', 'gray.400')}
            fontSize={{ base: 'lg', lg: 'xl' }}
          >
            {bioplus}
          </Text>
        </Stack>
      </Container>
    </>
  );
}
