export default function EditProfile() {
  return (
    <form name="profile-form" noValidate>
      <input
        className="popup__input"
        type="text"
        name="name"
        placeholder="Nombre"
        required
        minLength="2"
        maxLength="40"
      />
      <p className="popup__line"></p>
      <span className="popup__input_type_error" id="name-error"></span>
      <input
        className="popup__input popup__input_content"
        type="text"
        name="description"
        placeholder="Acerca de mí"
        required
        minLength="2"
        maxLength="200"
      />
      <p className="popup__line"></p>
      <span className="popup__input_type_error" id="description-error"></span>
      <button className="popup__button_disabled" type="submit">
        Guardar
      </button>
    </form>
  );
}
