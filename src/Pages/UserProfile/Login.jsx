import { AuthContext } from "../../Providers/AuthProviders";
import Navbar from "../../Shared/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  console.log("location in the login page",location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget); // will render whole form's html structure
    const form = new FormData(e.currentTarget); // will render form data
    console.log(form);
    console.log(form.get("password")); // will render the password user have set

    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password); // test

    signIn(email, password) // calling signIn function from Authprovider.jsx
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.error(error);
      });

  };

  // Google Sign In : https://firebase.google.com/docs/auth/web/google-signin
  const auth = getAuth(app);   // remember to import app
  const GoogleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    console.log('google mama is coming');
    signInWithPopup(auth,GoogleProvider)  // display google login popup
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log('error',error.message);
    })
  }

  // Github Sign In : https://firebase.google.com/docs/auth/web/github-auth
  const GithubProvider = new GithubAuthProvider();  
  const handleGithubSignIn = () => {
    signInWithPopup(auth,GithubProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      const errorMessage = error.message;
      console.log(errorMessage);
    })  
  }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center font-bold">Please Login</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          {/* google & github sign in */}
          <div className="flex justify-center m-2">  
            <button className="btn btn-secondary m-2 item-center" onClick={handleGoogleSignIn}>Google Sign In</button>
            <button className="btn btn-secondary m-2 item-center" onClick={handleGithubSignIn}>Github Sign In</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have an account?
          <Link className="text-blue-600 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
