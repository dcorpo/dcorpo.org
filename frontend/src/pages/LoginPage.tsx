import React from 'react';
import { MantineProvider, Text, useMantineTheme } from '@mantine/core';
import { SignInForm } from '../components/LoginForms';

function SignIn() {
    const mainTheme = useMantineTheme();

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={mainTheme}>
            <SignInForm />
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