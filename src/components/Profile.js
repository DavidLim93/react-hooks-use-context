import React from "react";
import Interests from "./Interests";

function Profile({ theme }) {

  const {user} = useContext(UserContext);

  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
