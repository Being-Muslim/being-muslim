// ============================================================
// Mock Data for Being Muslim — Phase 1 (Design Only)
// ============================================================

// --- Navigation ---
export const navLinks = [
	{ label: 'Learn', href: '/articles' },
	{ label: 'Videos', href: '/videos' },
	{ label: 'Courses', href: '/courses' },
	{ label: 'Shop', href: '/shop' },
	{ label: 'Community', href: '/community' },
	{ label: 'Give', href: '/give' }
] as const;

// --- Stats ---
export const stats = [
	{ value: '10,000+', label: 'Books Distributed' },
	{ value: '500+', label: 'Communities Served' },
	{ value: '4.8★', label: 'Average Rating' },
	{ value: '50+', label: 'Countries Reached' }
] as const;

// --- Audience Paths ---
export const audiencePaths = [
	{
		title: 'New to Islam',
		description:
			'Curious about Islam or considering converting? Start here with foundational knowledge presented with warmth and clarity.',
		icon: 'compass',
		href: '/guides/exploring-islam',
		cta: 'Start Exploring'
	},
	{
		title: 'Recently Converted',
		description:
			'Just taken your shahada? Welcome home. Find step-by-step guidance for your first days, weeks, and months as a Muslim.',
		icon: 'sunrise',
		href: '/guides/new-muslim',
		cta: 'Begin Your Journey'
	},
	{
		title: 'Reconnecting',
		description:
			'A lifelong Muslim looking to deepen your practice? Rediscover the beauty of your faith with fresh perspectives and deeper knowledge.',
		icon: 'refresh',
		href: '/guides/reconnecting',
		cta: 'Dive Deeper'
	}
] as const;

// --- Articles ---
export interface Article {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	readingTime: string;
	date: string;
	author: string;
	image: string;
	featured?: boolean;
}

export const articles: Article[] = [
	{
		slug: 'understanding-the-five-pillars',
		title: 'Understanding the Five Pillars of Islam',
		excerpt:
			'The five pillars form the foundation of Muslim life. Learn what each pillar means and how to incorporate them into your daily practice.',
		category: 'Belief',
		readingTime: '8 min read',
		date: '2026-02-10',
		author: 'Dr. Asad Tarsin',
		image: '/images/placeholder-article-1.jpg',
		featured: true
	},
	{
		slug: 'your-first-prayer',
		title: 'Your First Prayer: A Gentle Step-by-Step Guide',
		excerpt:
			'Learning to pray can feel overwhelming. This guide breaks down each step with patience and encouragement.',
		category: 'Prayer',
		readingTime: '12 min read',
		date: '2026-02-05',
		author: 'Imam Ahmad',
		image: '/images/placeholder-article-2.jpg',
		featured: true
	},
	{
		slug: 'finding-community-as-a-convert',
		title: 'Finding Community as a Convert',
		excerpt:
			'One of the biggest challenges for new Muslims is finding a supportive community. Here are practical ways to connect.',
		category: 'Community',
		readingTime: '6 min read',
		date: '2026-01-28',
		author: 'Sarah Abdullah',
		image: '/images/placeholder-article-3.jpg',
		featured: true
	},
	{
		slug: 'ramadan-preparation-guide',
		title: 'Preparing for Your First Ramadan',
		excerpt:
			'Everything you need to know about fasting during Ramadan — from suhoor tips to spiritual practices.',
		category: 'Fasting',
		readingTime: '10 min read',
		date: '2026-01-20',
		author: 'Dr. Asad Tarsin',
		image: '/images/placeholder-article-4.jpg'
	},
	{
		slug: 'daily-dhikr-practice',
		title: 'Building a Daily Dhikr Practice',
		excerpt:
			'Simple remembrance practices you can weave into your daily routine for spiritual tranquility.',
		category: 'Daily Life',
		readingTime: '5 min read',
		date: '2026-01-15',
		author: 'Imam Ahmad',
		image: '/images/placeholder-article-5.jpg'
	},
	{
		slug: 'understanding-quran-beginners',
		title: "Understanding the Quran: A Beginner's Approach",
		excerpt:
			'How to start reading and understanding the Quran without feeling lost. Practical tips for new readers.',
		category: 'Belief',
		readingTime: '9 min read',
		date: '2026-01-10',
		author: 'Dr. Asad Tarsin',
		image: '/images/placeholder-article-6.jpg'
	}
];

export const articleCategories = [
	'All',
	'Belief',
	'Prayer',
	'Fasting',
	'Community',
	'Daily Life'
] as const;

// --- Videos ---
export interface Video {
	slug: string;
	title: string;
	description: string;
	category: string;
	duration: string;
	date: string;
	thumbnail: string;
	featured?: boolean;
}

export const videos: Video[] = [
	{
		slug: 'what-is-islam',
		title: 'What is Islam? An Introduction',
		description:
			'A warm and accessible introduction to the core beliefs and practices of Islam.',
		category: 'Foundations',
		duration: '15:32',
		date: '2026-02-08',
		thumbnail: '/images/placeholder-video-1.jpg',
		featured: true
	},
	{
		slug: 'how-to-pray-step-by-step',
		title: 'How to Pray: Complete Step-by-Step',
		description:
			'Learn the movements and words of Islamic prayer with clear demonstrations.',
		category: 'Prayer',
		duration: '22:10',
		date: '2026-02-01',
		thumbnail: '/images/placeholder-video-2.jpg',
		featured: true
	},
	{
		slug: 'making-wudu',
		title: 'How to Make Wudu (Ablution)',
		description: 'A clear guide to performing wudu before prayer.',
		category: 'Prayer',
		duration: '8:45',
		date: '2026-01-25',
		thumbnail: '/images/placeholder-video-3.jpg'
	},
	{
		slug: 'quran-recitation-basics',
		title: 'Quran Recitation for Beginners',
		description: 'Learn the basics of Arabic pronunciation for Quran reading.',
		category: 'Quran',
		duration: '18:20',
		date: '2026-01-18',
		thumbnail: '/images/placeholder-video-4.jpg'
	}
];

// --- Courses ---
export interface Course {
	slug: string;
	title: string;
	description: string;
	instructor: string;
	lessonCount: number;
	duration: string;
	difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
	category: string;
	image: string;
	enrolled?: number;
	progress?: number;
	featured?: boolean;
}

export const courses: Course[] = [
	{
		slug: 'foundations-of-faith',
		title: 'Foundations of Faith',
		description:
			'A comprehensive introduction to Islamic beliefs, practices, and spirituality for those new to the faith.',
		instructor: 'Dr. Asad Tarsin',
		lessonCount: 24,
		duration: '6 hours',
		difficulty: 'Beginner',
		category: 'Foundations',
		image: '/images/placeholder-course-1.jpg',
		enrolled: 1250,
		featured: true
	},
	{
		slug: 'prayer-mastery',
		title: 'Prayer Mastery',
		description:
			'Go beyond the basics of prayer. Understand the deeper meanings, improve your focus, and build consistency.',
		instructor: 'Imam Ahmad',
		lessonCount: 16,
		duration: '4 hours',
		difficulty: 'Beginner',
		category: 'Prayer',
		image: '/images/placeholder-course-2.jpg',
		enrolled: 890
	},
	{
		slug: 'quran-journey',
		title: 'Your Quran Journey',
		description:
			'Learn to read, understand, and reflect on the Quran. From Arabic letters to comprehension.',
		instructor: 'Ustadha Fatima',
		lessonCount: 32,
		duration: '10 hours',
		difficulty: 'Beginner',
		category: 'Quran',
		image: '/images/placeholder-course-3.jpg',
		enrolled: 720
	},
	{
		slug: 'islamic-history',
		title: 'Islamic History: From Revelation to Renaissance',
		description:
			'Explore the rich history of Islamic civilization from the time of the Prophet to the golden age.',
		instructor: 'Dr. Asad Tarsin',
		lessonCount: 20,
		duration: '8 hours',
		difficulty: 'Intermediate',
		category: 'History',
		image: '/images/placeholder-course-4.jpg',
		enrolled: 450
	}
];

// --- Course Detail (for /courses/[slug]) ---
export interface Lesson {
	slug: string;
	title: string;
	duration: string;
	completed?: boolean;
	type: 'video' | 'reading' | 'quiz';
}

export interface Module {
	title: string;
	lessons: Lesson[];
}

export const courseModules: Module[] = [
	{
		title: 'Getting Started',
		lessons: [
			{ slug: 'welcome', title: 'Welcome & Course Overview', duration: '5:00', type: 'video', completed: true },
			{ slug: 'what-is-islam', title: 'What is Islam?', duration: '15:00', type: 'video', completed: true },
			{ slug: 'the-shahada', title: 'The Shahada: Declaration of Faith', duration: '12:00', type: 'video' },
			{ slug: 'module-1-quiz', title: 'Module 1 Quiz', duration: '5:00', type: 'quiz' }
		]
	},
	{
		title: 'The Five Pillars',
		lessons: [
			{ slug: 'pillar-1-shahada', title: 'Shahada in Depth', duration: '18:00', type: 'video' },
			{ slug: 'pillar-2-salah', title: 'Salah: The Daily Prayers', duration: '20:00', type: 'video' },
			{ slug: 'pillar-3-zakat', title: 'Zakat: Charitable Giving', duration: '14:00', type: 'video' },
			{ slug: 'pillar-4-sawm', title: 'Sawm: Fasting in Ramadan', duration: '16:00', type: 'video' },
			{ slug: 'pillar-5-hajj', title: 'Hajj: The Pilgrimage', duration: '15:00', type: 'video' },
			{ slug: 'five-pillars-reading', title: 'Supplementary Reading', duration: '10:00', type: 'reading' },
			{ slug: 'module-2-quiz', title: 'Module 2 Quiz', duration: '5:00', type: 'quiz' }
		]
	},
	{
		title: 'Daily Life as a Muslim',
		lessons: [
			{ slug: 'daily-routine', title: 'Building a Daily Routine', duration: '12:00', type: 'video' },
			{ slug: 'food-and-drink', title: 'Halal Food & Drink', duration: '10:00', type: 'video' },
			{ slug: 'relationships', title: 'Navigating Relationships', duration: '18:00', type: 'video' },
			{ slug: 'dealing-with-questions', title: 'Answering Questions About Your Faith', duration: '14:00', type: 'video' },
			{ slug: 'module-3-quiz', title: 'Module 3 Quiz', duration: '5:00', type: 'quiz' }
		]
	}
];

// --- Products ---
export interface Product {
	handle: string;
	title: string;
	description: string;
	price: number;
	compareAtPrice?: number;
	images: string[];
	category: string;
	badge?: string;
	inStock: boolean;
	rating: number;
	reviewCount: number;
}

export const products: Product[] = [
	{
		handle: 'being-muslim-book',
		title: 'Being Muslim: A Practical Guide',
		description:
			'This book is meant to give readers practical and useful knowledge that can help them understand what it means to be Muslim. Whether you are completely new to the religion or need to brush up on some of the basics, Being Muslim is an excellent guide to reconnect to the most essential aspects of Islam.',
		price: 14.95,
		images: ['/images/placeholder-product-book.jpg'],
		category: 'Books',
		badge: 'Bestseller',
		inStock: true,
		rating: 4.8,
		reviewCount: 342
	},
	{
		handle: 'being-muslim-boxed-set',
		title: 'The Boxed Set',
		description:
			'A small library of essentials curated to help new Muslims ease into their life-long journey of growing closer to God through learning the religion. Includes the book, Quran translation, prayer rug, and more.',
		price: 85.00,
		images: ['/images/placeholder-product-boxset.jpg'],
		category: 'Boxed Sets',
		badge: 'Most Popular',
		inStock: true,
		rating: 4.9,
		reviewCount: 187
	},
	{
		handle: 'prayer-cards',
		title: 'The Daily Prayer: Pocket Reference Card (25-Pack)',
		description:
			'The Being Muslim Pocket Reference comes in a pack of 25 cards. Step-by-step daily prayer instructions, laminated for durability. Available in English and Spanish.',
		price: 37.50,
		images: ['/images/placeholder-product-cards.jpg'],
		category: 'Cards',
		inStock: true,
		rating: 4.7,
		reviewCount: 256
	},
	{
		handle: 'being-muslim-ebook',
		title: 'Being Muslim: Digital Edition (eBook)',
		description:
			'The complete Being Muslim guide in digital format. Available immediately after purchase. Read on any device — phone, tablet, or computer.',
		price: 9.00,
		images: ['/images/placeholder-product-ebook.jpg'],
		category: 'Digital',
		inStock: true,
		rating: 4.6,
		reviewCount: 89
	},
	{
		handle: 'being-muslim-spanish',
		title: 'Ser Musulmán (Spanish Edition)',
		description:
			'La guía completa de Being Muslim traducida al español. Para hispanohablantes que comienzan su camino en el Islam.',
		price: 7.00,
		images: ['/images/placeholder-product-spanish.jpg'],
		category: 'Digital',
		inStock: true,
		rating: 4.7,
		reviewCount: 45
	}
];

// --- Testimonials ---
export interface Testimonial {
	quote: string;
	name: string;
	role: string;
	avatar?: string;
}

export const testimonials: Testimonial[] = [
	{
		quote: 'Being Muslim was the first resource that made me feel like I wasn\'t alone in my journey. Every chapter felt like it was written for me.',
		name: 'Aminah R.',
		role: 'Convert, 2 years'
	},
	{
		quote: 'I give this book to every new Muslim in our community. It\'s the most comprehensive and approachable resource available.',
		name: 'Imam Khalid',
		role: 'Community Leader'
	},
	{
		quote: 'The boxed set was a beautiful gift for my daughter who recently took her shahada. She keeps the prayer cards by her prayer mat.',
		name: 'Fatima S.',
		role: 'Mother & Educator'
	},
	{
		quote: 'As someone who grew up Muslim but drifted away, this book helped me reconnect with my faith in a way that felt genuine and judgement-free.',
		name: 'Omar K.',
		role: 'Reconnecting Muslim'
	},
	{
		quote: 'Dr. Tarsin has created something truly special. This is Islamic education done right — warm, rigorous, and deeply human.',
		name: 'Dr. Yasmin Ahmed',
		role: 'Islamic Studies Professor'
	}
];

// --- Donation / Sponsorship ---
export const sponsorshipTiers = [
	{
		name: 'Sponsor 1 Boxed Set',
		price: 85,
		description: 'Send a complete Being Muslim boxed set to a new Muslim in need.',
		impact: 'Supports one person\'s journey',
		popular: false
	},
	{
		name: 'Sponsor 5 Boxed Sets',
		price: 400,
		description: 'Equip a small study group with everything they need.',
		impact: 'Supports a study circle',
		popular: true
	},
	{
		name: 'Sponsor 10 Boxed Sets',
		price: 750,
		description: 'Supply a mosque or community center with resources for their convert support program.',
		impact: 'Supports a community',
		popular: false
	}
] as const;

export const donationStats = {
	totalSponsored: 3247,
	communitiesReached: 520,
	countriesReached: 52,
	monthlyDonors: 180
} as const;

// --- Community ---
export interface ForumCategory {
	slug: string;
	title: string;
	description: string;
	threadCount: number;
	lastActivity: string;
	icon: string;
}

export const forumCategories: ForumCategory[] = [
	{
		slug: 'new-muslim-lounge',
		title: 'New Muslim Lounge',
		description: 'A welcoming space for those new to Islam. No question is too basic.',
		threadCount: 234,
		lastActivity: '2 minutes ago',
		icon: 'heart'
	},
	{
		slug: 'prayer-help',
		title: 'Prayer Help',
		description: 'Questions and tips about salah, wudu, and building a consistent prayer practice.',
		threadCount: 189,
		lastActivity: '15 minutes ago',
		icon: 'hands'
	},
	{
		slug: 'daily-life',
		title: 'Daily Life',
		description: 'Navigating work, relationships, food, and everyday life as a Muslim.',
		threadCount: 312,
		lastActivity: '5 minutes ago',
		icon: 'sun'
	},
	{
		slug: 'study-groups',
		title: 'Study Groups',
		description: 'Find or create study groups for courses and books.',
		threadCount: 87,
		lastActivity: '1 hour ago',
		icon: 'book'
	},
	{
		slug: 'general-discussion',
		title: 'General Discussion',
		description: 'Open discussions about faith, life, and everything in between.',
		threadCount: 456,
		lastActivity: '1 minute ago',
		icon: 'message'
	}
];

export interface Thread {
	slug: string;
	title: string;
	author: string;
	authorAvatar?: string;
	replyCount: number;
	lastReply: string;
	pinned?: boolean;
	solved?: boolean;
}

export const sampleThreads: Thread[] = [
	{
		slug: 'how-to-tell-family',
		title: 'How did you tell your family about converting?',
		author: 'NewBeginnings',
		replyCount: 47,
		lastReply: '30 minutes ago',
		pinned: true
	},
	{
		slug: 'prayer-consistency-tips',
		title: 'Tips for staying consistent with all 5 prayers?',
		author: 'SeekingPeace',
		replyCount: 23,
		lastReply: '1 hour ago',
		solved: true
	},
	{
		slug: 'halal-food-options',
		title: 'Best halal food options when eating out?',
		author: 'FoodieMuslim',
		replyCount: 31,
		lastReply: '2 hours ago'
	},
	{
		slug: 'learning-arabic',
		title: 'Resources for learning Arabic as a beginner?',
		author: 'ArabicJourney',
		replyCount: 18,
		lastReply: '3 hours ago'
	}
];

// --- Chat Channels ---
export const chatChannels = [
	{ name: 'General', members: 342, unread: 5 },
	{ name: 'New Muslim Lounge', members: 156, unread: 2 },
	{ name: 'Prayer Help', members: 98, unread: 0 },
	{ name: 'Study Groups', members: 67, unread: 1 },
	{ name: 'Book Discussion', members: 45, unread: 0 },
	{ name: 'Daily Reflections', members: 89, unread: 3 }
] as const;

// --- Guides ---
export interface Guide {
	slug: string;
	title: string;
	description: string;
	stepCount: number;
	estimatedTime: string;
	category: string;
	image: string;
}

export const guides: Guide[] = [
	{
		slug: 'new-muslim',
		title: 'Your First 30 Days as a Muslim',
		description:
			'A day-by-day guide to help you navigate your first month after taking your shahada.',
		stepCount: 30,
		estimatedTime: '30 days',
		category: 'New Muslims',
		image: '/images/placeholder-guide-1.jpg'
	},
	{
		slug: 'how-to-pray',
		title: 'How to Pray: Step by Step',
		description:
			'A complete, illustrated guide to performing the Islamic prayer from start to finish.',
		stepCount: 12,
		estimatedTime: '45 minutes',
		category: 'Prayer',
		image: '/images/placeholder-guide-2.jpg'
	},
	{
		slug: 'exploring-islam',
		title: 'Exploring Islam: An Honest Introduction',
		description:
			'For those curious about Islam. An open, honest exploration of what Muslims believe and practice.',
		stepCount: 8,
		estimatedTime: '2 hours',
		category: 'Exploring',
		image: '/images/placeholder-guide-3.jpg'
	},
	{
		slug: 'reconnecting',
		title: 'Reconnecting with Your Faith',
		description:
			'A gentle guide for Muslims who have drifted and want to find their way back.',
		stepCount: 10,
		estimatedTime: '2 weeks',
		category: 'Reconnecting',
		image: '/images/placeholder-guide-4.jpg'
	}
];

// --- Team ---
export interface TeamMember {
	name: string;
	role: string;
	bio: string;
	avatar?: string;
}

export const teamMembers: TeamMember[] = [
	{
		name: 'Dr. Asad Tarsin',
		role: 'Founder & Author',
		bio: 'Physician, educator, and author of Being Muslim. Dr. Tarsin has dedicated over 15 years to creating accessible Islamic education for converts and beginners.'
	},
	{
		name: 'Sarah Abdullah',
		role: 'Director of Community',
		bio: 'A convert of 10 years, Sarah leads community outreach and ensures our resources meet the real needs of new Muslims.'
	},
	{
		name: 'Imam Ahmad Hassan',
		role: 'Educational Director',
		bio: 'With a background in traditional Islamic scholarship and modern pedagogy, Imam Ahmad oversees our course curriculum and content quality.'
	}
];

// --- Footer ---
export const footerLinks = {
	learn: [
		{ label: 'Articles', href: '/articles' },
		{ label: 'Videos', href: '/videos' },
		{ label: 'Courses', href: '/courses' },
		{ label: 'Guides', href: '/guides' }
	],
	shop: [
		{ label: 'All Products', href: '/shop' },
		{ label: 'The Book', href: '/shop/being-muslim-book' },
		{ label: 'Boxed Set', href: '/shop/being-muslim-boxed-set' },
		{ label: 'Prayer Cards', href: '/shop/prayer-cards' }
	],
	community: [
		{ label: 'Forums', href: '/community' },
		{ label: 'Chat', href: '/community/chat' },
		{ label: 'Give', href: '/give' }
	],
	about: [
		{ label: 'Our Mission', href: '/about' },
		{ label: 'Team', href: '/about#team' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Terms of Service', href: '/terms' }
	]
} as const;
