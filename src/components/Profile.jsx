import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../firebase/AuthProvider";

const Profile = () => {

    const userInfo = useContext(AuthContext);
    console.log(userInfo);

    return (
        <div className="bg-[#000e25] text-[#f8fbff]">
            <Navbar></Navbar>
            <h2 className="text-center text-2xl text-[#d7a31a] mb-10 mt-24 font-bold">User Profile</h2>
            <div className="py-24 w-[80%] mx-auto text-xl text-center">

                <img className="w-[10%] mx-auto rounded-full mb-10" src={`${userInfo.user.photoURL}`} alt="" />

                <div className="mb-5">
                    <span className="text-[#4d95a7]">Name: </span>
                    <input className="bg-[#000e25] p-2 rounded-md ml-3 pl-5 border border-[#4d95a7]" type="text" name="userName" defaultValue={userInfo.user.displayName} />
                </div>
                <div className="mb-5">
                    <span className="text-[#4d95a7]">Email Address: </span>
                    <input className="bg-[#000e25] p-2 rounded-md ml-3 pl-5 border border-[#4d95a7]" type="text" name="userName" defaultValue={userInfo.user.email} />
                </div>
                <div className="mb-5 flex gap-2 flex-col md:flex-row justify-center">
                    <span className="text-[#4d95a7]">Last Sign In: </span>
                    <p>{userInfo.user.metadata.creationTime}</p>
                </div>
                <div className="mb-5 flex gap-2 flex-col md:flex-row justify-center">
                    <span className="text-[#4d95a7]">Last Sign In: </span>
                    <p>{userInfo.user.metadata.lastSignInTime}</p>
                </div>
                <div className="mb-5">
                    <span className="text-[#4d95a7]">Phone Number: </span>
                    <input className="bg-[#000e25] p-2 rounded-md ml-3 pl-5 border border-[#4d95a7]" type="text" name="userName" defaultValue={userInfo.user.phoneNumber} />
                </div>

                <button className="btn bg-[#4d95a7] border border-[#4d95a7] text-[#f8fbff] hover:bg-[##f8fbff] hover:border-[#f8fbff] hover:text-[#4d95a7] mt-5">Update Profile</button>

            </div>
        </div>
    );
};

export default Profile;