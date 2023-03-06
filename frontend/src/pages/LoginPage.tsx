import React from 'react';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import { SignInForm, SignUpForm } from '../components/LoginForms';

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
            <SignUpForm />
        </MantineProvider>
    );
}


export { SignIn, SignUp };