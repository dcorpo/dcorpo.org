import React from 'react';
import './App.css';
import { MantineProvider, Text } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to DCORPO!</Text>
    </MantineProvider>
  );
}
