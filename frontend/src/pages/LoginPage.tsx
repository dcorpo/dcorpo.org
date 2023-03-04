import React from 'react';
import { MantineProvider, Text, useMantineTheme } from '@mantine/core';

function SignIn() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={mainTheme}>
            <Text>Sign in!</Text>
        </MantineProvider>
    );
}


function SignUp() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={mainTheme}>
            <Text>Sign up!</Text>
        </MantineProvider>
    );
}


export { SignIn, SignUp };