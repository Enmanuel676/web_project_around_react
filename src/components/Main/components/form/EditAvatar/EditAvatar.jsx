export default function EditAvatar() {
  return (
    <form name="avatar-form" noValidate>
      <input
        className="popup__input"
        type="url"
        name="avatar"
        placeholder="Ingrese la URL de la imagen"
        required
      />
      <p className="popup__line"></p>
      <span className="popup__input_type_error" id="avatar-error"></span>
      <button className="popup__button_disabled" type="submit">
        Guardar
      </button>
    </form>
  );
}
