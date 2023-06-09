import React from "react";
import './styles.scss';


function LoginPage() {
  return (
    <>
    <div className="overlayCitySignup width-100">
      <div className="signUpText col-md-6 col-sm-12">
          <div class="SingListContent width-100">
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
            <div class="UserForm width-100">
                <h1>Login</h1>
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-2 formInput">
                      <input
                        name="Name"
                        type="name"
                        className="form-control"
                        placeholder="User ID"
                      />
                    </div>
                    <div className="col-md-12 formInput passowrdInput">
                      <input
                        name="Password"
                        placeholder="Passowrd"
                        type="password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                  <p className="text-center mt-5" mt='2'>New to RealState? <a href="/signup" style={{color: '#21536f'}}>Sign Up</a></p>
                </form>
            </div>
        </div>
    </div>
    </>
  );
}

export default LoginPage;
