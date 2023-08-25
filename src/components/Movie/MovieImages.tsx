import { getBackdropImage, getLogoImage, getPosterImage } from '@/api/config'
import { ICommon } from '@/types/movie-types'
import CustomImage from '../CustomImage'
import { Text } from '@mantine/core'

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
		<div className="grid grid-cols-backdrop gap-4">
			{backdrops &&
				backdrops.length > 0 &&
				backdrops.map((backdrop, i) => (
					<CustomImage
						isThumbnail={true}
						key={i}
						posterSrc={getBackdropImage(backdrop.file_path)}
						title={title}
						aspect={backdrop.aspect_ratio}
					/>
				))}
			{ytsImages.map((img, index) => (
				<CustomImage
					isThumbnail={true}
					key={index}
					posterSrc={img}
					title={title}
				/>
			))}
		</div>
	)
}

export const MoviePosters = ({
	posters,
	title,
}: {
	posters: ICommon[] | undefined
	title: string
}) => {
	return (
		<div className="grid grid-cols-auto-fit-media gap-4">
			{posters && posters.length > 0 ? (
				posters.map((poster, i) => (
					<CustomImage
						key={i}
						posterSrc={getPosterImage(poster.file_path)}
						title={title}
						aspect={poster.aspect_ratio}
					/>
				))
			) : (
				<Text>No posters available for {title}</Text>
			)}
		</div>
	)
}

export const MovieLogos = ({
	logos,
	title,
}: {
	logos: ICommon[] | undefined
	title: string
}) => {
	return (
		<div className="grid grid-cols-auto-fit-media gap-4">
			{logos && logos.length > 0 ? (
				logos.map((logo, i) => (
					<CustomImage
						key={i}
						posterSrc={getLogoImage(logo.file_path)}
						title={title}
						aspect={logo.aspect_ratio}
					/>
				))
			) : (
				<Text>No logos available for {title}</Text>
			)}
		</div>
	)
}
