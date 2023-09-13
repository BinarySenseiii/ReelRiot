import { Container } from '@/components/ui'
import { filterOptions } from '@/mock'
import { useMovieQuery, useMovieQueryActions } from '@/store/useMovieQueryStore'
import { QueryKey } from '@/types/context/query-type'
import { IFilterOption } from '@/types/movie-types'
import { Box, Button, Select, TextInput } from '@mantine/core'
import { getHotkeyHandler } from '@mantine/hooks'
import React, { useRef } from 'react'

const FilteringMovies: React.FC<{
	isLoading: boolean
}> = ({ isLoading }) => {
	const ref = useRef<HTMLInputElement>(null)
	const { onQueryChange } = useMovieQueryActions()
	const query = useMovieQuery()

	const onQuerySubmit = () => {
		if (typeof ref !== 'undefined' && ref.current) {
			if (!ref.current.value) return
			onQueryChange({
				query: ref.current.value,
				key: 'query_term',
				isQueryTerm: true,
				page: 1,
			})
		}
	}

	const onOptionSelect = (option: IFilterOption, value: QueryKey) => {
		onQueryChange({ query: value, key: option.value, page: 1 })

		if (ref.current) {
			ref.current.value = ''
		}
	}

	return (
		<Box
			sx={theme => ({
				background: theme.colors.dark[8],
				paddingBottom: '35px !important',
			})}
			py="xl"
		>
			<Container size="sm">
				<TextInput
					ref={ref}
					label="Search Term:"
					size="md"
					autoComplete="off"
					placeholder="Search Movie"
					onKeyDown={getHotkeyHandler([['Enter', onQuerySubmit]])}
					classNames={{
						label: 'mb-2',
						rightSection: 'right-6',
					}}
					rightSection={
						<Button
							compact
							loaderPosition="center"
							onClick={onQuerySubmit}
							loading={isLoading}
						>
							SEARCH
						</Button>
					}
				/>

				<div className="mt-3 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
					{filterOptions.map((option: IFilterOption) => (
						<Select
							key={option.id}
							label={option.label}
							classNames={{
								label: 'mb-2 !text-xs',
							}}
							size="xs"
							value={query.query_term ?? query[option.value]}
							onChange={(selectedValue: QueryKey) => {
								if (!selectedValue) return
								onOptionSelect(option, selectedValue)
							}}
							data={option.filter}
							aria-label={option.ariaLabel}
							placeholder="Choose"
						/>
					))}
				</div>
			</Container>
		</Box>
	)
}

export default FilteringMovies
