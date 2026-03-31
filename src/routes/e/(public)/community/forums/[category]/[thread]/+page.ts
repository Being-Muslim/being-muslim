import type { PageLoad } from './$types';
import { forumCategories, sampleThreads } from '$lib/data/mock';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const category = forumCategories.find((c) => c.slug === params.category);
	if (!category) error(404, 'Not found');
	const thread = sampleThreads.find((t) => t.slug === params.thread);
	if (!thread) error(404, 'Not found');
	return { category, thread };
};
