import { NOT_FOUND_TEXT } from '@/api/config'
import { useMovieSuggestions } from '@/api/hooks'
import { ICredits, IImages, IMovie, ITmdbMovie, IVideoResult } from '@/types/movie-types'
import { Badge, Grid, Group, Rating, Spoiler, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import MovieCast from './MovieCast'
import MovieSuggestions from './MovieSuggestions'
import MovieTabs from './MovieTabs'
import MovieTorrents from './MovieTorrents'

interface MovieRightContentProps {
	isTmdbMovie: boolean
	tMovie: ITmdbMovie[] | undefined
	ytsMovie: IMovie | undefined
	images: IImages | undefined
	videos: IVideoResult
	movieCredits: {
		data: ICredits
		isLoading: boolean
	}
}

const MovieRightContent: React.FC<MovieRightContentProps> = ({
	isTmdbMovie,
	tMovie,
	ytsMovie,
	images,
	videos,
	movieCredits,
}) => {
	const tmdbMovie = tMovie?.at(0)
	const { data, isLoading } = useMovieSuggestions(String(ytsMovie?.id))
	return (
		<Grid.Col span={9}>
			{ytsMovie && (
				<Stack>
					<Grid>
						<Grid.Col span={9}>
							<Stack>
								<Title className="text-4xl" fw={900}>
									{isTmdbMovie ? tMovie?.at(0)?.title : ytsMovie?.title_english}{' '}
								</Title>

								<Group spacing={6} mt="sm">
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

						<Grid.Col span={3}>
							<MovieSuggestions isLoading={isLoading} movies={data} />
						</Grid.Col>
					</Grid>

					<MovieCast
						isTmdbMovie={isTmdbMovie}
						ytsCast={ytsMovie.cast}
						tmdbCast={movieCredits?.data?.cast}
						isLoading={movieCredits.isLoading}
					/>

					<Stack spacing={5}>
						<Title order={4}>Overview</Title>
						<Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
							<Text color="gray.5">
								{ytsMovie.description_full !== ''
									? ytsMovie.description_full.length > 0
										? ytsMovie.description_full
										: tMovie && tmdbMovie?.overview
									: NOT_FOUND_TEXT}
							</Text>
						</Spoiler>
					</Stack>

					<MovieTabs
						images={images}
						ytsMovieTitle={ytsMovie.title_english}
						videos={videos}
						ytsImages={[
							ytsMovie.large_screenshot_image1,
							ytsMovie.large_screenshot_image2,
							ytsMovie.large_screenshot_image3,
						]}
					/>
				</Stack>
			)}
		</Grid.Col>
	)
}

export default MovieRightContent
