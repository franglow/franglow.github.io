import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './src/@chakra-ui/gatsby-plugin/theme';
import Layout from './src/components/Layout';

const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript
      initialColorMode={theme.config.initialColorMode}
      key="chakra-ui-no-flash"
    />,
  ]);
};

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export { onRenderBody, wrapPageElement };
