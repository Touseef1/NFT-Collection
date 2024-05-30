import React from "react";
import TwitterLogin from "react-twitter-login";
import "./App.css";

const CONSUMER_KEY = "b3RZYWRiSktVcUttWk1YQ2RZbTc6MTpjaQ";
const CONSUMER_SECRET = "UVMqyWB1Fi_Wn08RKsGJCOl9uMIoiv7fLbVjerj2sijmsr44kX";

function Dashboard() {

  const authHandler = (err, data) => {
    if (err) {
      console.error("Twitter login error:", err);
      return;
    }
    console.log("Twitter login success:", data);
    // Handle successful authentication (e.g., redirect to a protected route, store the user info, etc.)
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>Login successfully</h1>
        <TwitterLogin
          authCallback={authHandler}
          consumerKey={CONSUMER_KEY}
          consumerSecret={CONSUMER_SECRET}
          callbackUrl="https://nft-collection-three-lime.vercel.app" 
          children={<button>Login with Twitter</button>}
        />
      </div>
    </div>
  );
}

export default Dashboard;
