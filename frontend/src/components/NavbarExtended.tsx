import { createStyles, useMantineTheme, rem } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '360px',
    height: 'calc(100vh - 56px)',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.light[0],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.light[6],
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[0]
    }`,
    display: 'flex',
  },
}));


export function NavbarExtended () {
  const { classes } = useStyles();
  useMantineTheme();

  return (
    <div className={classes.wrapper}></div>
  )
}