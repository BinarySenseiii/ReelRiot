import { Container } from '@/components/ui';
import { Anchor, Breadcrumbs, Stack, Text } from '@mantine/core';
import React from 'react';
import Logo from '../Logo';
import { useFooterStyles } from './Footer.styled';

const items = [
  { title: 'Legal Stuff', href: '#' },
  { title: 'Privacy Policy', href: '#' },
  { title: 'Security', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index} fz="sm">
    {item.title}
  </Anchor>
));

const Footer: React.FC = () => {
  const { classes } = useFooterStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Stack justify="center" align="center" spacing="sm">
          <Logo />
          <Text fz="xs">Copyright &copy; 2023 Flixena.inc</Text>
          <Breadcrumbs separator="|">{items}</Breadcrumbs>
        </Stack>
      </Container>
    </div>
  );
};
export default Footer;
