import { useDispatch } from "react-redux"
import { useState } from "react"
import Comment from "../../icons/Comment.svg"
import Like from "../../icons/Like.svg"
import Retweet from "../../icons/Retweet.svg"
import Share from "../../icons/Share.svg"
import { commentPost, likePost, retweetPost } from "../../redux/action"
import "./styles"
import { SAuthorInfo, SAuthorName, SAuthorPhoto, SComments, SCommentsCount, SLikes, SLikesCount, SMainImage, SNickName, SPost, SPostData, SPostFooter, SPostHeader, SPostInfo, SPostText, SRetweets, SRetweetsCount, SShare } from "./styles"

const Post = ({ post }) => {
	const dispatch = useDispatch();
	const { authorPhoto,
		authorName,
		authorNick,
		postDate,
		postText,
		postImage,
		comments,
		retweets,
		likes, } = post;

	const [liked, setLiked] = useState(false);
	const [commented, setCommented] = useState(false);
	const [retweeted, setRetweeted] = useState(false);

	const id = post.id;
	const handleComment = () => {
		setCommented(!commented);
		dispatch(commentPost(id, commented));
	};

	const handleLike = () => {
		setLiked(!liked);
		dispatch(likePost(id, liked));
	};

	const handleRetweet = () => {
		setRetweeted(!retweeted);
		dispatch(retweetPost(id, retweeted));
	};

	return (
		<SPost>
			<SPostHeader>
				<SAuthorPhoto>
					<img src={authorPhoto} alt="photo" />
				</SAuthorPhoto>
				<SPostInfo>
					<SAuthorInfo>
						<SAuthorName>{authorName}</SAuthorName>
						<SNickName>{authorNick}</SNickName>
						<SPostData>/...{postDate}/</SPostData>
					</SAuthorInfo>
					<SPostText>{postText}</SPostText>
				</SPostInfo>
			</SPostHeader>
			<SMainImage>
				<img src={postImage} alt="postPhoto" />
			</SMainImage>
			<SPostFooter>
				<SComments onClick={handleComment} >
					<img src={Comment} alt="icon" />
					<SCommentsCount>{comments}</SCommentsCount>
				</SComments>
				<SRetweets onClick={handleRetweet}>
					<img src={Retweet} alt="icon" />
					<SRetweetsCount>{retweets}</SRetweetsCount>
				</SRetweets>
				<SLikes onClick={handleLike}>
					<img src={Like} alt="icon" />
					<SLikesCount>{likes}</SLikesCount>
				</SLikes>
				<SShare>
					<img src={Share} alt="icon" />
				</SShare>
			</SPostFooter>
		</SPost>

	)
};

export default Post;