import React, { useState } from "react";
import { Link } from "react-router-dom";


function Gallery(){

	const [images, setImages] = useState([
		'src/Images/1.jpg',
		'src/Images/2.jpg',
		'src/Images/3.jpg',
		'src/Images/4.jpg',
		'src/Images/5.jpg',
		'src/Images/6.jpg',
		'src/Images/7.jpg',
		'src/Images/8.jpg',
	])

	const addImages = (newImage) => {
		setImages([...images, newImage])
	}

	return (
		<>
			<h1 className="title">Gallery</h1>
			<ul className="imageGallery">
				{images.map((image, index) => (
					<li key={index}>
						<img src={image} alt={`Image ${index + 1}`} />
					</li>
				))}
			</ul>
			<p className="link"><Link to="/">Home</Link></p>
		</>
	);
}

export default Gallery;