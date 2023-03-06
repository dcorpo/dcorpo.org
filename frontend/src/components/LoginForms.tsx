import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Title,
    Text,
    rem,
  } from '@mantine/core';
  import { Link } from 'react-router-dom';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: rem(900),
    },
  
    form: {
      borderRight: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[1]
      }`,
      minHeight: rem(900),
      maxWidth: rem(450),
      paddingTop: rem(80),
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        margin: '15px 0',
        padding: '15px 25px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        fontSize: theme.fontSizes.md,
        fontWeight: 500,
    
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[4],
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.light[4],
    
        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.light[6],
        },
      },
  }));
  
  export function SignInForm() {
    const { classes } = useStyles();
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome back to Dcorpo!
          </Title>
          <TextInput label="Email address" placeholder="hello@dcorpo.org" size="md" />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Link to="/auth_login" className={classes.button}>
            Login
          </Link>
          <Text ta="center" mt="md">
            Don&apos;t have an account?{' '}
            <Link to="/sign_up">
              Register
            </Link>
          </Text>
        </Paper>
      </div>
    );
  }