import React, { useState } from 'react';
import { LoginSocialTwitter } from 'reactjs-social-login';

const LandingPage = () => {
  const [userData, setUserData] = useState(null);

  const handleSocialLogin3 = (provider, data) => {
    console.log("handleSocialLogin3 - Provider: ", provider);
    console.log("handleSocialLogin3 - Data: ", data);

    // Extract the necessary user information from the data object
    if (data && data.profile) {
      setUserData({
        username: data.profile.name,
        email: data.profile.email,
        id: data.profile.id_str,
      });
    } else {
      console.error("handleSocialLogin3: Data does not contain profile information");
    }

    window.close();
  };

  const handleSocialLoginFailure = (err) => {
    console.error("handleSocialLoginFailure: ", err);
    window.close();
  };

  const handleSocialLoginStart = () => {
    console.log("handleSocialLoginStart: Login button clicked");
  };

  return (
    <div>
      <div className="authentication-bg">
        <div className="col-xl-12 d-grid mt-2">
          <LoginSocialTwitter
            client_id="b3RZYWRiSktVcUttWk1YQ2RZbTc6MTpjaQ"
            onReject={handleSocialLoginFailure}
            onLoginStart={handleSocialLoginStart}
            onResolve={handleSocialLogin3}
            className='cursor'
            fields="name,email,id"
            isOnlyGetCode={true}
          >
            Login with Twitter
            <i className="fab fa-twitter ms-3"></i>
          </LoginSocialTwitter>
          {userData && (
            <div>
              <h3>Welcome, {userData.username}</h3>
              <p>Twitter ID: {userData.id}</p>
            </div>
          )}
          <a href="quest.html" className="btn btn-lg btn-primary">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
