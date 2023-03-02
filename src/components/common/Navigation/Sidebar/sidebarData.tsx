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
  },
  {
    icon: <RiCommunityLine />,
    name: 'Community',
    id: 'sdkfjakje',
  },
  {
    icon: <AiOutlineCompass />,
    name: 'Discover',
    id: 'euijvkj',
  },
  {
    icon: <CiTimer />,
    name: 'Coming soon',
    id: 'euiojjv',
  },
];

export const Social: sidebarProp = [
  {
    icon: <TbFriends />,
    name: 'Friends',
    id: 'lokllpk',
  },
  {
    icon: <TbFriends />,
    name: 'Friends',
    id: 'lvorgere',
  },
  {
    icon: <CgMediaPodcast />,
    name: 'Media',
    id: 'jhjkjj94',
  },
];

export const General: sidebarProp = [
  {
    icon: <FiSettings />,
    name: 'Settings',
    id: 'lvjoj4',
  },
  {
    icon: <RiLogoutBoxRLine />,
    name: 'Log Out',
    id: 'ejf9jkj',
  },
];
