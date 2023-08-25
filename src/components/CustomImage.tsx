import { AspectRatio } from '@mantine/core'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

import noPoster from '@/assets/images/no-poster.webp'

type CustomImageProps = {
	posterSrc: string
	title: string
	className?: string
	isThumbnail?: boolean
	aspect?: number
}

const PLACEHOLDER_URL =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8AgCQAEHwEaXsb4awAAAABJRU5ErkJggg=='

const CustomImage: React.FC<CustomImageProps> = ({
	posterSrc,
	title,
	isThumbnail = false,
	aspect,
}) => {
	const [imgSrc, setImgSrc] = useState<string | StaticImageData>(posterSrc)

	return (
		<AspectRatio
			ratio={aspect ? aspect : isThumbnail ? 16 / 9 : 4 / 5}
			pos="relative"
		>
			<Image
				fill
				src={imgSrc}
				alt={`${title} not found`}
				quality={60}
				placeholder="blur"
				className="rounded-md object-cover"
				sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
				blurDataURL={PLACEHOLDER_URL}
				onError={() => setImgSrc(noPoster)}
			/>
		</AspectRatio>
	)
}
export default CustomImage
