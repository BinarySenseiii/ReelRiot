import { getReviewImage } from '@/api/config'
import { useReviews } from '@/api/hooks'
import { FReview, queryArgs } from '@/types/movie-types'
import { convertToReadableDate } from '@/utils'
import { Anchor, Box, Group, ScrollArea, Spoiler, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { PLACEHOLDER_URL } from '../CustomImage'
import { NOT_FOUND_URL } from './MovieCast'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/services/firebase'
import { useRouter } from 'next/router'

const Review = ({
	name,
	avatar,
	created_at,
	content,
	isRelativeAvatarPath,
}: {
	name: string
	avatar: string
	created_at: string
	content: string
	isRelativeAvatarPath?: boolean
}) => {
	return (
		<Box mb="lg">
			<Group>
				<CustomImage
					imageUrl={isRelativeAvatarPath ? avatar : getReviewImage(avatar)}
					name={name}
				/>

				<Stack spacing={0}>
					<Text lineClamp={1}>{name}</Text>
					<Text fz="xs" color="gray">
						{convertToReadableDate(created_at)}
					</Text>
				</Stack>
			</Group>
			<Spoiler
				maxHeight={75}
				showLabel="Show more"
				hideLabel="Hide"
				classNames={{ control: 'text-sm mt-3' }}
			>
				<Text mt="xs" className="text-sm leading-5 md:text-base">
					{content}
				</Text>
			</Spoiler>
		</Box>
	)
}

const MovieReviews = ({ queryArgs, imdbCode }: { queryArgs: queryArgs; imdbCode: string }) => {
	const reviews = useReviews(queryArgs)
	const [reviewsData, setReviewsData] = useState<FReview[]>([])
	console.log('reviewsData::: ', reviewsData)
	const { query } = useRouter()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const reviewsCollection = collection(db, `${query.id}`)
				const snapshot = await getDocs(reviewsCollection)
				const data = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}))
				setReviewsData(data as FReview[])
			} catch (error) {
				console.error('Error fetching data from Firestore:', error)
			}
		}

		fetchData()
	}, [query.id])

	return (
		<Stack mb="xl" spacing={'xs'}>
			<Title order={3} mb="xs">
				Reviews
			</Title>

			{(reviews.data && reviews.data?.length > 0) || (reviewsData && reviewsData.length > 0) ? (
				<ScrollArea.Autosize mah={450} offsetScrollbars>
					{reviewsData &&
						reviewsData.length > 0 &&
						reviewsData.map(review => (
							<Review
								key={review.id}
								name={review.name}
								created_at={review.created_at}
								avatar={review.avatar}
								content={review.content}
								isRelativeAvatarPath
							/>
						))}

					{reviews.data?.map(review => (
						<Review
							key={review.id}
							name={review.author}
							created_at={review.created_at}
							avatar={review.author_details.avatar_path}
							content={review.content}
						/>
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
