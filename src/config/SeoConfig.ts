import { SITE_URL } from '@/constants/defaults';
import { DefaultSeoProps } from 'next-seo';

const SeoConfig: DefaultSeoProps = {
   title: 'Next Mantine ',
   description: 'Next.js + mantine + TypeScript template',
   canonical: SITE_URL,

   openGraph: {
      site_name: 'Mantine Template',
      title: 'Nextjs Starter',
      description: 'Starter code for your Nextjs Boilerplate with Tailwind CSS',
      locale: 'en',

      url: SITE_URL,
      images: [
         {
            url: '/og_image.png',
            alt: 'mantine + typescript og-image',
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
