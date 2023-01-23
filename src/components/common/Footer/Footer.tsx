import React from 'react';
import { Anchor, Text } from '@mantine/core';
import { Container } from '@/components/ui';
import { useStyles } from './Footer.styled';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Text size="xs" align="center">
          By using this site you agree to and accept our User Agreement, which can be read{' '}
          <Anchor href="https://yts.mx/terms" target="_blank" color="dark.1">
            here
          </Anchor>
          .
        </Text>
      </Container>
    </div>
  );
};
export default Footer;
