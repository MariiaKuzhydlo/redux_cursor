import { ADD_POST, COMMENT_POST, LIKE_POST, RETWEET_POST } from "./types";

const defaultState = {
	authors: {
		NoName: {
			authorPhoto: "https://pbs.twimg.com/profile_images/992040142973095936/pKWL34cL_400x400.jpg",
			authorName: "NoName",
			authorNick: "@noName",
		},
		AnakinSkywalker: {
			authorPhoto: "https://i.pinimg.com/736x/52/5d/48/525d48634a8e8233ba053cdc03742ea1.jpg",
			authorName: "Anakin Skywalker",
			authorNick: "@dart_vader",
		},
	},
	posts: [
		{
			id: 1,
			authorPhoto: "https://i.pinimg.com/736x/52/5d/48/525d48634a8e8233ba053cdc03742ea1.jpg",
			authorName: "Anakin Skywalker",
			authorNick: "@dart_vader",
			postDate: "today at this time",
			postText: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
			postImage: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
			comments: 182,
			retweets: 496,
			likes: 887,
		},
		{
			id: 2,
			authorPhoto: "https://i.pinimg.com/736x/52/5d/48/525d48634a8e8233ba053cdc03742ea1.jpg",
			authorName: "Anakin Skywalker",
			authorNick: "@dart_vader",
			postDate: "today at this time",
			postText: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
			postImage: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
			comments: 182,
			retweets: 496,
			likes: 887,
		},
	],
};

const postsReducer = (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_POST: {
			return { ...state, posts: [action.post, ...state.posts] };
		}
		case COMMENT_POST: {
			const foundPostIndex = state.posts.findIndex((post) => post.id === payload.id);
			payload.commented ? (state.posts[foundPostIndex].comments -= 1) : (state.posts[foundPostIndex].comments += 1);
			return state;
		}
		case LIKE_POST: {
			const foundPostIndex = state.posts.findIndex((post) => post.id === payload.id);
			payload.liked ? (state.posts[foundPostIndex].likes -= 1) : (state.posts[foundPostIndex].likes += 1);
			return state;
		}
		case RETWEET_POST: {
			const foundPostIndex = state.posts.findIndex((post) => post.id === payload.id);
			payload.retweeted ? (state.posts[foundPostIndex].retweets -= 1) : (state.posts[foundPostIndex].retweets += 1);
			return state;
		}
		default: {
			return state;
		}

	}
};

export const postSelector = (state) => state.postsReducer.posts;
export const authorSelector = (state) => state.postsReducer.authors;

export default postsReducer;
