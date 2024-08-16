import Navbar from "../../Shared/Navbar";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, signIn, Profile } = useContext(AuthContext);

  // Password Verification and Toggle Password
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget); // will render whole form's html structure
    const form = new FormData(e.currentTarget); // will render form data
    console.log(form);
    console.log(form.get("password")); // will render the password user have set

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // Verify Password
    setRegisterError(""); // reset variable registerError
    setSuccess("");
  /*  if (password.length < 6) {
      setRegisterError("Password should be atleast 6 characters or longer");
      return; // remember to return
    } 
    else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Password should contain atleast one uppercase character"
      );
      return;
    } else if (!/[a-a]/.test(password)) {
      setRegisterError(
        "Password should contain atleast one lowercase character"
      );
      return;
    }  */

    /*  else if (!/^(?=.*[a-z])(?=.*[A-Z])+$/.test(password)){
    setRegisterError("Password should contain atleast an uppercase and a lowercase character");
    return; }  */

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });

    Profile(name,photo)
    .then()
    .catch()
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center font-bold">
          Please Register
        </h2>
        <form onSubmit={handleRegister} className="w-3/4 md:w-3/5 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="Photo"
              placeholder="Photo URl"
              className="input input-bordered"
              required
            />
          </div>
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
            {/* toggle show password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <span className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div>
            {registerError && <p className="text-red-700">{registerError}</p>}
            {success && <p className="text-green-700">{success}</p>}
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-2">
          Already have an account?
          <Link className="text-blue-600 font-bold ml-1" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
