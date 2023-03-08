import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Title,
    Text,
    rem,
    Button,
    useMantineTheme,
  } from '@mantine/core';
import { useForm } from '@mantine/form';
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
      width: '100%',
      height: '100%',
      lineHeight: 1.4,
      margin: '15px 0',
      padding: '15px 25px',
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      fontSize: theme.fontSizes.md,
      fontWeight: 500,
  
      color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[4],
      // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.light[4],
  
      // '&:hover': {
      //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.light[6],
      // },
    },

    textInput: {
      '&>div>input': {
        backgroundColor: 'transparent',
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.dark[8],
      },
      '&>div>input::placeholder': {
        color: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.dark[3],
      }
    },

    passwdInput: {
      '&>div>div, &>div>div>input': {
        backgroundColor: 'transparent',
        color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.dark[8],
      },
      '&>div>div:nth-of-type(2)>button:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.light[4],
      },
      '&>div>div>input::placeholder': {
        color: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.dark[3],
      }
    },

    checkBox: {
      '&>div>div>input': {
        backgroundColor: 'transparent',
      },
      '&>div>div:nth-of-type(2)>label': {
        color: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.dark[3],
      }
    }
  }));
  
  function SignInForm() {
    const { classes } = useStyles();
    const mainTheme = useMantineTheme();

    const loginValidation = useForm({
      initialValues: {
        email: '',
      },

      validateInputOnBlur: true,

      validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email address')
      },
    });

    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome back to Dcorpo!
          </Title>
          <form onSubmit={loginValidation.onSubmit((values) => console.log(values))}>
            <TextInput className={classes.textInput} label="Email address" placeholder="example@dcorpo.org" size="md" {...loginValidation.getInputProps('email')} />
            <PasswordInput className={classes.passwdInput} label="Password" placeholder="Password" mt="md" size="md" />
            <Checkbox className={classes.checkBox} label="Keep me logged in" mt="xl" size="md" />
            <Button type='submit' className={classes.button} color={mainTheme.colorScheme === 'dark' ? 'dark.3' : 'light.4'}>
              Login
            </Button>
            {/* <Link to="/auth_login" className={classes.button}>
              Login
            </Link> */}
          </form>
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
    const mainTheme = useMantineTheme();

    const registerValidation = useForm({
      initialValues: {
        email: '',
        username: '',
        password: '',
        passwordConfirm: '',
        termsOfService: false,
      },

      validateInputOnBlur: true,

      validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email address'),
        username: (value) => (value.length < 4 ? 'The username has to be at least 4 characters long' : null),
        password: (value) => (
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,.@$!%*?&])[A-Za-z\d,.@$!%*?&]{8,}$/.test(value) ? null : 'The password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'),
        passwordConfirm: (value, values) => (
          value !== values.password ? 'Passwords do not match' : null
        ),
        termsOfService: (value) => (value === false ? 'You have to agree to terms of service' : null)
      },
    });

    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome to Dcorpo!
          </Title>
          <form onSubmit={registerValidation.onSubmit((values) => console.log(values))}>
            <TextInput className={classes.textInput} label="Email address" placeholder="example@dcorpo.org" size="md" {...registerValidation.getInputProps('email')} />
            <TextInput className={classes.textInput} label="Username" placeholder="Username" mt="md" size="md" {...registerValidation.getInputProps('username')} />
            <PasswordInput className={classes.passwdInput} label="Password" placeholder="Password" mt="md" size="md" {...registerValidation.getInputProps('password')} />
            <PasswordInput className={classes.passwdInput} label="Password" placeholder="Repeat password" mt="md" size="md" {...registerValidation.getInputProps('passwordConfirm')} />
            <Checkbox className={classes.checkBox} label={["I read and agree to ", <Link to='/terms'>terms</Link>]} mt="xl" size="md" {...registerValidation.getInputProps('termsOfService', { type: 'checkbox' })} />
            {/* <Link to="/auth/registration/" className={classes.button}>
              Register
            </Link> */}
            <Button type='submit' className={classes.button} color={mainTheme.colorScheme === 'dark' ? 'dark.3' : 'light.4'}>
              Register
            </Button>
          </form>

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