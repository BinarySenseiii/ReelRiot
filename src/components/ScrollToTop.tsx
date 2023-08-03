import { Affix, Box, Center, Transition, rem } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { BiUpArrowAlt } from 'react-icons/bi'

export default function ScrollToTop() {
	const [scroll, scrollTo] = useWindowScroll()

	return (
		<Affix
			position={{ bottom: 20, right: 20 }}
			sx={{
				mixBlendMode: 'difference',
			}}
		>
			<Transition transition="scale" mounted={scroll.y > 0}>
				{transitionStyles => (
					<Box
						style={transitionStyles}
						onClick={() => scrollTo({ y: 0 })}
						sx={{
							height: rem(40),
							width: rem(40),
							borderRadius: '50%',
							mixBlendMode: 'difference',
							background: 'white',
							cursor: 'pointer',
						}}
					>
						<Center h="100%">
							<BiUpArrowAlt
								fontSize={rem(25)}
								style={{ mixBlendMode: 'difference' }}
							/>
						</Center>
					</Box>
				)}
			</Transition>
		</Affix>
	)
}
