import React from 'react';
import Image from "next/image";
import banner from'../../../public/images/search-banner.jpg';
import SearchTabs from './searchTabs';
import './styles.scss';


function SearchResult() {
  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide searchBanner" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <Image
                    src={banner}
                    width={'100%'}
                    height={300}
                    alt='search-banner'
                />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Metro Manila City</h5>
                    <p>This is dumy text please update this text</p>
                </div>
            </div>
        </div>
    </div>
    <SearchTabs />
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 projectFeatuer_container mt-4'>
                <h1 className='title_first'>No Result Found</h1>
            </div>
        </div>
    </div>
    </>
  );
}

export default SearchResult;
