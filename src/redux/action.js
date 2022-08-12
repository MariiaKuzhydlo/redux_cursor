import { ADD_POST, COMMENT_POST, LIKE_POST, RETWEET_POST } from "./types";

export const addNewPost = (id, text, image, authorPhoto, authorName, authorNick) => {
	return {
		type: ADD_POST,
		post: {
			id,
			authorPhoto,
			authorName,
			authorNick,
			postDate: "today at this time",
			postText: text,
			postImage: image,
			comments: 482,
			retweets: 146,
			likes: 887,
		},
	};
};

export const commentPost = (id, commented) => {
	return {
		type: COMMENT_POST,
		payload: {
			id,
			commented,
		},
	};
};

export const likePost = (id, liked) => {
	return {
		type: LIKE_POST,
		payload: {
			id,
			liked,
		},
	};
};

export const retweetPost = (id, retweeted) => {
	return {
		type: RETWEET_POST,
		payload: {
			id,
			retweeted,
		},
	};
};
