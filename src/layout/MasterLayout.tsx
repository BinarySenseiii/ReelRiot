/* eslint-disable linebreak-style */
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Title, Box } from '@mantine/core';
import Footer from '../components/common/Footer';
import Navigation from '../components/common/Navigation';
import { links } from '../components/common/Navigation/Navigation.mock';
import ScrollToTop from '@/components/ScrollToTop';
import Sidebar from '@/components/common/Navigation/Sidebar/Sidebar';
import { useStyles } from '../components/common/Navigation/Navigation.styled';

import SidebarTrending from '@/components/common/Navigation/Sidebar/Sidebar_Trending';

const LayoutWrapper = styled.div`
  display: grid;
  gap: 20px;
  min-height: 100vh;
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  padding-top: 2rem;

  #__root {
    padding-bottom: 2rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 50px auto !important;
  }
  @media (max-width: 600px) {
    grid-template-columns: 70px auto !important;
  }
  @media (max-width: 768px) {
    grid-templatet-columns: 200px auto !important;
    padding-top: 0 !important;
  }
`;

const ShowLogo = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    text-align: center;
    margin-top: 1rem;
  }
`;

type MasterLayoutProps = {
  children: ReactNode;
};

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
  const { classes } = useStyles();
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <ScrollToTop />
      <NextNProgress color="#dd0913" />
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
      <LayoutWrapper
        style={
          pathname === '/browse'
            ? { gridTemplateColumns: '200px auto' }
            : { gridTemplateColumns: '200px auto 150px', paddingTop: '2rem' }
        }
      >
        <aside>
          <Sidebar />
        </aside>

        <div>
          <Navigation links={links} />
          <div id="__root">{children}</div>
          <Footer />
        </div>
        <aside>
          <SidebarTrending />
        </aside>
      </LayoutWrapper>
    </>
  );
};
export default MasterLayout;
