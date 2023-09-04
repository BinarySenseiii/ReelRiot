import Banners from '@/components/Banners'
import { MovieByGenre } from '@/components/Movie'
import { Container } from '@/components/ui'
import { Button, Center, Stack, rem } from '@mantine/core'
import Link from 'next/link'

// we've implemented some changes on the site over the past few days. Currently, I'm in the process of checking the mobile view, and afterward, I will proceed to check the super admin .

export default function HomePage() {
	return (
		<>
			<Banners />
			<Container py={rem(40)} className="w-full">
				<Stack spacing={rem(40)}>
					<MovieByGenre title="Horror" genre="horror" />
					<MovieByGenre title="Action / Adventure" genre="action" />
					<MovieByGenre title="Romance" genre="romance" />
				</Stack>
				<Center mt="lg">
					<Link href="/browse">
						<Button size="xs">Browse More</Button>
					</Link>
				</Center>
			</Container>
		</>
	)
}
