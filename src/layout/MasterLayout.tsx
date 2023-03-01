/* eslint-disable linebreak-style */
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import NextNProgress from 'nextjs-progressbar';
// import { ClassNames } from '@emotion/react';
import { useRouter } from 'next/router';
import Footer from '../components/common/Footer';
import Navigation from '../components/common/Navigation';
import { links } from '../components/common/Navigation/Navigation.mock';
import ScrollToTop from '@/components/ScrollToTop';
import Sidebar from '@/components/common/Navigation/Sidebar/Sidebar';
import { useStyles } from '../components/common/Navigation/Navigation.styled';

import useResize from '@/Hooks/useResize';
import SidebarTrending from '@/components/common/Navigation/Sidebar/Sidebar_Trending';

const LayoutWrapper = styled.div`
  display: grid;
  gap: 20px;
  min-height: 100vh;
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  padding-top: 3rem;

  #__root {
    padding-bottom: 2rem;
  }
`;

type MasterLayoutProps = {
  children: ReactNode;
};

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
  const { classes } = useStyles();
  const { size } = useResize();
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <ScrollToTop />
      <NextNProgress color="#dd0913" />
      <LayoutWrapper
        style={
          pathname === '/browse'
            ? { gridTemplateColumns: '200px auto' }
            : size <= 768
            ? { gridTemplateColumns: '200px auto' }
            : { gridTemplateColumns: '200px auto 150px' }
        }
      >
        <aside className={classes.aside}>
          <Sidebar />
        </aside>

        <div>
          <Navigation links={links} />
          <div id="__root">{children}</div>
          <Footer />
        </div>
        <aside className={classes.aside_trending}>
          <SidebarTrending />
        </aside>
      </LayoutWrapper>
    </>
  );
};
export default MasterLayout;
