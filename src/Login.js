import React from "react";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const responseGoogle = (response) => {
    // Handle the Google authentication response here
    console.log(response);
  };

  return (
    <div>
      <h2>Please Sign In with Google </h2>
      <GoogleLogin
        clientId="884146983517-tfqatkorru6uht4lr2kco658oak7r3df.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        scope="email"
      />
    </div>
  );
};

export default Login;
