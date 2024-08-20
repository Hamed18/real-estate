import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Navbar from "../../Shared/Navbar";
import { updateProfile, getAuth } from "firebase/auth";

const UpdateProfile = () => {
  const { user, HandleUpdateProfile } = useContext(AuthContext);

  const UpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("Photo");
    console.log(name, photo);

    HandleUpdateProfile(name, photo);
  };

  return (
    <div>
      <Navbar></Navbar>
      <h3 className="font-bold text-2xl text-center mt-8 mb-4">
        Update Profile
      </h3>
      <form
        onSubmit={UpdateProfile}
        className="w-3/4 md:w-3/5 lg:w-1/2 mx-auto"
		>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder={user.displayName}
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
            placeholder={user.photoURL}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-3">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
