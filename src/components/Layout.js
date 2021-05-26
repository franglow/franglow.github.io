import React from 'react';
import { Box } from '@chakra-ui/layout';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

export default function Layout({ children }) {
  return (
    <Box p={[2, 4, 8]} maxW="1280px" m="0 auto">
      <Header />
      <Hero />
      {children}
      <Footer />
    </Box>
  );
}
