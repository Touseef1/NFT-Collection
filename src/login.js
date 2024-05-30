import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
    const { loginWithRedirect } = useAuth0();
    const { user , isAuthenticated , logout } = useAuth0();

  return (
    <div className="App">
      
      <div className="login-container">
  <h1>Login</h1>
  <form id="loginForm">
    <div className="input-group">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" required />
    </div>
    <div className="input-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />
    </div>
    <button type="submit" onClick={() => loginWithRedirect()}>Log In</button>
    <button type="submit"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>

  </form>
  
  {isAuthenticated && user && (
                <div className="user-info">
                  <h1>{user.name}</h1>
                  <h1>{user.email}</h1>
                  <img src={user.picture} />
                </div>
              )}
</div>
    </div>
  );
}

export default Login;
