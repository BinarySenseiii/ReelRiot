import { Box, Burger, Group, Header, Paper, Transition } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'
import { HEADER_HEIGHT, useStyles } from './Navigation.styled'

import { Container } from '@/components/ui'
import { menuLinks } from '@/mock'
import Logo from '../Logo'
import NavLink from './NavLink'

const Navigation: React.FC = () => {
	const [opened, { toggle, close }] = useDisclosure(false)
	const { classes } = useStyles()

	const items = menuLinks.map(link => (
		<NavLink key={link.label} onClose={close} {...link} />
	))

	return (
		<Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
			<Container>
				<Box className={classes.header}>
					<Logo />

					<Group spacing={5} className={classes.links}>
						{items}
					</Group>
					<Burger
						opened={opened}
						onClick={toggle}
						className={classes.burger}
						size="sm"
						aria-label="toggle menu"
					/>
					<Transition
						transition="pop-top-right"
						duration={200}
						mounted={opened}
					>
						{styles => (
							<Paper className={classes.dropdown} withBorder style={styles}>
								{items}
							</Paper>
						)}
					</Transition>
				</Box>
			</Container>
		</Header>
	)
}
export default Navigation
