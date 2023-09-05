import { Box, Button } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const ButtonWithDivider = ({ btnText, redirectPath }: { btnText: string; redirectPath: string }) => {
	return (
		<div className="my-12 relative w-full">
			<Box w="100%" h="2px" className="rounded-md" bg="red.8 " />
			<div className="absolute-btn">
				<Link href={redirectPath}>
					<Button
						variant="outline"
						uppercase
						bg="#1A1B1E"
						styles={theme => ({
							root: {
								transition: 'all 0.3s ease-in-out',
								'&:hover': {
									background: theme.colors.red[8],
									color: theme.white,
								},
							},
						})}
					>
						{btnText}
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default ButtonWithDivider
