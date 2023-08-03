import { Box, rem, Overlay, Container, Stack, Title, Text } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import browseBannerImage from '@/assets/images/browse-banner.jpg'

const BrowseBanner = () => {
	return (
		<Box
			sx={{
				position: 'relative',
				height: rem(400),
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Overlay
				gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.2) 100%)"
				opacity={1}
				zIndex={2}
				blur={4.5}
			/>
			<Image
				src={browseBannerImage}
				alt="browse Banner not found"
				priority
				placeholder="blur"
				fill
				style={{ objectFit: 'cover' }}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>

			<Box sx={{ position: 'relative', zIndex: 3 }}>
				<Container>
					<Stack align="center" justify="center" maw={708}>
						<Title ta="center" fw={900}>
							Browse Movies
						</Title>

						<Text ta="center" fz={{ md: 'xl' }}>
							Here you can browse and download movies in excellent 720p, 1080p,
							2160p 4K and 3D quality, all at the smallest file size
						</Text>
					</Stack>
				</Container>
			</Box>
		</Box>
	)
}

export default BrowseBanner
