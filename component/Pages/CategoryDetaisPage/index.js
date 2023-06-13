import React from "react";
import FeatureCard from "@/component/molecules/featureCard"; 
import './styles.scss';


function CategoryPage() {
   
  return (
    <>
    <div className="bodyWrapper width-100">
        <div className="container categoryWraper">
            <h1>Find Property</h1>
            <div className="col-md-3 leftlistItem">
                <div className="leftlistItemBox">
                    <form>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                    Property Type
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="commercial" />
                                        <label for="commercial">Commercial</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="land" />
                                        <label for="land">Land</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="house" />
                                        <label for="house">House</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="apartment" />
                                        <label for="apartment">Apartment</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="condominium" />
                                        <label for="condominium">Condominium</label>
                                    </div>
                                    <p className="note">You cannot select more than three</p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                    Province
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="manila" />
                                        <label for="manila">Metro Manila</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="makati" />
                                        <label for="makati">Makati City</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="calacoon" />
                                        <label for="calacoon">Calacoon City</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="basmnet" />
                                        <label for="basmnet">Basmnet City</label>
                                    </div>
                                    <p className="note">You cannot select more than three</p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                    City/Muncipality
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="laspinas" />
                                        <label for="laspinas">Laspinas</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="passay" />
                                        <label for="passay">Passay</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="malaboon" />
                                        <label for="malaboon">Malaboon</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="makaya" />
                                        <label for="makaya">Makaya</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="quezon" />
                                        <label for="quezon">Quezon</label>
                                    </div>
                                    <p className="note">You cannot select more than three</p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#barnagay">
                                    Barangay
                                </button>
                                </h2>
                                <div id="barnagay" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="barangay1" />
                                        <label for="barangay1">Barangay 1</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="barangay2" />
                                        <label for="barangay2">Barangay 2</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="barangay3" />
                                        <label for="barangay3">Barangay 3</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="barangay4" />
                                        <label for="barangay4">Barangay 4</label>
                                    </div>
                                    <div className="form-group checkCustom">
                                        <input type="checkbox" id="barangay5" />
                                        <label for="barangay5">Barangay 5</label>
                                    </div>
                                    <p className="note">You cannot select more than three</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="priceRange">
                            <h2>Price</h2>
                        </div>
                        <button className="searchProperty">Search</button>
                    </form>
                </div>
            </div>
            <div className="col-md-9 rightContainer category_list">
                {[...Array(5)].map((item) => (
                    <FeatureCard />
                ))}
            </div>
        </div>
       </div>
    </>
  );
}

export default CategoryPage;
