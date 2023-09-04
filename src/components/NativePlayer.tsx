import { Loader, Overlay, Transition } from '@mantine/core'
import { useState } from 'react'

const NativePlayer = ({
	src,
	withLoader,
	withOverlay,
}: {
	src: string
	withLoader?: boolean
	withOverlay?: boolean
}) => {
	const [isVideoLoaded, setIsVideoLoaded] = useState(true)
	return (
		<>
			<Transition mounted={isVideoLoaded} transition="fade" duration={400} timingFunction="ease">
				{styles => (
					<div style={styles}>
						<Overlay blur={15} center>
							<Loader variant="dots" size="lg" />
						</Overlay>
					</div>
				)}
			</Transition>

			{withOverlay && (
				<Overlay
					zIndex={2}
					gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
					opacity={0.85}
				/>
			)}
			<video
				src={src}
				playsInline
				autoPlay
				muted
				loop
				className="w-full h-full object-cover"
				onPlaying={() => withLoader && setIsVideoLoaded(false)}
			/>
		</>
	)
}

export default NativePlayer
