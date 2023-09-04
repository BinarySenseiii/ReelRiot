import { Box, Burger, Button, Group, Header, Paper, Transition } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'
import { HEADER_HEIGHT, useStyles } from './Navigation.styled'

import { Container } from '@/components/ui'
import { menuLinks } from '@/mock'
import Logo from '../Logo'
import NavLink from './NavLink'
import { useRouter } from 'next/router'

const Navigation: React.FC = () => {
	const [opened, { toggle, close }] = useDisclosure(false)
	const { pathname } = useRouter()
	const { classes } = useStyles()

	const items = menuLinks.map(link => <NavLink key={link.label} onClose={close} {...link} />)

	return (
		<div className="relative">
			<Header
				height={HEADER_HEIGHT}
				mb={120}
				className={`${classes.root} ${pathname.includes('slug') ? 'static' : 'fixed'}`}
			>
				<Container>
					<Box className={classes.header}>
						<Logo />

						<Group spacing={5} className={classes.links}>
							{items}
							<Button size="xs">Login / Sign Up</Button>
						</Group>
						<Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" aria-label="toggle menu" />
					</Box>
				</Container>
			</Header>
			<Transition transition="pop" mounted={opened}>
				{styles => (
					<Paper className={classes.dropdown} style={styles}>
						{items}
						<Button size="xs" mb="sm" mx={16}>
							Login / Sign Up
						</Button>
					</Paper>
				)}
			</Transition>
		</div>
	)
}
export default Navigation
