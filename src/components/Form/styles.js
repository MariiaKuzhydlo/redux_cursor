import styled from "styled-components"

export const SForm = styled.div`
   display:flex;
	flex-direction:column;
	max-width:620px;
	margin:20px auto;
	border:1px solid black;
	border-radius:20px;
   padding:10px 0px;
	
`;
export const SFormOption = styled.form`
   display:flex;
	flex-direction:column;
	align-items:center;
	margin:0px 0px 10px 0px;
`;
export const SFormText = styled.input`
	width:60%;
	font-size:17px;
	margin:0px 0px 10px 0px;
`;
export const SFormPhoto = styled.input`
	width:60%;
	font-size:17px;
	margin:0px 0px 10px 0px;
`;
export const SFormAuthor = styled.div`
	margin:0px 0px 10px 0px;
	& > select{
		font-size:17px;
	}
`;
export const SFormBtn = styled.button`
	max-width:150px;
	font-size:16px;
   font-weight:bold;
	background-color:#CCE5FF;
	border-radius:10px;
	border:1px solid white;
	margin:0 auto;
	padding:10px 20px;
	cursor:pointer;
	:hover{
		background-color:yellow;	
	}
`;
