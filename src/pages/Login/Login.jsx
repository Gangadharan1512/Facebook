import './Login.css'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();


  return (
    <div className='login'>
      <div className="login-top">
        <h1>facebook</h1>
        <div className='login-container'>
          <p>Login in to Facebook</p>
          <input type="email" placeholder='Email Address or Phone Number' required />
          <input type="password" placeholder='Password' required />
          <button onClick={()=>navigate('/home')}>Log In</button>
          <div className='link'>
            <p>Forgotten Account?</p>
            <p onClick={() => navigate('/signup')}>Sign Up for Facebook</p>
          </div>
        </div>
      </div>
      <div className="login-bottom">
        <p>English (UK) தமிழ்  తెలుగు  ಕನ್ನಡ  हिन्दी  മലയാളം  සිංහල  ਪੰਜਾਬੀ  বাংলা  ગુજરાતી</p>
        <hr />
        <p>Sign Up Log in Messenger Facebook Lite Video Places Games Marketplace Meta Pay Meta Store Meta Quest Ray-Ban Meta Meta AI Instagram Threads Fundraisers Services Voting Information Centre Privacy Policy Privacy Centre Groups About Create ad Create Page Developers Careers Cookies AdChoices Terms Help Contact uploading and non-users
          Meta © 2024</p>
      </div>
    </div>
  )
}

export default Login