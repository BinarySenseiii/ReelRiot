import { AspectRatio } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

import placeholder from '@/assets/images/blur.jpg';
import noPoster from '@/assets/images/no-poster.png';

type CustomImageProps = {
  posterSrc: string;
  title: string;
  className?: string;
};

const CustomImage: React.FC<CustomImageProps> = ({
  posterSrc,
  title,
  className,
}) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(posterSrc);

  return (
    <AspectRatio ratio={720 / 1080} pos="relative">
      <Image
        src={imgSrc}
        alt={`${title} not found`}
        placeholder="blur"
        blurDataURL={placeholder.blurDataURL}
        fill
        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
        onError={() => setImgSrc(noPoster)}
        style={{ borderRadius: '5px', objectFit: 'cover' }}
        className={className}
      />
    </AspectRatio>
  );
};
export default CustomImage;
