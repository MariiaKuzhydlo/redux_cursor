import { SForm, SFormAuthor, SFormBtn, SFormOption, SFormPhoto, SFormText } from "./styles";
import "./styles"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorSelector, postSelector } from "../../redux/reducer";
import { addNewPost } from "../../redux/action";

const Form = () => {
	const [inputText, setInputText] = useState("");
	const [inputImage, setInputImage] = useState("");
	const [selectAuthor, setSelectAuthor] = useState("Anakin Skywalke");

	const posts = useSelector(postSelector);
	const authors = useSelector(authorSelector);

	const id = posts.length - 1;
	const { NoName, AnakinSkywalker } = authors;

	const dispatch = useDispatch();

	const handleInputText = (e) => {
		setInputText(e.target.value);
	};

	const handleInputImage = (e) => {
		setInputImage(e.target.value);
	};

	const handleSelect = (e) => {
		setSelectAuthor(e.target.value);
	};

	const checkInputs = () => {
		if (!inputText) {
			setInputText("Your text here");
		}
		if (!inputImage) {
			setInputImage(
				"https://upload.wikimedia.org/wikipedia/commons/2/2d/Your_photo_here.jpg"
			);
		}
	};
	checkInputs();
	const handleSubmit = (e) => {
		e.preventDefault();
		checkInputs();

		if (selectAuthor === "NoName") {
			dispatch(addNewPost(id, inputText, inputImage, NoName.authorPhoto, NoName.authorName, NoName.authorNick));
		} else {
			dispatch(
				addNewPost(id, inputText, inputImage, AnakinSkywalker.authorPhoto, AnakinSkywalker.authorName, AnakinSkywalker.authorNick)
			);
		}
	};

	return (
		<SForm>
			<SFormOption>
				<SFormText placeholder="Text for new post" type="text" onChange={handleInputText} />
				<SFormPhoto placeholder="URL-image for new post" type="text" onChange={handleInputImage} />
				<SFormAuthor>
					<select defaultValue={"Anakin Skywalke"} onChange={handleSelect}>
						<option>Anakin Skywalker</option>
						<option>NoName</option>
					</select>
				</SFormAuthor>
			</SFormOption>
			<SFormBtn onClick={handleSubmit}>Create</SFormBtn>
		</SForm>
	)


};

export default Form;