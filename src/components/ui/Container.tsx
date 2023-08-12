import {
	MantineSize,
	Container as MantineContainer,
	MantineStyleSystemProps,
} from '@mantine/core'
import React, { ReactNode } from 'react'

type ContainerProps = {
	fluid?: boolean
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
	className?: string
	children: ReactNode
} & MantineStyleSystemProps

const Container: React.FC<ContainerProps> = ({
	fluid = false,
	size = 'xl',
	children,
	className,
	...props
}) => (
	<MantineContainer
		fluid={fluid}
		size={size}
		px={{ base: 8, md: 16 }}
		className={className}
		{...props}
	>
		{children}
	</MantineContainer>
)
export default Container
