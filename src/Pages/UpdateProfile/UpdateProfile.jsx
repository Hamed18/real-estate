import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Navbar from "../../Shared/Navbar";
import { updateProfile,getAuth } from "firebase/auth";

const UpdateProfile = () => {
	const {user, Profile} = useContext(AuthContext);
	//const {name,setName} = useState(user.name);
	//const {photo,setPhoto} = useState(user.photo);
	//const [user,setUser] = useState(user);

	const UpdateProfile = (e) => {
         e.preventDefault();
		 const form = new FormData(e.currentTarget);
		 const name = form.get("name");
		 const photo = form.get("Photo");
		 console.log(name,photo);

		Profile(name,photo)
	}

	return (
		<div>
		  <Navbar></Navbar>
          <h3 className="font-bold text-2xl text-center my-3">Update Profile</h3>
		 <form onSubmit={UpdateProfile} className="w-3/4 md:w-3/5 lg:w-1/2 mx-auto">
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
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
		  <div className="form-control mt-3">
            <button className="btn btn-primary">Submit</button>
          </div>
		 </form>

		 {
				user &&   /* conditional rendering */
				<div className="flex flex-col items-center justify-center">
					<p className="text-2xl text-center font-bold mt-8">Your Profile</p>
					<h3>User Name: {user.displayName}</h3>
					<p>Email: {user.email? user.email : "email not found"} </p>  {/* ternary operator checks if user.email is truthy (not null, undefined, false, 0, or an empty string) */}
					<img src={user.photoURL? user.photoURL : "Profile Image not found"} alt="" className="w-[400px] h-[400px] rounded-xl"/>
				</div>
			}
			{
				!user && 
				<div>
					<p className="text-2xl text-center font-bold m-2">User Not Found</p>
					<br />
				</div>
			}
		</div>
	);
};

export default UpdateProfile;