function EditAvatar() {
  return (
    <form class="edit__avatar-form" type="submit">
      <h3 class="edit__avatar-title">Cambiar foto de perfil</h3>
      <input
        class="edit__avatar-input"
        placeholder="Ingrese la URL"
        value=""
        id="avatar"
      />
      <button class="edit__avatar-button">Guardar</button>
    </form>
  );
}
export default EditAvatar;
