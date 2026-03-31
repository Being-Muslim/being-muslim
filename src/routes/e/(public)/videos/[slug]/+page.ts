import type { PageLoad } from './$types';
import { videos } from '$lib/data/mock';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const video = videos.find((v) => v.slug === params.slug);
	if (!video) error(404, 'Not found');
	const relatedVideos = videos.filter((v) => v.slug !== video.slug).slice(0, 3);
	return { video, relatedVideos };
};
