import { z } from 'zod'

export const ReviewSchema = z.object({
	name: z.string().min(8, { message: 'Name should have at least 8 letters' }),
	email: z.string().email({ message: 'Invalid email' }),
	review: z.string().min(18, { message: 'You must be at least 18 to create an Review' }),
})

export type ReviewSchemaType = z.infer<typeof ReviewSchema>
