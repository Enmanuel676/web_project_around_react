export default function Card({ card, onImageClick }) {
  const { name, link, isLiked } = card;

  return (
    <div className="grid__card">
      <div className="card__image">
        <button
          aria-label="Delete card"
          className="card__delete"
          type="button"
        />
        <img
          src={link}
          alt={name}
          className="grid__image"
          onClick={() => onImageClick(card)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <h3 className="grid__name">{name}</h3>
      <button
        aria-label="Like card"
        type="button"
        className={`grid__like${isLiked ? " grid__like_active" : ""}`}
      />
    </div>
  );
}
