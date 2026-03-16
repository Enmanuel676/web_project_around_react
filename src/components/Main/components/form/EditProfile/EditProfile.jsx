function EditProfile() {
  return (
    <form class="popup__form popup__form_edit" id="form">
      <h2 class="popup__form_title">Editar Perfil</h2>
      <input
        type="text"
        class="popup__input"
        placeholder="Nombre"
        id="name"
        required
        minlength="2"
        maxlength="400"
      />
      <p class="popup__line"></p>
      <span class="popup__input_type_error" id="name-error"></span>
      <input
        type="text"
        class="popup__input popup__input_content"
        placeholder="Acerca de mí"
        id="description"
        required
        minlength="2"
        maxlength="200"
      />

      <p class="popup__line"></p>
      <span class="popup__input_type_error" id="description-error"></span>
      <button class="popup__button_disabled" type="submit" id="button">
        Guardar
      </button>
    </form>
  );
}
