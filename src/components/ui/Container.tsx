import React, { ReactNode } from 'react';
import { Container as Wrapper } from '@mantine/core';

type ContainerProps = {
  children: ReactNode;
  fluid?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
} & Record<string, any>;

const Container: React.FC<ContainerProps> = ({ fluid = false, size = 'lg', children, ...rest }) => (
  <Wrapper fluid={fluid} size={size} {...rest}>
    {children}
  </Wrapper>
);
export default Container;
