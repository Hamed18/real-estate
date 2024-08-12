import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Navbar from "../../Shared/Navbar";

const UpdateProfile = () => {
	const {user} = useContext(AuthContext);
	return (
		<div>
			<Navbar></Navbar>
			{
				user &&   {/* conditional rendering */}
				<div className="flex flex-col items-center justify-center">
					<p className="text-2xl text-center font-bold m-2">Update Profile</p>
					<h3>User Name: {user.displayName}</h3>
					<p>Email: {user.email? user.email : "email not found"}</p>  {/* ternary operator checks if user.email is truthy (not null, undefined, false, 0, or an empty string) */}
					<img src={user?.photoURL} alt="" className="w-[400px] h-[400px] rounded-xl"/>
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