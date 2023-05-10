import React from 'react';
import { Anchor, Stack, Text } from '@mantine/core';
import { useFooterStyles } from './Footer.styled';
import { Container } from '@/components/ui';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const { classes } = useFooterStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Stack spacing="xs">
          <Text size="sm" align="center">
            By using this site you agree to and accept our User Agreement, which
            can be read{' '}
            <Anchor
              href="https://yts.mx/terms"
              target="_blank"
              color="dark.1"
              role="link"
              aria-label="visit terms and conditions"
            >
              terms and conditions here
            </Anchor>
            .
          </Text>

          <Text size="xs" align="center">
            Designed & Developd by ❤️
          </Text>
        </Stack>
      </Container>
    </div>
  );
};
export default Footer;
