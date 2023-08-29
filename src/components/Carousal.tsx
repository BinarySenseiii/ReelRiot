import React, { ReactNode, useRef } from 'react'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'

const Carousal = ({ children, slideSize = '33.333333%' }: { children: ReactNode; slideSize?: string }) => {
	const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))
	return (
		<Carousel
			containScroll="trimSnaps"
			loop
			dragFree
			slideSize={slideSize}
			withControls={false}
			slideGap="md"
			align="start"
			breakpoints={[
				{ maxWidth: 'md', slideSize: '50%' },
				{ maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
			]}
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
			styles={{
				control: {
					'&[data-inactive]': {
						opacity: 0,
						cursor: 'default',
					},
				},
			}}
		>
			{children}
		</Carousel>
	)
}

export default Carousal
