import { getReviewImage } from '@/api/config'
import { useReviews } from '@/api/hooks'
import { queryArgs } from '@/types/movie-types'
import { convertToReadableDate } from '@/utils'
import { Anchor, Box, Group, ScrollArea, Spoiler, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { PLACEHOLDER_URL } from '../CustomImage'
import { NOT_FOUND_URL } from './MovieCast'

const CustomImage = ({ imageUrl, name }: { imageUrl: string; name: string }) => {
	const [imgSrc, setImgSrc] = useState<string>(imageUrl)

	const handleImageError = () => {
		setImgSrc(NOT_FOUND_URL)
	}

	return (
		<Image
			src={imgSrc}
			alt={`${name} not found`}
			quality={60}
			height={50}
			width={50}
			placeholder="blur"
			blurDataURL={PLACEHOLDER_URL}
			className="rounded-full object-cover"
			onError={handleImageError}
		/>
	)
}

const MovieReviews = ({ queryArgs, imdbCode }: { queryArgs: queryArgs; imdbCode: string }) => {
	const reviews = useReviews(queryArgs)

	return (
		<Stack mb="xl" spacing={'xs'}>
			<Title order={3} mb="xs">
				Reviews
			</Title>
			{reviews.data && reviews.data?.length > 0 ? (
				<ScrollArea.Autosize mah={450} offsetScrollbars>
					{reviews.data?.map(review => (
						<Box key={review.id} mb="lg">
							<Group>
								<CustomImage imageUrl={getReviewImage(review.author_details.avatar_path)} name={review.author} />

								<Stack spacing={0}>
									<Text lineClamp={1}>{review.author}</Text>
									<Text fz="xs" color="gray">
										{convertToReadableDate(review.created_at)}
									</Text>
								</Stack>
							</Group>
							<Spoiler maxHeight={75} showLabel="Show more" hideLabel="Hide" classNames={{ control: 'text-sm mt-3' }}>
								<Text mt="xs" className="text-sm leading-5 md:text-base">
									{review.content}
								</Text>
							</Spoiler>
						</Box>
					))}
				</ScrollArea.Autosize>
			) : (
				<Stack>
					<Text color="gray">No reviews for this movie yet. Be the first to write a review!</Text>
					<Anchor
						href={`https://www.imdb.com/title/${imdbCode}/reviews`}
						target="_blank"
						className="inline-block items-center gap-1"
					>
						<Group spacing={4}>
							<BiLinkExternal />
							<span>Read Reviews on IMDB</span>
						</Group>
					</Anchor>
				</Stack>
			)}
		</Stack>
	)
}

export default MovieReviews
