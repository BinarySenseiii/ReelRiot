/* eslint-disable linebreak-style */
import { AiOutlineHome, AiOutlineCompass } from 'react-icons/ai';
import { CiTimer } from 'react-icons/ci';
import { CgMediaPodcast } from 'react-icons/cg';
import { RiCommunityLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { TbFriends } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';
import { sidebarProp } from '@/components/common/Navigation/Sidebar/Types';

export const Menu: sidebarProp = [
  {
    icon: <AiOutlineHome />,
    name: 'Menu',
    id: 'dkfjakdjfd',
    path: 'Menu',
  },
  {
    icon: <RiCommunityLine />,
    name: 'Community',
    id: 'sdkfjakje',
    path: 'Community',
  },
  {
    icon: <AiOutlineCompass />,
    name: 'Discover',
    id: 'euijvkj',
    path: 'Discover',
  },
  {
    icon: <CiTimer />,
    name: 'Coming soon',
    id: 'euiojjv',
    path: 'Coming%20soon',
  },
];

export const Social: sidebarProp = [
  {
    icon: <TbFriends />,
    name: 'Friends',
    id: 'lokllpk',
    path: 'Friends',
  },

  {
    icon: <CgMediaPodcast />,
    name: 'Media',
    id: 'jhjkjj94',
    path: 'Media',
  },
];

export const General: sidebarProp = [
  {
    icon: <FiSettings />,
    name: 'Settings',
    id: 'lvjoj4',
    path: 'Settings',
  },
  {
    icon: <RiLogoutBoxRLine />,
    name: 'Log Out',
    id: 'ejf9jkj',
    path: 'Log%20out',
  },
];
