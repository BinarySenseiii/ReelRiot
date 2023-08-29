export default function convertToReadableDate(dateStr: string) {
	try {
		const dt = new Date(dateStr)

		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}

		return dt.toLocaleDateString('en-US', options)
	} catch (error) {
		return 'Invalid date format'
	}
}
