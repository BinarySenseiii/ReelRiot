/* eslint-disable linebreak-style */
import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

function SidebarTrending() {
  const router = useRouter();
  const { pathname } = router;

  const ShowNav = styled.div`
    display: block;
    padding: 1rem;
    @media (max-width: 768px) {
      display: none;
    }
  `;

  return (
    <ShowNav style={pathname === '/browse' ? { display: 'none' } : { display: 'block' }}>
      Sidebar_Trending
      <input type="text" style={{ maxWidth: '100%' }} />
    </ShowNav>
  );
}

export default SidebarTrending;
