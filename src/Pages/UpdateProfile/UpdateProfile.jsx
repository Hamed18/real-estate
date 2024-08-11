import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Navbar from "../../Shared/Navbar";

const UpdateProfile = () => {
	const {user} = useContext(AuthContext);
	return (
		<div>
			<Navbar></Navbar>
			{
				user && 
				<div className="flex flex-col items-center justify-center">
					<p className="text-2xl text-center font-bold m-2">Update Profile</p>
					<h3>User Name: {user.displayName}</h3>
					<p>Email: {user.email}</p>
					<img src={user?.photoURL} alt="" className="w-[400px] h-[400px]"/>
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