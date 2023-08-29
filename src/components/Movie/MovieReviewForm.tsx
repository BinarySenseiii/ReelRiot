import { Button, SimpleGrid, Stack, Text, TextInput, Textarea, Title } from '@mantine/core'
import React from 'react'

const MovieReviewForm = () => {
	return (
		<Stack my={{ base: 'sm', md: 'xl' }}>
			<Stack spacing="xs">
				<Title order={2}>Share Your Review </Title>
				<Text color="gray" fz="sm">
					We value your opinion! Help other viewers by sharing your thoughts about the movie. Your review will be
					appreciated.
				</Text>
			</Stack>

			<form onSubmit={event => event.preventDefault()} className="space-y-6">
				<SimpleGrid cols={2} className="flex flex-col md:grid">
					<TextInput label="Name" withAsterisk size="md" classNames={{ label: 'mb-2' }} />
					<TextInput label="Email" withAsterisk size="md" classNames={{ label: 'mb-2' }} />
				</SimpleGrid>

				<Textarea label="Your review" withAsterisk size="md" aria-label="Review Input" classNames={{ label: 'mb-2' }} />
				<Button type="submit" size="md">
					Submit
				</Button>
			</form>
		</Stack>
	)
}

export default MovieReviewForm
