import React, { Profiler, useState } from 'react';
import { LoginSocialTwitter } from 'reactjs-social-login';
const LandingPage = () => {
  const [userData, setUserData] = useState(null);

  const handleSocialLogin3 = (provider, data) => {
    console.log("handleSocialLogin3 - Provider: ", provider);
    console.log("handleSocialLogin3 - Data: ", data);
    setUserData(data);
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
    <div className="autentication-bg">
    <div className="col-xl-12 d-grid mt-2">
    <LoginSocialTwitter
        client_id="b3RZYWRiSktVcUttWk1YQ2RZbTc6MTpjaQ"
        onReject={handleSocialLoginFailure}
        onLoginStart={handleSocialLoginStart}
        onResolve={handleSocialLogin3}
        className='cursor'
        fields="username"
        isOnlyGetCode={true}
      >
        Login with Twitter
        <i className="fab fa-twitter ms-3"></i>
      </LoginSocialTwitter>
      {userData && (
        <div>
          <h3>Welcome, {userData.username}</h3>
          <p>Email: {userData.email}</p>
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
