import React from "react";
import "../components/Usercard.css"; // External CSS for styling

const Usercard = () => {
  // Static dummy data with variations
  const user = {
    profilePhoto: "https://via.placeholder.com/150",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+987 654 3210",
    address: "456 Elm St, Metropolis, USA",
  };

  return (
    <div className="usercard">
      <div className="usercard__header">
        <img src={user.profilePhoto} alt="Profile" className="usercard__image" />
      </div>
      <div className="usercard__body">
        <h3 className="usercard__name">{user.name}</h3>
        <p className="usercard__email">📧 {user.email}</p>
        <p className="usercard__phone">📞 {user.phone}</p>
        <p className="usercard__address">🏠 {user.address}</p>
      </div>
      <div className="usercard__footer">
        <button className="usercard__btn">View Profile</button>
      </div>
    </div>
  );
};

export default Usercard;
