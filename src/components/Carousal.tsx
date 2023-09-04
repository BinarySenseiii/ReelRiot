import React, { ReactNode, useRef } from 'react'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { rem } from '@mantine/core'

interface CarouselType {
	children: ReactNode
	slideSize?: string
	delay?: number
	withIndicators?: boolean
	withIndicatorStyles?: boolean
	withBreakpoints?: boolean
	withControls?: boolean
}

const Carousal: React.FC<CarouselType> = ({
	children,
	slideSize = '33.333333%',
	delay = 2000,
	withIndicators = false,
	withIndicatorStyles = false,
	withBreakpoints = true,
	withControls = false,
}) => {
	const autoplay = useRef(Autoplay({ delay, stopOnInteraction: false }))

	const additonalProps = {
		breakpoints: [
			{ maxWidth: 'md', slideSize: '50%' },
			{ maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
		],
	}

	const withPoints = withBreakpoints && additonalProps

	return (
		<Carousel
			containScroll="trimSnaps"
			loop
			slideSize={slideSize}
			withControls={withControls}
			withIndicators={withIndicators}
			slideGap="md"
			align="start"
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
			styles={theme => ({
				control: {
					'&[data-inactive]': {
						opacity: 0,
						cursor: 'default',
					},
				},
				controls: {
					justifyContent: 'end',
					gap: rem('10px'),
					top: rem('-45px'),
				},
				indicator: withIndicatorStyles
					? {
							width: rem(15),
							height: rem(8),
							transition: 'width 250ms ease',

							'&[data-active]': {
								width: rem(40),
								background: theme.colors.red[8],
							},
					  }
					: {},
			})}
			{...withPoints}
		>
			{children}
		</Carousel>
	)
}

export default Carousal
