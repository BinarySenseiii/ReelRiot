import { Breadcrumbs, createStyles } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

type BreadCrumbProps = {
  movieName: string;
  slug: string;
};

const useBreadCrumbStyles = createStyles((theme) => ({
  breadCrumb__item: {
    textDecoration: 'none',
    color: theme.colors.brand[5],

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const BreadCrumb: React.FC<BreadCrumbProps> = ({ movieName, slug }) => {
  const { classes } = useBreadCrumbStyles();

  const items = [
    { title: 'Home', href: '/browse' },
    { title: movieName, href: slug },
  ].map((item, index) => (
    <Link href={item.href} key={index} className={classes.breadCrumb__item}>
      {item.title}
    </Link>
  ));

  return <Breadcrumbs my="lg">{items}</Breadcrumbs>;
};
export default BreadCrumb;
