import {QueryClient} from '@tanstack/react-query'

const queryKey = {
  USER: 'user',
  TODO: 'todo',
}

function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0, // 10 minutes
        cacheTime: 30000, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  })
}

const customQueryClient = generateQueryClient()

export {customQueryClient, queryKey}
