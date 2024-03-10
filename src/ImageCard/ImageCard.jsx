import css from "./ImageCard.module.css";

export default function ImageCard({
  path,
  description,
  secondPath,
  cardClick,
}) {
  return (
    <div className={css.cardContainer}>
      <img
        className={css.photo}
        src={path}
        alt={description}
        onClick={() => cardClick(secondPath)}
      />
    </div>
  );
}
