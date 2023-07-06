import React from 'react';
import '../HomePage/styles.scss';

function SearchTabs() {
  return (
    <>
    <div className='tabsContainer'>
        <div className='tabsCaption searchFilter'>
            <div className='tab-content shadow'>
            <div className="container text-center">
                <div className="row justify-content-start">
                    <div className="col-md-10 col-12 selectOption_search">
                        <div className="col-4 form-floating">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>Choose Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelect">Select Type</label>
                        </div>
                        <div className="col-4 form-floating">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>Choose Province</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelect">Select Province</label>
                        </div>
                        <div className="col-4 form-floating">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>Choose City/Muncipality</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelect">Select City/Muncipality</label>
                        </div>
                    </div>
                    <div className="searchButton col-md-2 col-12">
                        <button type='button' className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    </div>
    </>
  );
}
export default SearchTabs;