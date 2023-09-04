import { Box, rem, Overlay, Container, Stack, Title, Text } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import browseBannerImage from '@/assets/images/browse-banner.webp'

const GRADIENT = 'linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.2) 100%)'

const BrowseBanner = () => {
	return (
		<Box className="relative flex items-center justify-center h-[60vh] md:h-96">
			<Overlay blur={4.3} gradient={GRADIENT} className="opacity-100 z-[1]" />
			<Image
				src={browseBannerImage}
				className="object-cover"
				placeholder="blur"
				alt="browse Banner not found"
				priority
				fill
			/>

			<Box className="relative z-10">
				<Container>
					<Stack align="center" justify="center" maw={708}>
						<Title ta="center" fw={900}>
							Browse Movies
						</Title>

						<Text ta="center" fz={{ base: 'sm', md: 'xl' }}>
							Here you can browse and download movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the
							smallest file size
						</Text>
					</Stack>
				</Container>
			</Box>
		</Box>
	)
}

export default BrowseBanner
