import ScrollToTop from '@/components/ScrollToTop';
import Meta from '@/components/Seo';
import React, { ReactNode } from 'react';

type BaseLayoutProps = {
   children: ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
   <>
      <Meta />
      <ScrollToTop />
      {children}
   </>
);
export default BaseLayout;
