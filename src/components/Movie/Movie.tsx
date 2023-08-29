import { Badge, Button, Group, Rating, Stack, Text, Title, rem } from '@mantine/core'
import React, { Fragment, ReactNode } from 'react'

import { IMovie } from '@/types/movie-types'
import { checkQuality } from '@/utils'
import Link from 'next/link'
import { BiHeart } from 'react-icons/bi'
import CustomImage from '../CustomImage'
import useMovieStyles from './movieSyles'
import { useRouter } from 'next/router'
import { CustomTooltip } from '../ui'
import { useMediaQuery } from '@mantine/hooks'

type MovieProps = {
	movie: IMovie
	isSuggestionList?: boolean
	withContent?: boolean
}

const ContentWrapper = ({
	children,
	withContent,
	label,
}: {
	children: ReactNode
	withContent: boolean
	label?: string
}) => (withContent ? <Fragment>{children}</Fragment> : <CustomTooltip label={label ?? ''}>{children}</CustomTooltip>)

const Movie: React.FC<MovieProps> = ({ movie, isSuggestionList, withContent = true }) => {
	const {
		classes: { root },
	} = useMovieStyles()
	const router = useRouter()
	const matches = useMediaQuery(`(min-width: ${rem('640px')})`)

	const REDIRECT_URL = `/movie/${movie.slug}?id=${movie.imdb_code}`

	return (
		<ContentWrapper withContent={withContent} label={movie.title_long}>
			<Stack className={'cursor-pointer relative'} onClick={() => !withContent && router.push(REDIRECT_URL)}>
				<CustomImage
					posterSrc={isSuggestionList ? movie.medium_cover_image : movie.large_cover_image}
					title={movie.title_english}
				/>

				{withContent && (
					<Badge ml="auto" classNames={{ root }} className="block sm:hidden absolute">
						{checkQuality(movie.torrents)}
					</Badge>
				)}
				{withContent && (
					<Stack className="gap-2 sm:gap-3">
						<Title lineClamp={1} className="text-sm sm:text-base">
							{movie.title}
						</Title>
						<Group className="hidden sm:flex">
							<Group spacing={1}>
								<Rating defaultValue={2} count={1} />
								<Text color="dimmed" fw={600} fz="xs">
									{movie.rating}/10
								</Text>
							</Group>

							<Text color="dimmed" fw={600} fz="xs">
								{movie.year}
							</Text>

							<Text color="dimmed" fw={600} fz="xs">
								{movie.runtime >= 0 ? movie.runtime : '120'} Min
							</Text>

							<Badge ml="auto" classNames={{ root }} pos="static">
								{checkQuality(movie.torrents)}
							</Badge>
						</Group>
						<Text lineClamp={2} fz="xs" color="dimmed">
							{movie.description_full.length > 10
								? movie.description_full
								: "We're currently in the process of preparing a comprehensive description for this movie Stay Tuned"}
						</Text>
						<div className="flex gap-2">
							<Link href={REDIRECT_URL} as={REDIRECT_URL} className="w-full">
								<Button className="flex-1" variant="white" size={matches ? 'sm' : 'xs'} compact color="dark" fullWidth>
									View More
								</Button>
							</Link>
							<Button compact w="max-content" size={matches ? 'sm' : 'xs'}>
								<BiHeart className="text-lg sm:text-xl" />
							</Button>
						</div>
					</Stack>
				)}
			</Stack>
		</ContentWrapper>
	)
}

export default Movie
