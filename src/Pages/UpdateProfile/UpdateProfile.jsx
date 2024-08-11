import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Navbar from "../../Shared/Navbar";

const UpdateProfile = () => {
	const {user} = useContext(AuthContext);
	return (
		<div>
			<Navbar></Navbar>
			<p>Update Profile</p>
			{
				user && 
				<div className="flex flex-col items-center justify-center">
					<h3>User Name: {user.displayName}</h3>
					<p>Email: {user.email}</p>
					<img src={user?.photoURL} alt="" className="w-[400px] h-[400px]"/>
				</div>
			}
		</div>
	);
};

export default UpdateProfile;