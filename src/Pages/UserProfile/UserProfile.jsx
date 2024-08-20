import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl text-center font-bold mt-8 mb-4">Your Profile</p>
        <h3>User Name: {user.displayName}</h3>
        <p>Email: {user.email ? user.email : "email not found"} </p>{" "}
        {/* ternary operator checks if user.email is truthy (not null, undefined, false, 0, or an empty string) */}
        <img
          src={user.photoURL? user.photoURL : "Profile Image not found"}
          alt=""
          className="w-[525px] h-[375px]"
        />
      </div>
    </div>
  );
};

export default UserProfile;
