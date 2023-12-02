import {
	Button,
	SimpleGrid,
	Stack,
	Text,
	TextInput,
	Textarea,
	Title,
} from '@mantine/core'
import { useEffect, useMemo, useState } from 'react'

import { ReviewSchema, ReviewSchemaType } from '@/schemas'
import { auth, db } from '@/services/firebase'
import { useForm, zodResolver } from '@mantine/form'
import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-hot-toast'

const MovieReviewForm = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [user] = useAuthState(auth)
	const { query, reload } = useRouter()

	const initialValues = useMemo<ReviewSchemaType>(
		() => ({
			name: user?.displayName ?? '',
			email: user?.email ?? '',
			review: '',
		}),
		[user?.displayName, user?.email],
	)

	const form = useForm<ReviewSchemaType>({
		validate: zodResolver(ReviewSchema),
		initialValues,
	})

	useEffect(() => {
		form.setValues(initialValues)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialValues])

	const onSubmitHandle = async (values: ReviewSchemaType) => {
		setIsLoading(true)
		try {
			await addDoc(collection(db, `${query.id}`), {
				name: values.name,
				email: values.email,
				content: values.review,
				avatar: user?.photoURL ?? '',
				created_at: Date.now(),
			})

			form.setValues(initialValues)
			toast.success('Review submitted successfully')
			reload()
		} catch (error: any) {
			toast.error(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Stack my={{ base: 'sm', md: 'xl' }}>
			<Stack spacing="xs">
				<Title order={2}>Share Your Review </Title>
				<Text color="gray" fz="sm">
					We value your opinion! Help other viewers by sharing your thoughts
					about the movie. Your review will be appreciated.
				</Text>
			</Stack>

			<form onSubmit={form.onSubmit(onSubmitHandle)} className="space-y-6">
				<SimpleGrid cols={2} className="flex flex-col md:grid">
					<TextInput
						label="Name"
						withAsterisk
						size="md"
						disabled={!!user?.displayName || !user}
						classNames={{ label: 'mb-2' }}
						{...form.getInputProps('name')}
					/>
					<TextInput
						label="Email"
						withAsterisk
						size="md"
						disabled={!!user?.email || !user}
						classNames={{ label: 'mb-2' }}
						{...form.getInputProps('email')}
					/>
				</SimpleGrid>

				<Textarea
					label="Your review"
					withAsterisk
					size="md"
					aria-label="Review Input"
					classNames={{ label: 'mb-2' }}
					disabled={!user}
					{...form.getInputProps('review')}
				/>
				<Button
					type={!user ? 'button' : 'submit'}
					size="md"
					onClick={() => {
						if (!user) {
							toast.error('Please sign in first')
						}
					}}
					loading={isLoading}
					loaderPosition="center"
				>
					Submit
				</Button>
			</form>
		</Stack>
	)
}

export default MovieReviewForm
