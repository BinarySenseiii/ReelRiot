interface SelectOption {
	value: string
	label: string
}

interface UseSelectDataOptions<T> {
	valueKey?: keyof T
	labelKey?: keyof T
}

export function useSelectData<T extends Record<string, any>>(
	data: T[],
	options: UseSelectDataOptions<T> = {},
): SelectOption[] {
	if (!data || !data.length) {
		return []
	}

	return data.map(item => ({
		value: String(item[options.valueKey ?? '']),
		label: String(item[options.labelKey ?? '']),
	}))
}
