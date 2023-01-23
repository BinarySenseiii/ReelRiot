import { useRouter } from 'next/router';
import React from 'react';
import { useStyles } from './Navigation.styled';

type NavLinkProps = {
  link: string;
  label: string;
  onClose: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ link, label, onClose }) => {
  const router = useRouter();
  const { classes, cx } = useStyles();

  const routeNavigateHandle = (evt: React.MouseEvent<HTMLAnchorElement>, route: string) => {
    evt.preventDefault();
    router.push(route);
    onClose();
  };

  return (
    <a
      href={link}
      onClick={(e) => routeNavigateHandle(e, link)}
      className={cx(classes.link, {
        [classes.linkActive]: router.pathname === link,
      })}
    >
      {label}
    </a>
  );
};
export default NavLink;
