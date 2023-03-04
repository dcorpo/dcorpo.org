import React from 'react';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import { HeroBanner } from '../components/HeroBanner';

export default function App() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={mainTheme}>
            <HeroBanner />
        </MantineProvider>
    );
}