import { NOT_FOUND_TEXT } from '@/api/config'
import { useCredits, useImages, useMovieSuggestions } from '@/api/hooks'
import { IMovie, ITmdbMovie } from '@/types/movie-types'
import { Badge, Box, Grid, Group, Rating, Spoiler, Stack, Text, Title } from '@mantine/core'
import React, { useMemo } from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import MovieCast from './MovieCast'
import MovieReviewForm from './MovieReviewForm'
import MovieReviews from './MovieReviews'
import MovieSuggestions from './MovieSuggestions'
import MovieTabs from './MovieTabs'
import MovieTorrents from './MovieTorrents'

interface MovieRightContentProps {
	isTmdbMovie: boolean
	tMovie: ITmdbMovie[] | undefined
	ytsMovie: IMovie | undefined
}

const MovieRightContent: React.FC<MovieRightContentProps> = ({ isTmdbMovie, tMovie, ytsMovie }) => {
	const tmdbMovie = tMovie?.at(0)
	const imdbCode = ytsMovie?.imdb_code ?? ''

	const queryArgs = useMemo(() => ({ imdbCode, isTmdbMovie }), [imdbCode, isTmdbMovie])

	const suggestion = useMovieSuggestions(String(ytsMovie?.id))
	const credits = useCredits(queryArgs, data => data.cast)
	const images = useImages(queryArgs)

	return (
		<Grid.Col md={9}>
			{ytsMovie && (
				<Stack>
					<Grid>
						<Grid.Col lg={9}>
							<Stack>
								<Title className="text-2xl md:text-4xl" fw={900}>
									{isTmdbMovie ? tMovie?.at(0)?.title : ytsMovie?.title_english}{' '}
								</Title>

								<Group spacing={6} mt={{ md: 'sm' }}>
									{ytsMovie.genres.map(genre => (
										<Badge key={genre} variant="filled" size="sm">
											{genre}
										</Badge>
									))}
								</Group>

								<Stack spacing="xs">
									<Group spacing="xs">
										<Rating value={(ytsMovie.rating / 10) * 5} readOnly fractions={2} />
										<Text>{ytsMovie.rating} / 10</Text>
										<AiOutlineMessage />
										<Text>5</Text>
									</Group>

									<Group spacing="xs">
										<Text fz="md">
											<Text component="strong">Release Year: </Text>
											{isTmdbMovie ? tmdbMovie?.release_date : ytsMovie.year}
										</Text>

										<Text fz="md">
											<Text component="strong">Runtime: </Text>
											{ytsMovie.runtime === 0 ? '120' : ytsMovie.runtime} Mins
										</Text>
										<Text fz="md">
											<Text component="strong">Language: </Text>
											{isTmdbMovie ? tmdbMovie?.original_language : ytsMovie.language}
										</Text>
									</Group>
								</Stack>

								<MovieTorrents isTitle torrents={ytsMovie.torrents} imdb_code={ytsMovie.imdb_code} />
							</Stack>
						</Grid.Col>

						<Grid.Col lg={3} display={{ base: 'none', lg: 'grid' }}>
							<MovieSuggestions isLoading={suggestion.isLoading} movies={suggestion.data} />
						</Grid.Col>
					</Grid>

					<MovieCast
						isTmdbMovie={isTmdbMovie}
						ytsCast={ytsMovie.cast}
						tmdbCast={credits.data}
						isLoading={credits.isLoading}
					/>

					<Stack spacing={5}>
						<Title order={4}>Overview</Title>
						<Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
							<Text color="gray.5" className="text-xs leading-5 line md:text-base">
								{ytsMovie.description_full !== ''
									? ytsMovie.description_full.length > 0
										? ytsMovie.description_full
										: tMovie && tmdbMovie?.overview
									: NOT_FOUND_TEXT}
							</Text>
						</Spoiler>
					</Stack>

					<MovieTabs
						queryArgs={queryArgs}
						images={images.data}
						ytsMovieTitle={ytsMovie.title_english}
						ytsImages={[
							ytsMovie.large_screenshot_image1,
							ytsMovie.large_screenshot_image2,
							ytsMovie.large_screenshot_image3,
						]}
					/>

					<Box display={{ base: 'grid', lg: 'none' }}>
						<MovieSuggestions isLoading={suggestion.isLoading} movies={suggestion.data} />
					</Box>

					<MovieReviewForm />
					<MovieReviews queryArgs={queryArgs} imdbCode={imdbCode} />
				</Stack>
			)}
		</Grid.Col>
	)
}

export default MovieRightContent
