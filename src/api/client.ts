import { requestActions, request } from '@/services/api-client'
import { AxiosRequestConfig } from 'axios'

export const getYtsData = <T>(endpoint: string, config: AxiosRequestConfig = {}) =>
	requestActions.get<T>(request.yts, endpoint, config)

export const getTmdbData = <T>(endpoint: string, config: AxiosRequestConfig = {}) =>
	requestActions.get<T>(request.tmdb, endpoint, {
		params: {
			api_key: process.env.NEXT_PUBLIC_API_KEY,
			...config.params,
		},
	})
