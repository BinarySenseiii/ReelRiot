import {
  Box,
  rem,
  Overlay,
  Container,
  Stack,
  Title,
  Text,
} from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import browseBannerImage from '@/assets/images/browse-banner.jpg';

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
        gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
        opacity={1}
        zIndex={2}
        blur={5.5}
      />
      <Image
        src={browseBannerImage}
        alt="browse Banner not found"
        priority
        placeholder="blur"
        fill
        style={{ objectFit: 'cover' }}
      />

      <Box sx={{ position: 'relative', zIndex: 3 }}>
        <Container>
          <Stack align="center" justify="center" maw={768}>
            <Title
              align="center"
              variant="gradient"
              gradient={{ from: 'brand.5', to: '#fff', deg: 85 }}
              ta="center"
              order={1}
              fw={900}
            >
              Browse Movies
            </Title>

            <Text align="center">
              Welcome to the official YTS.MX website. Here you can browse and
              download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D
              quality, all at the smallest file size. YTS Movies Torrents.
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default BrowseBanner;
