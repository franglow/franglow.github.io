import * as React from 'react';
import { Box } from '@chakra-ui/react';
import Homepage from '../components/Homepage';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Box p={[2, 4, 8]} maxW="1280px" m="0 auto">
    <SEO />
    <Homepage />
  </Box>
);

export default IndexPage;
