// NPM modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

// Theming
import { AppTheme } from './theme/AppTheme';

// Page Components
import HomePage from './pages/HomePage';
import { SignIn, SignUp } from './pages/LoginPage';
import { AppHeader } from './components/Header';

export default function App() {
    const headerLinks = [
        {
            link: '/',
            label: 'Home',
            type: 'link',
            links: null
        },
        {
            link: '/sign_in',
            label: 'Sign In',
            type: 'button',
            links: null
        }
    ];

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={AppTheme}>
            <Router>
                <AppHeader links={headerLinks} />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/sign_in' element={<SignIn />} />
                    <Route path='/sign_up' element={<SignUp />} />
                </Routes>
            </Router>
        </MantineProvider>
    );
}
