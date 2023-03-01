/* eslint-disable linebreak-style */
import React from 'react';
import Link from 'next/link';
import { Title, Box } from '@mantine/core';
import { useStyles } from '../Navigation.styled';
import { Menu } from '@/components/common/Navigation/Sidebar/sidebarData';

function Sidebar() {
  const { classes } = useStyles();

  return (
    <div style={{ padding: '1rem' }}>
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
      <div>
        <ul style={{ padding: '0' }} className={classes.unorderedList}>
          {Menu.map((data) => (
            <li key={data.name} className={classes.navlist}>
              <Link href={`/${data.name}`} className={classes.navLinks}>
                {data.icon}
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
