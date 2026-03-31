import type { PageLoad } from './$types';
import { guides } from '$lib/data/mock';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const guide = guides.find((g) => g.slug === params.slug);
	if (!guide) error(404, 'Not found');
	return { guide };
};
