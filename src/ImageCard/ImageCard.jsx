import css from "./ImageCard.module.css";

export default function ImageCard({ path, description }) {
  return (
    <div className={css.cardContainer}>
      <img className={css.photo} src={path} alt={description} />
    </div>
  );
}
