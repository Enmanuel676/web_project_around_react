export default function Popup(props) {
  const { title, children } = props;
  return (
    <div className="popup" id="edit">
      <button className="popup__exit"></button>
      <form className="popup__form popup__form_edit" id="form">
        <h2 className="popup__form_title">{title}</h2>
        {children}
      </form>
    </div>
  );
}
