import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const YTS_API_BASEURL = 'https://yts.mx/api/v2'
const NEXT_API_BASEURL = '/api'

const responseBody = <T>(response: AxiosResponse<T>) => response.data

export const options = {
	headers: { 'content-type': 'application/json' },
}

const createInstance = (baseURL: string, options: {}) =>
	axios.create({ baseURL, ...options })

export const request = {
	yts: createInstance(YTS_API_BASEURL, options),
	nextAPi: createInstance(NEXT_API_BASEURL, {}),
}

export const requestActions = {
	get: <T>(
		instance: AxiosInstance,
		url: string,
		config: AxiosRequestConfig = {},
	) => instance.get<T>(url, config).then(responseBody),

	post: <T>(instance: AxiosInstance, url: string, body: {}) =>
		instance.post<T>(url, body).then(responseBody),
}
