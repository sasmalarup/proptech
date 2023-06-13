import React from 'react';
import './styles.scss';


function SignupPage() {
  return (
    <>
    <div className="overlayCitySignup width-100">
      <div className="signUpText col-md-6 col-sm-12">
          <div className="SingListContent width-100">
              <h1>Thing you Can Do with<br/>RealCity Account</h1>
              <ul>
                <li>Post on Signle Property Free</li>
                <li>Set property alerts for your requirement</li>
                <li>Showcase your property as Rental, PG or for Sale</li>
                <li>Performance in search &amp; Track responses &amp; views online</li>
                <li>Add detailed property information &amp; multiple photos per listing</li>
              </ul>
          </div>
      </div>
        <div className="signUpCol col-md-6 col-sm-12">
            <div className="UserForm width-100">
                <h1>Signup</h1>
                <form>
                  <div className="row formContainer">
                    <div className="col-md-12 mb-2 formInput">
                      <input
                        name="Name"
                        type="name"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-12 mb-2 formInput">
                      <input
                        name="Email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                       <span className="errorText">Please Type Correct Email</span>
                    </div>
                    <div className="col-md-12 mb-2 formInput">
                      <input
                        name="Password"
                        placeholder="Passowrd"
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12 mb-2 formInput">
                      <input
                        name="Number"
                        type="number"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="col-md-12 formInput checkForms">
                      <input
                        style={{ marginRight: "2px" }}
                        type="checkbox"
                        value=""
                      />
                      <span style={{ marginRight: "10px", fontSize: '14px' }}>I Agree to</span>
                      <a
                        style={{color: '#21536f'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://google.com"
                      >
                        <span>Terms and Conditions</span>
                      </a> &amp;&nbsp;
                      <a style={{color: '#21536f'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://google.com"
                      >
                        <span>Privacy Policy</span>
                      </a>
                    </div>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
            </div>
        </div>
    </div>
    </>
  );
}

export default SignupPage;
