import Banners from '@/components/Banners'
import CtxBanner from '@/components/CtxBanner'
import Faq from '@/components/Faq'
import { MovieByGenre, MoviesGrid } from '@/components/Movie'
import { ButtonWithDivider, Container } from '@/components/ui'
import { Stack, rem } from '@mantine/core'

export default function HomePage() {
	return (
		<>
			<Banners />
			<Container pt={{ base: 20, md: 40 }} className="w-full">
				<Stack spacing={rem(30)}>
					<MovieByGenre title="Movies You May Like" genre="adventure" />
					<MoviesGrid genre="all" />
				</Stack>
			</Container>

			<ButtonWithDivider btnText="View More" redirectPath="/browse" />
			<CtxBanner />
			<Faq />
		</>
	)
}
