import React, { Fragment } from 'react'
import NativePlayer from './NativePlayer'
import { BannerContentType } from '@/mock/banners'
import { Stack, Title, Group, Anchor, Button, Text, rem } from '@mantine/core'
import Link from 'next/link'
import { Container } from './ui'
import { useMediaQuery } from '@mantine/hooks'

const HeroContent = ({ movie }: { movie: BannerContentType | undefined }) => {
	const matches = useMediaQuery(`(max-width: ${rem('768px')})`)
	return (
		<Fragment>
			<div
				className=" h-full w-full absolute inset-0 overflow-hidden pointer-events-none"
				onContextMenu={e => e.preventDefault()}
			>
				<NativePlayer src={movie?.video_url ?? ''} withLoader withOverlay />
			</div>

			<Container className="h-[80vh] md:h-screen">
				<Stack className="relative z-10 w-full h-full" justify="center" maw={768}>
					<Text fz={{ base: 'sm', md: 'lg' }} color="red.500" fw={600}>
						{movie?.genres.join(' - ')}
					</Text>
					<Title className="text-2xl md:text-4xl lg:text-6xl leading-snug">{movie?.title}</Title>
					<Text fw={500} fz={{ base: 'sm', md: 'lg' }}>
						{movie?.info?.join(' | ')}
					</Text>
					<Text lineClamp={2}>{movie?.storyline}</Text>
					<Group mt={{ base: '10px', md: '20px' }}>
						<Anchor href={movie?.trailerURI} target="_blank">
							<Button variant="white" color="dark" size={matches ? 'xs' : 'sm'}>
								Watch Trailer
							</Button>
						</Anchor>
						<Link href={movie?.redirectURI ?? ''}>
							<Button size={matches ? 'xs' : 'sm'}>View Details</Button>
						</Link>
					</Group>
				</Stack>
			</Container>
		</Fragment>
	)
}

export default HeroContent
