import { seoConfig } from '@/config';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

type IMetaProps = {
  title?: string;
  description?: string;
  canonical?: string;
};

const Meta = ({ ...props }: IMetaProps) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#333" />
      </Head>
      <DefaultSeo {...seoConfig} {...props} />
    </>
  );
};

export default Meta;
1;
