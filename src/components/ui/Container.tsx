import { MantineSize, Container as MantineContainer, MantineStyleSystemProps } from '@mantine/core';
import React, { ReactNode } from 'react';

type ContainerProps = {
  fluid?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  sizes?: Record<MantineSize, string | number>;
  children: ReactNode;
} & MantineStyleSystemProps;

const Container: React.FC<ContainerProps> = ({
  fluid = false,
  size = 'xl',
  sizes,
  children,
  ...props
}) => (
  <MantineContainer fluid={fluid} size={size} sizes={sizes} px={{ base: 8, md: 16 }} {...props}>
    {children}
  </MantineContainer>
);
export default Container;
