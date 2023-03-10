import { createStyles, Header, Menu, Group, Center, Burger, Container, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { ReactComponent as InlineLogoDark } from './../resources/inlineLogoDark.svg';
import { ReactComponent as InlineLogoLight } from './../resources/inlineLogoLight.svg';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.light[0],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.light[6],
    height: "56px",
    paddingRight: "195px",
    paddingLeft: "195px",
    [theme.fn.smallerThan('sm')]: {
      paddingRight: "20px",
      paddingLeft: "20px",
    },
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burgerMenu: {
    display: 'flex',
    width: '100%',
    height: 'calc(100vh - 56px)',
    backgroundColor: theme.colorScheme === 'dark' ? '#181818dd' : '#edededdd',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    padding: '15px',
    paddingTop: '30px',
    zIndex: 100
  },

  linksMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  logoLink: {
    height: '56px', 
    display: 'flex', 
    alignItems: 'center'
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 14px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.light[1] : theme.colors.dark[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.light[4],
    },
  },

  button: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 14px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.dark[3],
    color: 'white',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors.gray[3],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderSearchProps {
  links: { 
    link: string;
    label: string;
    type: string | null;
    links: { 
      link: string;
      label: string
    }[] | null
  }[];
}

export function AppHeader({ links }: HeaderSearchProps) {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover">
          <Menu.Target>
            <Link to={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link to={link.link} key={link.label} className={ link.type === "button" ? classes.button : classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <>
      <Header className={classes.header} height={56}>
        <div className={classes.inner}>
          <Link to='/' className={classes.logoLink}>
            {theme.colorScheme === 'light' ? <InlineLogoDark width={"150px"} /> : <InlineLogoLight width={"150px"} />}
          </Link>
          <Group spacing={10} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </div>
      </Header>
      {opened ? 
        <div className={classes.burgerMenu}>
          <Group spacing={10} className={classes.linksMenu}>
            {items}
          </Group>
        </div>
      : ""}
    </>
  );
}