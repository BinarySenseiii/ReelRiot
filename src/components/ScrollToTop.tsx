import { Affix, Box, Center, Transition, rem } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { BiUpArrowAlt } from 'react-icons/bi'

export default function ScrollToTop() {
	const [scroll, scrollTo] = useWindowScroll()

	return (
		<Affix position={{ bottom: 20, right: 20 }}>
			<Transition transition="scale" mounted={scroll.y > 0}>
				{transitionStyles => (
					<Box
						style={transitionStyles}
						onClick={() => scrollTo({ y: 0 })}
						sx={{
							height: rem(30),
							width: rem(30),
							borderRadius: '50%',
							mixBlendMode: 'difference',
							background: 'white',
							cursor: 'pointer',
						}}
					>
						<Center h="100%">
							<BiUpArrowAlt fontSize={rem(20)} color="black" />
						</Center>
					</Box>
				)}
			</Transition>
		</Affix>
	)
}
