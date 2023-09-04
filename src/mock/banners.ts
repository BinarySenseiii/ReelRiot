const banners = [
	{
		id: 1,
		title: 'Meg 2: The Trench',
		storyline: `Get ready for the ultimate adrenaline rush this summer in "Meg 2: The Trench," a literally larger-than-life thrill ride that supersizes the 2018 blockbuster and takes the action to higher heights and even greater depths with multiple massive Megs and so much more. Dive into uncharted waters with Jason Statham and global action icon Wu Jing as they lead a daring research team on an exploratory dive into the deepest depths of the ocean. Their voyage spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival. Pitted against colossal Megs and relentless environmental plunderers, our heroes must outrun, outsmart, and outswim their merciless predators in a pulse-pounding race against time. Immerse yourself in the most electrifying cinematic experience of the year with "Meg 2: The Trench" - where the depths of the ocean are matched only by the heights of sheer, unstoppable excitement`,
		genres: ['Action', 'Sci-Fi', 'Thriller', 'Horror'],
		info: ['PG-13', '1h 56m', '2023'],
		video_url: `https://res.cloudinary.com/dpcu6eyk8/video/upload/q_68/v1693724488/Untitled_video_-_Made_with_Clipchamp_xl3jqb.mp4`,
		redirectURI: '/movie/meg-2-the-trench-2023?id=tt9224104',
		trailerURI: 'https://www.youtube.com/watch?v=dG91B3hHyY4&t=3s',
	},

	{
		id: 2,
		title: 'Black Widow',
		storyline: `Get ready for the ultimate adrenaline rush this summer in "Meg 2: The Trench," a literally larger-than-life thrill ride that supersizes the 2018 blockbuster and takes the action to higher heights and even greater depths with multiple massive Megs and so much more. Dive into uncharted waters with Jason Statham and global action icon Wu Jing as they lead a daring research team on an exploratory dive into the deepest depths of the ocean. Their voyage spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival. Pitted against colossal Megs and relentless environmental plunderers, our heroes must outrun, outsmart, and outswim their merciless predators in a pulse-pounding race against time. Immerse yourself in the most electrifying cinematic experience of the year with "Meg 2: The Trench" - where the depths of the ocean are matched only by the heights of sheer, unstoppable excitement`,
		genres: ['Action', 'Adventure', 'Sci-Fi'],
		info: ['PG-13', '2h 14m', '2021'],
		video_url: `https://res.cloudinary.com/dpcu6eyk8/video/upload/q_71/v1693735364/Untitled_d2wjva.mp4`,
		redirectURI: '/movie/black-widow-2021?id=tt3480822',
		trailerURI: 'https://www.youtube.com/watch?v=ybji16u608U',
	},

	{
		id: 3,
		title: 'Doctor Strange in the Multiverse of Madness',
		storyline: `Following the events of Spider-Man No Way Home, Doctor Strange unwittingly casts a forbidden spell that accidentally opens up the multiverse. With help from Wong and Scarlet Witch, Strange confronts various versions of himself as well as teaming up with the young America Chavez while traveling through various realities and working to restore reality as he knows it. Along the way, Strange and his allies realize they must take on a powerful new adversary who seeks to take over the multiverse.`,
		genres: ['Action', 'Adventure', 'Fantasy'],
		info: ['PG-13', '2h 6m', '2022'],
		video_url: `https://res.cloudinary.com/dpcu6eyk8/video/upload/q_68/v1693732617/Untitled_video_-_Made_with_Clipchamp_1_cqx5pf.mp4`,
		redirectURI: '/movie/doctor-strange-in-the-multiverse-of-madness-2022?id=tt9419884',
		trailerURI: 'https://www.youtube.com/watch?v=aWzlQ2N6qqg',
	},
]

export type BannerContentType = (typeof banners)[0]

export default banners
