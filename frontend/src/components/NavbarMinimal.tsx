import { useState } from 'react';
import { Navbar, Tooltip, UnstyledButton, createStyles, Stack, rem, useMantineTheme } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(60),
    height: rem(60),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.light[1] : theme.colors.dark[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.light[5],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[3] : theme.colors.dark[7],
      color: theme.colorScheme === 'dark' ? theme.colors.light[1] : theme.colors.light[1],
    },
  },

  navbar: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[1]
    }`,
  }
}));

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="2.4rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(2);

  useMantineTheme();

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  const { classes } = useStyles();
  return (
    <Navbar className={classes.navbar} width={{ base: 90 }} p="md">
      <Navbar.Section grow>
        <Stack justify="center" spacing={14}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}