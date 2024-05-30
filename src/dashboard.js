import React from "react";
import TwitterLogin from "react-twitter-login";
import "./App.css";

const CONSUMER_KEY = "lAxmxVtdriij0nsarbLr2AoRk";
const CONSUMER_SECRET = "qInkBbN6DnOOGoOk9MRnU8tNIanNiIA3CqigC5Gworfx0kMpxS";

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
          callbackUrl="http://localhost:3000/dashboard" 
          children={<button>Login with Twitter</button>}
        />
      </div>
    </div>
  );
}

export default Dashboard;
