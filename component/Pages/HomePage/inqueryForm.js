import './styles.scss';

function InqueryCard() {
  return (
    <>
        <div className="overlayCity width-100">
            <div className='row'>
                <div className="noo-vc col-md-6 col-sm-12 ">
                    <h1>Buy or sell your house in few second with Dream City</h1>
                    <div className='row'>
                        <div className="noo-vcBox col-md-6 col-sm-12 ">
                            <h2>01.</h2>
                            <h3>Suitable For Agents And Agencies</h3>
                            <p>Never miss a sale! It's never been easier to turn leads into real customers</p>
                        </div>
                        <div className="noo-vcBox col-md-6 col-sm-12 ">
                            <h2>02.</h2>
                            <h3>Suitable For Agents And Agencies</h3>
                            <p>Never miss a sale! It's never been easier to turn leads into real customers</p>
                        </div>
                        <div className="noo-vcBox col-md-6 col-sm-12 ">
                            <h2>03.</h2>
                            <h3>Suitable For Agents And Agencies</h3>
                            <p>Never miss a sale! It's never been easier to turn leads into real customers</p>
                        </div>
                    </div>
                    
                </div>
                <div className="inqueryForm col-md-6 col-sm-12">
                    <div className='inqueryFormBox'>
                    <h3>Real City Inquiry Form</h3>
                    <p>Design custom lead capture forms that integrate with the Houzez CRM</p>
                        <form>
                            <div className='row'>
                                <div className='col-md-6 col-sm-12'>
                                    <div className='fieldType'>
                                        <label>Inquiry Type</label>
                                        <div className="select-dropdown">
                                            <select>
                                                <option>Rent</option>
                                                <option>Sell</option>
                                                <option>Lease</option>
                                                <option>Purchase</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <div className='fieldType'>
                                        <label>Province</label>
                                        <div className="select-dropdown">
                                            <select>
                                                <option>Metro Manila</option>
                                                <option>Makati</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 col-sm-12'>
                                    <div className='fieldType'>
                                        <label>City</label>
                                        <div className="select-dropdown">
                                            <select>
                                                <option>Pasacian City</option>
                                                <option>ReEest</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <div className='fieldType'>
                                        <label>Barangay</label>
                                        <div className="select-dropdown">
                                            <select>
                                                <option>Barangay 2</option>
                                                <option>Pasacay</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='fieldType'>
                                <label>Name</label>
                                <input type='text' placeholder='Type Name' />
                            </div>
                            <div className='fieldType'>
                                <label>Email</label>
                                <input type='email' placeholder='Type Email' />
                            </div>
                            <div className='fieldType'>
                                <label>Contact Number</label>
                                <input type='number' placeholder='Type Mobile Number' />
                            </div>
                            <div className='fieldType'>
                                <label>Message</label>
                                <textarea placeholder='Type Mobile Message'></textarea>
                            </div>
                            <div className="form-group mt-2">
                                <input type="checkbox" id="tncCheck" />
                                <label for="tncCheck"></label>
                                <span>I agree to the <a href='#'>Terms of condition</a></span>
                            </div>
                            <div className='fieldType'>
                                <input type='submit' value='Submit' className='submitBtn' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
export default InqueryCard;