import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <div className="proCont container">
        <h2>Profile</h2>

        <form>
          <img
            src={currentUser.data.profilePic}
            alt="proPicture"
            className="picProfile"
          />
          <input
            type="text"
            placeholder="Username"
            id="Username"
            defaultValue={currentUser.data.username}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            defaultValue={currentUser.data.email}
          />
          <input type="password" placeholder="Password" id="password" />
          <button type="button">Update</button>
        </form>
        <div className="conOfDeleteandLogout">
          <span>Delete Account</span>
          <span>Log Out</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
