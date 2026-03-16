import React from "react";
import Popup from "../Popup/Popup.jsx";
function Main() {
  const [popup, setPopup] = React.useState(null);
  return (
    <main className="main">
      <div className="profile">
        <img src="" className="profile__avatar" alt="Profile-Avatar" />
        <div className="profile__info">
          <h1 className="profile__info-name">?</h1>
          <button className="profile__info-link"></button>
          <p className="profile__info-description">?</p>
        </div>
        <button className="profile__info_add"></button>
      </div>
      {popup && (
        <Popup onClose={handlePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
export default Main;
