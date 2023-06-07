import React from 'react';
import './styles.scss';

function HomeTabs() {
  return (
    <>
    <div className='tabsContainer'>
      <div className="card p-3 shadow tabsCaption">
        <nav>
          <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-rent-tab" data-bs-toggle="tab" data-bs-target="#nav-rent" type="button" role="tab" aria-selected="true">Rent</button>
            <button className="nav-link" id="nav-sale-tab" data-bs-toggle="tab" data-bs-target="#nav-sale" type="button" role="tab" aria-selected="false">Sale</button>
            <button className="nav-link" id="nav-lease-tab" data-bs-toggle="tab" data-bs-target="#nav-lease" type="button" role="tab" aria-selected="false">Lease</button>
          </div>
        </nav>
        <div className="tab-content p-3 border bg-light" id="nav-tabContent">
          <div className="tab-pane fade active show" id="nav-rent" role="tabpanel" aria-labelledby="nav-rent-tab">
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
          <div className="tab-pane fade" id="nav-sale" role="tabpanel" aria-labelledby="nav-sale-tab">
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
          <div className="tab-pane fade" id="nav-lease" role="tabpanel" aria-labelledby="nav-lease-tab">
          <div className="container text-center">
              <div className="row justify-content-start">
                <div className="col-md-10 col-12 selectOption_search">
                  <div className="col-md-4 form-floating">
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
    </div>
    </>
  );
}
export default HomeTabs;