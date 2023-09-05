import { IFilterOption } from '@/types/movie-types'

export const movieQuality = [
	{ value: 'all', label: 'All' },
	{ value: '720p', label: '720p' },
	{ value: '1080p', label: '1080p' },
	{ value: '2160p', label: '2160p' },
	{ value: '3D', label: '3D' },
]

export const movieGenres = [
	{ value: 'all', label: 'All' },
	{ value: 'action', label: 'Action' },
	{ value: 'adventure', label: 'Adventure' },
	{ value: 'animation', label: 'Animation' },
	{ value: 'biography', label: 'Biography' },
	{ value: 'comedy', label: 'Comedy' },
	{ value: 'crime', label: 'Crime' },
	{ value: 'documentary', label: 'Documentary' },
	{ value: 'drama', label: 'Drama' },
	{ value: 'family', label: 'Family' },
	{ value: 'fantasy', label: 'Fantasy' },
	{ value: 'film-noir', label: 'Film-noir' },
	{ value: 'game-show', label: 'Game-show' },
	{ value: 'history', label: 'History' },
	{ value: 'horror', label: 'Horror' },
	{ value: 'music', label: 'Music' },
	{ value: 'musical', label: 'Musical' },
	{ value: 'mystery', label: 'Mystery' },
	{ value: 'news', label: 'News' },
	{ value: 'reality-tv', label: 'Reality-tv' },
	{ value: 'romance', label: 'Romance' },
	{ value: 'sci-fi', label: 'Sci-fi' },
	{ value: 'sport', label: 'Sport' },
	{ value: 'talk-show', label: 'Talk-show' },
	{ value: 'thriller', label: 'Thriller' },
	{ value: 'war', label: 'War' },
	{ value: 'western', label: 'Western' },
]

export const movieGenresWithHash = movieGenres.map(genre => ({
	value: genre.value,
	label: `#${genre.label}`,
}))

export const movieRatings = [
	{ value: '0', label: 'All' },
	{ value: '9', label: '9+' },
	{ value: '8', label: '8+' },
	{ value: '7', label: '7+' },
	{ value: '6', label: '6+' },
	{ value: '5', label: '5+' },
	{ value: '4', label: '4+' },
	{ value: '3', label: '3+' },
	{ value: '2', label: '2+' },
	{ value: '1', label: '1+' },
]

export const movieYears = [
	{ value: 'all', label: 'All' },
	{ value: '2022', label: '2022' },
	{ value: '2021', label: '2021' },
	{ value: '2020', label: '2020' },
	{ value: '2019', label: '2019' },
	{ value: '2015-2018', label: '2015-2018' },
	{ value: '2010-2014', label: '2010-2014' },
	{ value: '2000-2009', label: '2000-2009' },
	{ value: '1990-1999', label: '1990-1999' },
	{ value: '1980-1989', label: '1980-1989' },
	{ value: '1970-1979', label: '1970-1979' },
	{ value: '1950-1969', label: '1950-1969' },
	{ value: '1900-1949', label: '1900-1949' },
]

export const movieLanguages = [
	{ value: 'all', label: 'All' },
	{ value: 'foreign', label: 'Foreign' },
	{ value: 'fr', label: 'French (2120)' },
	{ value: 'ja', label: 'Japanese (1842)' },
	{ value: 'es', label: 'Spanish (1056)' },
	{ value: 'it', label: 'Italian (1048)' },

	{ value: 'de', label: 'German (810)' },
	{ value: 'zh', label: 'Chinese (715)' },
	{ value: 'ko', label: 'Korean (673)' },
	{ value: 'cn', label: 'Cantonese (585)' },
	{ value: 'hi', label: 'Hindi (466)' },
	{ value: 'ru', label: 'Russian (291)' },
	{ value: 'sv', label: 'Swedish (271)' },
	{ value: 'pt', label: '2Portuguese (250)' },
	{ value: 'pl', label: 'Polish (223)' },
	{ value: 'th', label: 'Thai (151)' },
	{ value: 'da', label: 'Danish (148)' },
	{ value: 'nl', label: 'Dutch (106)' },

	{ value: 'no', label: 'Norwegian (98)' },
	{ value: 'ta', label: 'Tamil (81)' },
	{ value: 'fi', label: 'Finnish (77)' },
	{ value: 'cs', label: 'Czech (71)' },
	{ value: 'te', label: 'Telugu (71)' },
	{ value: 'ar', label: 'Arabic (70)' },
	{ value: 'hu', label: 'Hungarian (59)' },
	{ value: 'tr', label: 'Turkish (56)' },
	{ value: 'id', label: 'Indonesian (45)' },
	{ value: 'fa', label: 'Persian (42)' },
	{ value: 'tl', label: 'Tagalog (37)' },
	{ value: 'el', label: 'Greek (31)' },
	{ value: 'uk', label: 'Ukrainian (25)' },

	{ value: 'he', label: 'Hebrew (24)' },
	{ value: 'et', label: 'Estonian (23)' },
	{ value: 'ro', label: 'Romanian (21)' },
	{ value: 'bn', label: 'Bangla (18)' },
	{ value: 'ur', label: 'Urdu (16)' },
	{ value: 'ms', label: 'Malay (15)' },
	{ value: 'ml', label: 'Malayalam (15)' },
	{ value: 'ca', label: 'Catalan (13)' },
	{ value: 'is', label: 'Icelandic (12)' },
	{ value: 'xx', label: 'xx (8)' },
	{ value: 'pa', label: 'Punjabi (7)' },
]

export const movieOrder = [
	{ value: 'date_added', label: 'Date added' },
	{ value: 'download_count', label: 'Download Counts' },
	{ value: 'like_count', label: 'Like Counts' },
	{ value: 'seeds', label: 'Torent Seeds' },
	{ value: 'year', label: 'Year' },
	{ value: 'rating', label: 'IMDb Rating' },
]

const filterOptions: IFilterOption[] = [
	{
		id: 1,
		filter: movieQuality,
		label: 'Quality:',
		value: 'quality',
		ariaLabel: 'My select',
	},
	{
		id: 2,
		filter: movieGenres,
		label: 'Genre:',
		value: 'genre',
		ariaLabel: 'My select',
	},
	{
		id: 3,
		filter: movieRatings,
		label: 'Rating:',
		value: 'minimum_rating',
		ariaLabel: 'My select',
	},
	{
		id: 4,
		filter: movieOrder,
		label: 'Sort By:',
		value: 'sort_by',
		ariaLabel: 'My select',
	},
]

export default filterOptions
