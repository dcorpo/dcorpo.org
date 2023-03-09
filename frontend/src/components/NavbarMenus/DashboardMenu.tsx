import { createStyles, useMantineTheme, rem, Text } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'light' ? theme.colors.dark[3] : theme.colors.light[2],
  },
}));


export function DashboardMenu () {
  const { classes } = useStyles();
  useMantineTheme();

  return (
    <div>
        <Text size="lg" color="dimmed" className={classes.title}>
            Dashboard menu
        </Text>
    </div>
  )
}