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
  },
  {
    icon: <RiCommunityLine />,
    name: 'Community',
  },
  {
    icon: <AiOutlineCompass />,
    name: 'Discover',
  },
  {
    icon: <CiTimer />,
    name: 'Coming soon',
  },
];

export const Social: sidebarProp = [
  {
    icon: <TbFriends />,
    name: 'Friends',
  },
  {
    icon: <TbFriends />,
    name: 'Friends',
  },
  {
    icon: <CgMediaPodcast />,
    name: 'Media',
  },
];

export const General: sidebarProp = [
  {
    icon: <FiSettings />,
    name: 'Settings',
  },
  {
    icon: <RiLogoutBoxRLine />,
    name: 'Log Out',
  },
];
