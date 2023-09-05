import Banners from '@/components/Banners'
import CtxBanner from '@/components/CtxBanner'
import { MovieByGenre, MoviesGrid } from '@/components/Movie'
import QuickBrowse from '@/components/QuickBrowse'
import { ButtonWithDivider, Container } from '@/components/ui'
import { MovieGenre } from '@/types/movie-types'
import { Stack, rem } from '@mantine/core'
import { useState } from 'react'

export default function HomePage() {
	const [value, setValue] = useState<MovieGenre>('all')
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
			<QuickBrowse setValue={setValue} value={value} />
		</>
	)
}
