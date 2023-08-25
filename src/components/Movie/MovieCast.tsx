import { getCastImage } from '@/api/config'
import { ICast, ImdbCast } from '@/types/movie-types'
import { Anchor, Flex, ScrollArea, Skeleton, Stack, Title } from '@mantine/core'
import NextImage from 'next/image'
import React, { useState } from 'react'
import { PLACEHOLDER_URL } from '../CustomImage'
import { CustomTooltip } from '../ui'

const NOT_FOUND_URL = 'https://otoa-website.s3.us-east-2.amazonaws.com/profiles/no-image.png'

interface CastProps {
	name: string
	imageUrl: string
}

const Cast: React.FC<CastProps> = ({ name, imageUrl }) => {
	const [imgSrc, setImgSrc] = useState<string>(imageUrl)

	const handleImageError = () => {
		setImgSrc(NOT_FOUND_URL)
	}

	return (
		<CustomTooltip label={name}>
			<Anchor href={`https://www.imdb.com/find?q=${encodeURIComponent(name)}&ref_=nv_sr_sm`} target="_blank">
				<NextImage
					src={imgSrc || NOT_FOUND_URL}
					alt={`${name} not found`}
					quality={60}
					height={90}
					width={90}
					placeholder="blur"
					blurDataURL={PLACEHOLDER_URL}
					className="rounded-sm object-cover"
					onError={handleImageError}
				/>
			</Anchor>
		</CustomTooltip>
	)
}

interface MovieCastProps {
	isTmdbMovie: boolean
	ytsCast: ICast[]
	tmdbCast: ImdbCast[]
	isLoading: boolean
}

const MovieCast: React.FC<MovieCastProps> = ({ isTmdbMovie, ytsCast, tmdbCast, isLoading }) => {
	return (
		<Stack spacing="xs" mt="xs">
			<Title order={4}>Cast/Credits</Title>
			<ScrollArea offsetScrollbars>
				<Flex gap="10px">
					{isTmdbMovie
						? isLoading
							? Array(10)
									.fill(null)
									.map((_, i) => <Skeleton key={i} visible height={90} width={90} />)
							: tmdbCast?.map(cast => (
									<Cast key={cast.id} name={cast.original_name} imageUrl={getCastImage(cast.profile_path || '')} />
							  ))
						: ytsCast?.map(cast => <Cast key={cast.imdb_code} name={cast.name} imageUrl={cast.url_small_image} />)}
				</Flex>
			</ScrollArea>
		</Stack>
	)
}

export default MovieCast
