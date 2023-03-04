import { createStyles, Text, Container, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoDark } from './../resources/logoDark.svg';
import { ReactComponent as LogoLight } from './../resources/logoLight.svg';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: '12rem',
    paddingBottom: '8rem',

    [theme.fn.smallerThan('sm')]: {
      paddingTop: '8rem',
      paddingBottom: '6rem',
    },
  },

  inner: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1,
  },

  description: {
    textAlign: 'center',

    color: theme.colorScheme === 'light' ? theme.colors.dark[3] : theme.colors.light[2],

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  button: {
    '&:not(:first-of-type)': {
        marginLeft: theme.spacing.md,
        color: 'white',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.dark[3],
        '&:hover': {
          backgroundColor: theme.colors.gray[3],
        },
    },

    [theme.fn.smallerThan('xs')]: {
        height: '4.2rem',
        fontSize: theme.fontSizes.md,

        '&:not(:first-of-type)': {
            marginTop: theme.spacing.md,
            marginLeft: 0,
        },
    },

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    padding: '15px 25px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    color: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.gray[4],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.light[4],
    },
  },

  logo: {
    marginBottom: theme.spacing.lg,
  }

}));

export function HeroBanner() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <Container className={classes.wrapper} fluid>
            <div className={classes.inner}>
                {theme.colorScheme === 'light' ? <LogoDark className={classes.logo} /> : <LogoLight className={classes.logo} />}
                <Container p={0} size={600}>
                <Text size="lg" color="dimmed" className={classes.description}>
                  Temporary text: [Tired of looking for new workers? Here at DCORPO we can help you!
                  Join us and find the person that will complete all your tasks.]
                </Text>
                </Container>

                <div className={classes.controls}>
                    <Link to='/job_board' className={classes.button}>
                        About
                    </Link>
                    <Link to='/sign_up' className={classes.button}>
                        Join Us
                    </Link>
                </div>
            </div>
        </Container>
    );
}