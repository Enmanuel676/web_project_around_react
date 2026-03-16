function NewCard() {
  return (
    <form class="popup__form popup__form_cards" id="cards">
      <h2 class="popup__form_title">Nueva Trajeta</h2>
      <input
        type="text"
        name="title"
        id="title"
        class="popup__input"
        placeholder="Título"
        required
        minlength="2"
        maxlength="30"
      />
      <p class="popup__line"></p>
      <span class="popup__input_type_error" id="title-error"></span>
      <input
        type="url"
        name="url"
        id="url"
        class="popup__input popup__input_content"
        placeholder="URL"
        required
      />
      <p class="popup__line"></p>
      <span class="popup__input_type_error" id="url-error"></span>
      <button class="popup__button" type="submit" id="save">
        Crear
      </button>
    </form>
  );
}
export default NewCard;
