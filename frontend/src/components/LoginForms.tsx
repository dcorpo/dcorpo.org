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
      height: 'calc(100vh - 56px)',
    },
  
    form: {
      borderRight: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[1]
      }`,
      height: '100%',
      maxWidth: rem(450),
      paddingTop: rem(80),
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },

      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.light[0],
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.light[6]
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

      textInput: {
        '&>div>input': {
          backgroundColor: 'transparent',
          color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[4],
        }
      },

      passwdInput: {
        '&>div>div, &>div>div>input': {
          backgroundColor: 'transparent',
          color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[4],
        },
        '&>div>div:nth-of-type(2)>button:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.light[4],
        }
      },

      checkBox: {
        '&>div>div>input': {
          backgroundColor: 'transparent',
        }
      }
  }));
  
  function SignInForm() {
    const { classes } = useStyles();
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome back to Dcorpo!
          </Title>
          <TextInput className={classes.textInput} label="Email address" placeholder="hello@dcorpo.org" size="md" />
          <PasswordInput className={classes.passwdInput} label="Password" placeholder="Your password" mt="md" size="md" />
          <Checkbox className={classes.checkBox} label="Keep me logged in" mt="xl" size="md" />
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

  function SignUpForm() {
    const { classes } = useStyles();
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome to Dcorpo!
          </Title>
          <TextInput className={classes.textInput} label="Email address" placeholder="hello@dcorpo.org" size="md" />
          <TextInput className={classes.textInput} label="Username" placeholder="My_Username" mt="md" size="md" />
          <PasswordInput className={classes.passwdInput} label="Password" placeholder="Set password" mt="md" size="md" />
          <PasswordInput className={classes.passwdInput} label="Password" placeholder="Repeat password" mt="md" size="md" />
          <Checkbox className={classes.checkBox} label="I read and agree to terms" mt="xl" size="md" />
          <Link to="/auth/registration/" className={classes.button}>
            Register
          </Link>
          <Text ta="center" mt="md">
            Already have an account?{' '}
            <Link to="/sign_in">
              Login
            </Link>
          </Text>
        </Paper>
      </div>
    );
  }

export { SignInForm, SignUpForm };