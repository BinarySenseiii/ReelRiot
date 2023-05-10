import { getWindow } from '@/helpers';

const DEVELOPMENT_SITE_URL = getWindow()?.location.origin;
const PRODUCTION_SITE_URL = 'https://mantine-template-one.vercel.app';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const SITE_URL = IS_PRODUCTION ? PRODUCTION_SITE_URL : DEVELOPMENT_SITE_URL;
