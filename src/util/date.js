import { DateTime } from 'luxon';

export const formatISO = (iso) => {
	const date = DateTime.fromISO(iso);

	// return date.toFormat('yyyy-MM-dd');
	return date.toLocaleString({
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
	});
};
