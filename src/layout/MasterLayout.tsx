import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { links } from './Navigation/Navigation.mock';

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
  <LayoutWrapper>
    <Navigation links={links} />
    <div id="__root">{children}</div>
    <Footer />
  </LayoutWrapper>
);

export default MasterLayout;
