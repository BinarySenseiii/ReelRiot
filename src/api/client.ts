import { requestActions, request } from '@/services/api-client'
import { AxiosRequestConfig } from 'axios'

const getYtsData = <T>(endpoint: string, config: AxiosRequestConfig = {}) =>
	requestActions.get<T>(request.yts, endpoint, config)

export default getYtsData
