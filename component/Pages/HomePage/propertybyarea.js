import React from 'react'
import Image from 'next/image';
import hotel from'../../../public/images/propertyHotel.jpeg';
const Propertybyarea = () => {
    return (
        <>
            <div className='propertyArea'>
                <div className="container mt-5 mb-5 propertyAreaContainer">
                    <div className='featureTitle'>
                        <h2 className='mb-4'>Property by area</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                    <div className='propertyArea_box'>
                        {[...Array(12)].map((item) => (
                            <a href={'test'} className="col-md-3 col-xs-12 propertyAreaCard">
                                <div className='cardimage'>
                                    <span>
                                        <Image
                                            src={hotel}
                                            width='75px'
                                            height='75px'
                                            alt="image"
                                            optimized
                                        />
                                        <img
                                            className="d-block w-100"
                                            src={hotel}
                                            alt="First slide"
                                        />
                                    </span>
                                </div>
                                <div className='cardImage_content'>
                                    <span>Jersery City</span>
                                    <p>25 Listing</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Propertybyarea
