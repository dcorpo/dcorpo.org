import React from 'react';
import { createStyles, useMantineTheme } from '@mantine/core';
import { NavbarMinimal } from '../components/NavbarMinimal';
import { NavbarExtended } from '../components/NavbarExtended';
import { JobBoardMenu } from '../components/NavbarMenus/JobBoardMenu';


const useStyles = createStyles((theme) => ({
    wrapper: {
      height: 'calc(100vh - 56px)',
      display: 'flex',
    },
}));


export function JobBoard() {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <NavbarMinimal />
            <NavbarExtended>
                <JobBoardMenu />
            </NavbarExtended>
        </div>
    );
}