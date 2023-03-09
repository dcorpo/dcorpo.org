import { createStyles, useMantineTheme } from '@mantine/core';
import { NavbarMinimal } from '../components/NavbarMinimal';
import { NavbarExtended } from '../components/NavbarExtended';

const useStyles = createStyles((theme) => ({
    wrapper: {
      height: 'calc(100vh - 56px)',
      display: 'flex',
    },
}));


export function Dashboard() {
    const { classes } = useStyles();
    const mainTheme = useMantineTheme();

    return (
        <div className={classes.wrapper}>
            <NavbarMinimal />
            <NavbarExtended></NavbarExtended>
        </div>
    );
}