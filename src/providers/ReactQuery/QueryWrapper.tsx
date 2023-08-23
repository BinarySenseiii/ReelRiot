import {
	DehydratedState,
	Hydrate,
	MutationCache,
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AxiosError } from 'axios'
import { ReactNode, useRef } from 'react'
import toast from 'react-hot-toast'

const mutationCache = new MutationCache({
	onError: error => {
		if (error instanceof AxiosError) {
			toast.error(error.message)
		}
	},
})

const queryCache = new QueryCache({
	onError: error => {
		if (error instanceof AxiosError) {
			toast.error(error.message)
		}
	},
})

export default function QueryWrapper({
	dehydratedState,
	children,
}: {
	dehydratedState: DehydratedState
	children: ReactNode
}) {
	const queryClient = useRef(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
					retry: 3,
					staleTime: 30000,
					refetchInterval: false,
				},
			},
			mutationCache,
			queryCache,
		}),
	)

	return (
		<QueryClientProvider client={queryClient.current}>
			<Hydrate state={dehydratedState}>{children}</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
