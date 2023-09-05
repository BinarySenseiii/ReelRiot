import React from 'react'
import Image from 'next/image'
import banner from '../assets/images/ctx-banner.webp'
import HeroContent from './HeroContent'
import { Container } from './ui'
import { Overlay } from '@mantine/core'

const CtxBanner = () => {
	return (
		<div className="relative">
			<Image
				quality={60}
				fill
				src={banner}
				placeholder="blur"
				alt="dune banner not found"
				className="w-full h-full object-cover"
			/>

			<Overlay
				zIndex={2}
				gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
				opacity={0.85}
			/>
			<HeroContent
				containerClassnames="py-20 md:py-28"
				withVideo={false}
				movie={{
					id: 1,
					title: 'Mad Max: Fury Road',
					storyline: `An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.`,
					genres: ['Action', 'Adventure', 'Sci-fi'],
					info: ['PG-18', '2h 15m', '2015'],
					video_url: `https://res.cloudinary.com/dpcu6eyk8/video/upload/q_68/v1693732617/Untitled_video_-_Made_with_Clipchamp_1_cqx5pf.mp4`,
					redirectURI: '/movie/mad-max-fury-road-2015?id=tt1392190',
					trailerURI: 'https://www.youtube.com/watch?v=hEJnMQG9ev8',
				}}
			/>
		</div>
	)
}

export default CtxBanner
