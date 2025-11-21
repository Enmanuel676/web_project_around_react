export default function Main() {
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
      <div className="grid"></div>
      <template id="template">
        <div className="grid__card">
          <div className="card__image">
            <button className="card__delete"></button>
            <img src="" alt="" className="grid__image" />
          </div>
          <h3 className="grid__name"></h3>
          <button className="grid__like" type="submit"></button>
        </div>
      </template>
      <div className="image__card" id="image-card">
        <button className="image__close"></button>
        <img src="" alt="" className="image__show" id="image-show" />
        <p className="image__name"></p>
      </div>
    </main>
  );
}
