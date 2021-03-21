import React from "react";
import Header from "../../components/Header/Header";
import "./Profiles.css";
import logo from "../../assets/header-image.jpg";

const Profile = ({ id, name, thumbnail, extension, description }) => {
  return (
    <>
      <section>
        <Header />
        <div className="profileContainer">
          <img src={logo} alt="logo" className="characterImage" />
          <h2 className="characterName">Lorem ipsum</h2>
          <p className="characterDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </>
  );
};

export default Profile;
