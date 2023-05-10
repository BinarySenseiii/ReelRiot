import { SITE_URL } from '@/constants/defaults';
import { DefaultSeoProps } from 'next-seo';

const description = `
Welcome to the official ReelRiot website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. ReelRio Movies Torrents.
`;

const SeoConfig: DefaultSeoProps = {
  title: 'The Official Home Of Reel Riot Movies - Torrent Downloads ',
  description: description,
  canonical: SITE_URL,

  openGraph: {
    site_name: 'ReelRiot',
    title: 'The Official Home Of Reel Riot Movies - Torrent Downloads ',
    description: description,
    locale: 'en',

    url: SITE_URL,
    images: [
      {
        url: '/og_image.png',
        alt: 'ReelRiot og-image',
      },
    ],
  },

  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },

  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: `/favicons/apple-touch-icon.png`,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `/favicons/favicon-32x32.png`,
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/favicons/favicon-16x16.png`,
    },
    { rel: 'manifest', href: `/manifest.json` },
    { rel: 'shortcut icon', href: `/favicon.ico` },
  ],
};

export default SeoConfig;
