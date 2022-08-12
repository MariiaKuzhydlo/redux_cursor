import styled from "styled-components"


export const SPost = styled.div`
      display:flex;
		flex-direction:column;
		max-width:600px;
		margin:40px auto;
		border:1px solid black;
		border-radius:10px;
		padding:15px;
		background-color:#E0E0E0;
`;
export const SPostHeader = styled.div`
		display:flex;
		align-items:center;
		
`;
export const SAuthorPhoto = styled.div`
			& > img{
				width:60px;
				height:60px;
				border-radius:50px;
				margin:0px 10px 0px 0px;
	}
`;
export const SPostInfo = styled.div`
		display:flex;
		flex-direction:column;
`;
export const SAuthorInfo = styled.div`
		display:flex;
		margin:0px 0px 8px 0px;
		justify-content:space-around;
`;
export const SAuthorName = styled.div`
		margin:0px 15px 0px 0px;
`;
export const SNickName = styled.div`
		margin:0px 15px 0px 0px;
`;
export const SPostData = styled.div``;
export const SPostText = styled.div``;
export const SMainImage = styled.div`
      margin:6px auto;
		&> img{
			max-width:500px;
			max-height:200px;
			border-radius:20px;
			
		}
`;
export const SPostFooter = styled.div`
		display:flex;
		justify-content:space-around;
	   align-items:center;
`;
export const SComments = styled.div`
		display:flex;
		align-items:center;
		cursor:pointer;
		:hover{
			color:red;
		}
		& > img{
			max-width:25px;
			margin:0px 5px 0px 0px;
		}
`;
export const SCommentsCount = styled.div``;
export const SRetweets = styled.div`
		display:flex;
		align-items:center;
		cursor:pointer;
		:hover{
			color:red;
		}
		& > img{
					max-width:25px;
					margin:0px 5px 0px 0px;
				}
`;
export const SRetweetsCount = styled.div``;
export const SLikes = styled.div`
		display:flex;
		align-items:center;
		cursor:pointer;
		:hover{
			color:red;
		}
		& > img{
			max-width:25px;
			margin:0px 5px 0px 0px;
		}
`;
export const SLikesCount = styled.div``;
export const SShare = styled.div`
	cursor:pointer;
		& > img{
			width:25px;
		}
`;



