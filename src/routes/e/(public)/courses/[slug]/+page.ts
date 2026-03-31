import type { PageLoad } from './$types';
import { courses, courseModules } from '$lib/data/mock';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const course = courses.find((c) => c.slug === params.slug);
	if (!course) error(404, 'Not found');
	return { course, modules: courseModules };
};
