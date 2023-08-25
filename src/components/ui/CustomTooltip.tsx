import { Tooltip } from '@mantine/core'
import React, { ReactNode } from 'react'

const CustomTooltip = ({
	children,
	label,
}: {
	children: ReactNode
	label: string
}) => {
	return (
		<Tooltip
			label={label}
			color="dark"
			withArrow
			arrowSize={6}
			arrowOffset={20}
			withinPortal
			transitionProps={{ transition: 'skew-up', duration: 300 }}
		>
			{children}
		</Tooltip>
	)
}

export default CustomTooltip
