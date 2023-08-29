import { IImages, ITmdbVideosResult, queryArgs } from '@/types/movie-types'
import { Tabs } from '@mantine/core'
import React, { useMemo } from 'react'
import { BsFillCameraVideoFill, BsImages } from 'react-icons/bs'
import { MovieBackdropImages, MoviePosters } from './MovieImages'
import MovieVideos from './MovieVideos'
import { useVideos } from '@/api/hooks'

interface MovieTabsProps {
	images?: IImages
	ytsMovieTitle: string
	ytsImages: string[]
	queryArgs: queryArgs
}

const tabData = [
	{ value: 'backdrops', icon: <BsImages size={14} />, label: 'Backdrops' },
	{ value: 'posters', icon: <BsImages size={14} />, label: 'Posters' },
	{
		value: 'videos',
		icon: <BsFillCameraVideoFill size={18} />,
		label: 'Videos',
	},
]

const MovieTabs: React.FC<MovieTabsProps> = ({ queryArgs, images, ytsMovieTitle, ytsImages }) => {
	const videos = useVideos(queryArgs)
	const tabPanels = useMemo(() => {
		return tabData.map(tab => {
			let component

			if (tab.value === 'backdrops') {
				component = <MovieBackdropImages ytsImages={ytsImages} backdrops={images?.backdrops} title={ytsMovieTitle} />
			} else if (tab.value === 'posters') {
				component = <MoviePosters posters={images?.posters} title={ytsMovieTitle} />
			} else if (tab.value === 'videos') {
				component = <MovieVideos title={ytsMovieTitle} videos={videos.data} isLoading={videos.isLoading} />
			}

			return { value: tab.value, component }
		})
	}, [images, ytsMovieTitle, videos, ytsImages])

	return (
		<Tabs defaultValue="backdrops" mt="sm" styles={{ tabsList: { border: 0, marginBottom: '.5rem' } }}>
			<Tabs.List>
				{tabData.map((tab, index) => (
					<Tabs.Tab key={index} value={tab.value} icon={tab.icon} className="text-xs md:text-base">
						{tab.label}
					</Tabs.Tab>
				))}
			</Tabs.List>

			{tabPanels.map((tabPanel, index) => (
				<Tabs.Panel key={index} value={tabPanel.value} pt="xs">
					{tabPanel.component}
				</Tabs.Panel>
			))}
		</Tabs>
	)
}

export default MovieTabs
