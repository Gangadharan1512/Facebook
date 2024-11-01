import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate();



    return (
        <div className='signup'>
            <div className="signup-top">
                <h1>facebook</h1>

                <div className="signup-container">
                    <div className="container-top">
                        <h2>Create a new Account</h2>
                        <p>It's easy and quick</p>
                    </div>
                    <hr />
                    <div className="container-bottom">
                        <div className="name">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder='Last Name' />
                        </div>
                        <p>Date of Birth</p>
                        <div className="dob">
                            <input type="date" />
                        </div>
                        <p>Gender</p>
                        <div className="gender">
                            <label><input type="radio" name='option' value={1} />Male</label>
                            <label><input type="radio" name='option' value={2} />Female</label>
                            <label><input type="radio" name='option' value={3} />Custom</label>
                        </div><div className="emp">
                            <input type="email" placeholder='Email Address or Mobile Number' />
                            <input type="password" placeholder='New Password' />
                        </div>
                        <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                        <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                        <button onClick={()=>navigate('/home')}>Sign Up</button>
                    </div>
                    <p className='nav' onClick={() => navigate('/login')}>Already have an Account</p>
                </div>

            </div>
            <div className="signup-bottom">
                <p>English (UK) தமிழ்  తెలుగు  ಕನ್ನಡ  हिन्दी  മലയാളം  සිංහල  ਪੰਜਾਬੀ  বাংলা  ગુજરાતી</p>
                <hr />
                <p>Sign Up Log in Messenger Facebook Lite Video Places Games Marketplace Meta Pay Meta Store Meta Quest Ray-Ban Meta Meta AI Instagram Threads Fundraisers Services Voting Information Centre Privacy Policy Privacy Centre Groups About Create ad Create Page Developers Careers Cookies AdChoices Terms Help Contact uploading and non-users
                    Meta © 2024</p>
            </div>
        </div>
    )
}

export default Signup