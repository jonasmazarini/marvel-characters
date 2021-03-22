import React from "react";
import ProfileCard from "../ProfileCard";

//Create the datas to show on the profile page(still not working)
const ProfileList = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => {
        return (
          <ProfileCard
            id={profile.[0].id}
            name={profile.[0].name}
            thumbnail={profile.[0].thumbnail.path}
            extension={profile.[0].thumbnail.extension}
          />
        );
      })}
    </div>
  );
};

export default ProfileList;
