import { banners } from '@/mock'
import HeroContent from './HeroContent'
import Carousal from './Carousal'
import { Carousel } from '@mantine/carousel'
import ms from 'ms'

const Banners = () => {
	return (
		<div className="min-h-screen relative ">
			<Carousal
				withBreakpoints={false}
				slideSize="100%"
				delay={ms('30s')}
				withIndicators={true}
				withIndicatorStyles={true}
			>
				{banners.map(movie => (
					<Carousel.Slide key={movie.id}>
						<HeroContent movie={movie} />
					</Carousel.Slide>
				))}
			</Carousal>
		</div>
	)
}

export default Banners
