import { ITorrent } from '@/types/movie-types'

export default function checkQuality(data: ITorrent[]) {
	const quality2160pExists = data.some(obj => obj.quality === '2160p')
	return quality2160pExists ? '4K' : 'HD'
}
