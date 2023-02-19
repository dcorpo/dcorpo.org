import React from 'react';
import { MantineProvider, Text } from '@mantine/core';

function SignIn() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Text>Sign in!</Text>
        </MantineProvider>
    );
}


function SignUp() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Text>Sign up!</Text>
        </MantineProvider>
    );
}


export { SignIn, SignUp };