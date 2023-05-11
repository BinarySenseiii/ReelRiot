import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '@/assets/images/logo.png';

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo not found" placeholder="blur" width={130} />
    </Link>
  );
};

export default Logo;
