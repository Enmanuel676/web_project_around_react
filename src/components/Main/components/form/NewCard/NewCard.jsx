export default function NewCard() {
  return (
    <form name="card-form" noValidate>
      <input
        className="popup__input"
        type="text"
        name="title"
        placeholder="Título"
        required
        minLength="2"
        maxLength="30"
      />
      <p className="popup__line"></p>
      <span className="popup__input_type_error" id="title-error"></span>
      <input
        className="popup__input popup__input_content"
        type="url"
        name="url"
        placeholder="URL de la imagen"
        required
      />
      <p className="popup__line"></p>
      <span className="popup__input_type_error" id="url-error"></span>
      <button className="popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}
