import { Box, Burger, Group, Header, Paper, Title, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import React from 'react';
import { HEADER_HEIGHT, useStyles } from './Navigation.styled';

import { Container } from '@/components/ui';
import NavLink from './NavLink';

interface TNavigationProps {
  links: { link: string; label: string }[];
}

const Navigation: React.FC<TNavigationProps> = ({ links }) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => <NavLink key={link.label} onClose={close} {...link} />);

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container>
        <div className={classes.header}>
          <Link href="/" passHref>
            <span className={classes.logo}>
              <Title color="brand">
                REEL
                <Box component="span" sx={{ color: 'white' }}>
                  RIOT
                </Box>
              </Title>
            </span>
          </Link>

          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </div>
      </Container>
    </Header>
  );
};
export default Navigation;
