import {
  DehydratedState,
  Hydrate,
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ReactNode, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorNotification } from '@/components/common/Notification';
import { defaultQueryFn } from '@/services/client';

const mutationCache = new MutationCache({
  onError: (error) => {
    if (error instanceof AxiosError) {
      ErrorNotification(error.code, error.message);
    }
  },
});

const queryCache = new QueryCache({
  onError: (error) => {
    if (error instanceof AxiosError) {
      ErrorNotification(error.code, error.message);
    }
  },
});

export default function QueryWrapper({
  dehydratedState,
  children,
}: {
  dehydratedState: DehydratedState;
  children: ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: 1,
            staleTime: 5 * 1000,
            queryFn: defaultQueryFn,
          },
        },
        mutationCache,
        queryCache,
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
