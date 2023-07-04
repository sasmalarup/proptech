"use client"
import React from 'react';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';

function Slider({level_name,property_image}) {

	
	const images = property_image.split(",").map(img=>(
		{
			original: `${process.env.IMG_URL}${process.env.GALLERY_PROPERTY_IMG_URL}${img}`,
			thumbnail: `${process.env.IMG_URL}${process.env.GALLERY_PROPERTY_IMG_URL}${img}`	
		}
	))

	return (
		<div style={{ width: '100%', position: 'relative' }}>
			<div className='rentType'>
				<p>{level_name}</p>
			</div>
			<ImageGallery items={images}/>
		</div>
	)

}

export default Slider;
