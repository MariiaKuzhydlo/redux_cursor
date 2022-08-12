import React from "react";
// import PostForm from "./PostForm";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import { postSelector } from "../../redux/reducer";
import { v4 } from "uuid";
import Form from "../Form/Form";

const PostsList = () => {
	const posts = useSelector(postSelector);
	return (
		<div >
			<Form />
			{posts.map((post) => {
				return <Post post={post} key={v4()} />;
			})}
		</div>
	);
};

export default PostsList;
