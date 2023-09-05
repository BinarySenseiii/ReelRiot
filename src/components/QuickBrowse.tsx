import { movieGenresWithHash } from '@/mock/movie-filters'
import { SegmentedControl, Stack, Title, Text, ScrollArea } from '@mantine/core'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { MoviesGrid } from './Movie'
import { Container } from './ui'
import { MovieGenre } from '@/types/movie-types'

const QuickBrowse = ({ value, setValue }: { value: MovieGenre; setValue: Dispatch<SetStateAction<MovieGenre>> }) => {
	const [isDisabled, setIsDisabled] = useState(false)
	return (
		<Container pt={{ base: 20, md: 40 }} mb="40px" className="w-full">
			<Stack className="w-full">
				<Stack spacing="xs">
					<Title order={4}>Discover Exciting Movies</Title>
					<Text color="dimmed">
						Take your time to browse through our curated collection and find the perfect movie for your next movie
						night. Grab some popcorn, sit back, and immerse yourself in the world of cinema.
					</Text>
				</Stack>
				<ScrollArea offsetScrollbars>
					<SegmentedControl
						disabled={isDisabled}
						value={value}
						onChange={currentFilter => setValue(currentFilter as MovieGenre)}
						size="sm"
						color="red.7"
						data={movieGenresWithHash}
						fullWidth
						styles={{
							root: {
								background: 'transparent',
							},
							control: {
								border: '0px !important',
							},
						}}
					/>
				</ScrollArea>

				<MoviesGrid genre={value} withCtx={false} moviesLimit={12} setIsDisabled={setIsDisabled} />
			</Stack>
		</Container>
	)
}

export default QuickBrowse
