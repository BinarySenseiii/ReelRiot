import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import Footer from '../components/common/Footer';
import Navigation from '../components/common/Navigation';
import { links } from '../components/common/Navigation/Navigation.mock';
import ScrollToTop from '@/components/ScrollToTop';
import { RouterTransition } from '@/components/RouterTransition';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  #__root {
    padding-bottom: 2rem;
  }
`;

type MasterLayoutProps = {
  children: ReactNode;
};

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => (
  <>
    <ScrollToTop />
    <RouterTransition />
    <LayoutWrapper>
      <Navigation links={links} />
      <div id="__root">{children}</div>
      <Footer />
    </LayoutWrapper>
  </>
);

export default MasterLayout;
