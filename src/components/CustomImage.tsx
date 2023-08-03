import { AspectRatio } from '@mantine/core'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

import placeholder from '@/assets/images/blur.webp'
import noPoster from '@/assets/images/no-poster.webp'

type CustomImageProps = {
	posterSrc: string
	title: string
	className?: string
}

const CustomImage: React.FC<CustomImageProps> = ({ posterSrc, title }) => {
	const [imgSrc, setImgSrc] = useState<string | StaticImageData>(posterSrc)

	return (
		<AspectRatio ratio={720 / 1080} pos="relative">
			<Image
				src={imgSrc}
				alt={`${title} not found`}
				placeholder="blur"
				blurDataURL={placeholder.blurDataURL}
				fill
				onError={() => setImgSrc(noPoster)}
				style={{ borderRadius: '5px', objectFit: 'cover' }}
				sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
				quality={60}
			/>
		</AspectRatio>
	)
}
export default CustomImage
