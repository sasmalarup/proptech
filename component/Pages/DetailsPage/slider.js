
 "use client"
import React, { Component } from 'react';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';

class Slider extends React.Component {

	render() {


		const images = [
			{
				original: 'https://www.rephil.app/upload/supplier_category_image/1678924160_cat5.jpg',
				thumbnail: 'https://www.rephil.app/upload/supplier_category_image/1678924160_cat5.jpg',
			},
			{
				original: 'https://www.rephil.app/upload/supplier_category_image/1678924259_cat3.jpg',
				thumbnail: 'https://www.rephil.app/upload/supplier_category_image/1678924259_cat3.jpg',
			},
			{
				original: 'https://www.rephil.app/upload/supplier_category_image/1678924160_cat5.jpg',
				thumbnail: 'https://www.rephil.app/upload/supplier_category_image/1678924160_cat5.jpg',
			},
		];


		return (
			<div style={{ width: '100%' }}>
			    <ImageGallery items={images}/>
			</div>
		);
	}

}

export default Slider;
