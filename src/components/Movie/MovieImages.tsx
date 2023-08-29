import { getBackdropImage, getLogoImage, getPosterImage } from '@/api/config'
import { ICommon } from '@/types/movie-types'
import CustomImage from '../CustomImage'
import { Text } from '@mantine/core'
import Carousal from '../Carousal'
import { Carousel } from '@mantine/carousel'

export const MovieBackdropImages = ({
	ytsImages,
	backdrops,
	title,
}: {
	ytsImages: string[]
	backdrops: ICommon[] | undefined
	title: string
}) => {
	return (
		<Carousal>
			{backdrops &&
				backdrops.length > 0 &&
				backdrops.map((backdrop, i) => (
					<Carousel.Slide key={i}>
						<CustomImage
							isThumbnail={true}
							posterSrc={getBackdropImage(backdrop.file_path)}
							title={title}
							aspect={backdrop.aspect_ratio}
						/>
					</Carousel.Slide>
				))}
			{ytsImages.map((img, index) => (
				<Carousel.Slide key={index}>
					<CustomImage isThumbnail={true} posterSrc={img} title={title} />
				</Carousel.Slide>
			))}
		</Carousal>
	)
}

export const MoviePosters = ({ posters, title }: { posters: ICommon[] | undefined; title: string }) => {
	return (
		<Carousal slideSize="20%">
			{posters && posters.length > 0 ? (
				posters.map((poster, i) => (
					<Carousel.Slide key={i}>
						<CustomImage posterSrc={getPosterImage(poster.file_path)} title={title} aspect={4 / 6} />
					</Carousel.Slide>
				))
			) : (
				<Text>No posters available for {title}</Text>
			)}
		</Carousal>
	)
}

export const MovieLogos = ({ logos, title }: { logos: ICommon[] | undefined; title: string }) => {
	return (
		<Carousal>
			{logos && logos.length > 0 ? (
				logos.map((logo, i) => (
					<Carousel.Slide key={i}>
						<CustomImage posterSrc={getLogoImage(logo.file_path)} title={title} aspect={logo.aspect_ratio} />
					</Carousel.Slide>
				))
			) : (
				<Text>No logos available for {title}</Text>
			)}
		</Carousal>
	)
}
