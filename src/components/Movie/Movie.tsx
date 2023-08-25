import { Badge, Button, Group, Rating, Stack, Text, Title } from '@mantine/core'
import React, { Fragment, ReactNode } from 'react'

import { IMovie } from '@/types/movie-types'
import { checkQuality } from '@/utils'
import Link from 'next/link'
import { BiHeart } from 'react-icons/bi'
import CustomImage from '../CustomImage'
import useMovieStyles from './movieSyles'
import { useRouter } from 'next/router'
import { CustomTooltip } from '../ui'

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

	const REDIRECT_URL = `/movie/${movie.slug}?id=${movie.imdb_code}`

	return (
		<ContentWrapper withContent={withContent} label={movie.title_long}>
			<Stack className={'cursor-pointer'} onClick={() => !withContent && router.push(REDIRECT_URL)}>
				<CustomImage
					posterSrc={isSuggestionList ? movie.medium_cover_image : movie.large_cover_image}
					title={movie.title_english}
				/>
				{withContent && (
					<Stack spacing="xs">
						<Title color="dimmed" lineClamp={1} order={5}>
							{movie.title}
						</Title>
						<Group>
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
						<Text lineClamp={2} fz="xs">
							{movie.description_full.length > 10
								? movie.description_full
								: "We're currently in the process of preparing a comprehensive description for this movie Stay Tuned"}
						</Text>
						<div className="flex gap-2">
							<Link href={REDIRECT_URL} as={REDIRECT_URL} className="w-full">
								<Button className="flex-1" variant="white" compact color="dark" fullWidth>
									View Details
								</Button>
							</Link>
							<Button compact w="max-content">
								<BiHeart size="20px" />
							</Button>
						</div>
					</Stack>
				)}
			</Stack>
		</ContentWrapper>
	)
}

export default Movie
