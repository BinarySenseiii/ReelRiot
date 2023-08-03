import { IMovie } from '@/types/movie-types'
import { Drawer, ScrollArea, Stack, Title } from '@mantine/core'
import CustomImage from '../CustomImage'

export default function MovieDrawer({
	opened,
	close,
	movie,
}: {
	opened: boolean
	close: () => void
	movie: IMovie
}) {
	return (
		<Drawer
			opened={opened}
			onClose={close}
			withCloseButton={false}
			padding={0}
			scrollAreaComponent={ScrollArea.Autosize}
		>
			<CustomImage
				posterSrc={movie.large_cover_image}
				title={movie.title_english}
			/>

			<Stack>
				<Title>{movie.title_long}</Title>
				<Title>{movie.title_long}</Title>
				<Title>{movie.title_long}</Title>
				<Title>{movie.title_long}</Title>
				<Title>{movie.title_long}</Title>
			</Stack>
		</Drawer>
	)
}
