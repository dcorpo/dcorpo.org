import React from 'react';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import { NavbarMinimal } from '../components/NavbarMinimal';

export function JobBoard() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={mainTheme}>
            <NavbarMinimal />
        </MantineProvider>
    );
}