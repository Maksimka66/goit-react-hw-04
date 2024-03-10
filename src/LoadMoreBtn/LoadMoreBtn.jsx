import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMore, currentPage, maxPhotos }) {
  const handleClick = () => {
    if (currentPage > maxPhotos) {
      return;
    }
    onLoadMore(currentPage + 1);
  };

  return (
    <button className={css.btnLoadMore} onClick={handleClick} type="button">
      Load more
    </button>
  );
}
