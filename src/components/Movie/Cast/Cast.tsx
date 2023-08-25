import { getPosterImage } from '@/api/config'
import { ICast, ImdbCast } from '@/types/movie-types'
import { Anchor, Avatar, Flex, ScrollArea, Tooltip } from '@mantine/core'
import React, { ReactNode } from 'react'

type CastProps = {
	casts?: ICast[]
	credits?: ImdbCast[]
}

const ScrollWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
	<ScrollArea mt="xs">
		<Flex gap="20px">{children}</Flex>
	</ScrollArea>
)

const Cast: React.FC<CastProps> = ({ casts, credits }) => (
	<>
		{typeof casts !== 'undefined' ? (
			<ScrollWrapper>
				{casts?.map((cast: ICast) => (
					<Tooltip
						color="brand"
						label={cast.name}
						withArrow
						arrowSize={10}
						key={cast.name}
						withinPortal
					>
						<Anchor
							href={`https://www.imdb.com/name/nm${cast.imdb_code}/?ref_=ls_mv`}
							target="_blank"
						>
							<Avatar
								sx={{ cursor: 'pointer' }}
								src={cast.url_small_image}
								size="xl"
							/>
						</Anchor>
					</Tooltip>
				))}
			</ScrollWrapper>
		) : (
			<ScrollWrapper>
				{credits?.map((cast: ImdbCast) => (
					<Tooltip
						color="brand"
						label={cast.original_name}
						withArrow
						arrowSize={10}
						key={cast.id}
						withinPortal
					>
						<Avatar
							sx={{ cursor: 'pointer' }}
							src={cast.profile_path ? getPosterImage(cast.profile_path) : null}
							size="xl"
						/>
					</Tooltip>
				))}
			</ScrollWrapper>
		)}
	</>
)
export default Cast
