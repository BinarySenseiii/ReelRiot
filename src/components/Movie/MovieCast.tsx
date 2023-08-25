import { getCastImage } from '@/api/config'
import { ICast, ImdbCast } from '@/types/movie-types'
import {
	Avatar,
	Flex,
	Image,
	ScrollArea,
	Stack,
	Title,
	Tooltip,
} from '@mantine/core'
import React, { ReactNode } from 'react'

interface MovieCast {
	isTmdbMovie: boolean
	ytsCast: ICast[]
	tmdbCast: ImdbCast[]
}

const ScrollWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
	<ScrollArea mt="xs">
		<Flex gap="20px">{children}</Flex>
	</ScrollArea>
)

const Cast = ({ name, imageUrl }: { name: string; imageUrl: string }) => {
	return (
		<Tooltip
			color="white"
			label={name}
			withArrow
			arrowSize={10}
			withinPortal
			styles={{ tooltip: { color: 'black' } }}
		>
			<Avatar
				component="a"
				src={imageUrl}
				size="xl"
				href={`https://www.imdb.com/find?q=${encodeURIComponent(
					name,
				)}&ref_=nv_sr_sm`}
				target="_blank"
			>
				<Image
					src="https://otoa-website.s3.us-east-2.amazonaws.com/profiles/no-image.png"
					alt="avatar fallback"
				/>
			</Avatar>
		</Tooltip>
	)
}

const MovieCast: React.FC<MovieCast> = ({ isTmdbMovie, ytsCast, tmdbCast }) => {
	return (
		<Stack spacing="xs" mt="xs">
			<Title order={4}>Cast/Credits</Title>
			<ScrollWrapper>
				{isTmdbMovie &&
					tmdbCast &&
					tmdbCast.length > 0 &&
					tmdbCast.map(cast => (
						<Cast
							key={cast.id}
							name={cast.original_name}
							imageUrl={getCastImage(cast.profile_path ?? '')}
						/>
					))}

				{ytsCast?.map((cast: ICast) => (
					<Cast
						key={cast.imdb_code}
						name={cast.name}
						imageUrl={cast.url_small_image}
					/>
				))}
			</ScrollWrapper>
		</Stack>
	)
}

export default MovieCast
