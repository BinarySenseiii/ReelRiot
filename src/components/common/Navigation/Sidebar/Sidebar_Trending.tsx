/* eslint-disable linebreak-style */
import React from 'react';
import { useRouter } from 'next/router';
import useResize from '@/Hooks/useResize';

function SidebarTrending() {
  const { size } = useResize();
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      style={
        pathname === '/browse'
          ? { display: 'none' }
          : size <= 768
          ? { display: 'none' }
          : { display: 'block', padding: '1rem' }
      }
    >
      Sidebar_Trending
      <input type="text" style={{ maxWidth: '100%' }} />
    </div>
  );
}

export default SidebarTrending;
