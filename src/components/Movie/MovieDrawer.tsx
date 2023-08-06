import { IMovie } from '@/types/movie-types'
import { AspectRatio, Drawer, ScrollArea, rem } from '@mantine/core'
import Image from 'next/image'

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
			withCloseButton={true}
			padding={0}
			scrollAreaComponent={ScrollArea.Autosize}
			styles={{
				close: {
					position: 'absolute',
					right: rem(10),
					top: rem(10),
				},
			}}
		>
			<AspectRatio ratio={16 / 6} maw={600}>
				<Image
					alt={`${movie.title} not found`}
					src={movie.background_image_original || movie.background_image}
					fill
				/>
			</AspectRatio>
		</Drawer>
	)
}
