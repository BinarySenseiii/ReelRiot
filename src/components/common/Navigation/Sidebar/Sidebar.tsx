/* eslint-disable linebreak-style */
import React from 'react';
import Link from 'next/link';
import { Title, Box } from '@mantine/core';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useStyles } from '../Navigation.styled';
import { General, Menu, Social } from '@/components/common/Navigation/Sidebar/sidebarData';

const ShowLogo = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;
const Hidetext = styled.span`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;
const Hidetext2 = styled.span`
  display: none;
  @media (min-width: 600px) {
    display: block;
    font-size: 17px;
  }
`;

function Sidebar() {
  const { classes } = useStyles();
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      style={{
        padding: '1rem',
        height: '100vh',
      }}
    >
      <ShowLogo>
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
      </ShowLogo>
      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column' }}>
        <ul style={{ padding: '0' }} className={classes.unorderedList}>
          <Hidetext>Menu</Hidetext>

          {Menu.map((data) => (
            <li key={data.id} className={classes.navlist}>
              <Link
                href={`/${data.path}`}
                className={classes.navLinks}
                style={
                  pathname === `/${data.path}`
                    ? { color: 'crimson', borderRight: '1px solid crimson' }
                    : { color: 'grey' }
                }
              >
                {data.icon}
                <Hidetext2>{data.name}</Hidetext2>
              </Link>
            </li>
          ))}
        </ul>

        <ul style={{ padding: '0' }} className={classes.unorderedList}>
          <Hidetext>Social</Hidetext>
          {Social.map((data) => (
            <li key={data.id} className={classes.navlist}>
              <Link
                href={`/${data.name}`}
                className={classes.navLinks}
                style={pathname === `/${data.name}` ? { color: 'crimson' } : { color: 'grey' }}
              >
                {data.icon}
                <Hidetext2>{data.name}</Hidetext2>
              </Link>
            </li>
          ))}
        </ul>

        <ul style={{ padding: '0' }} className={classes.unorderedList}>
          <Hidetext>General</Hidetext>
          {General.map((data) => (
            <li key={data.id} className={classes.navlist}>
              <Link
                href={`/${data.name}`}
                className={classes.navLinks}
                style={pathname === `/${data.name}` ? { color: 'crimson' } : { color: 'grey' }}
              >
                {data.icon}
                <Hidetext2>{data.name}</Hidetext2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
