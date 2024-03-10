import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMore, currentPage }) {
  const handleClick = () => {
    onLoadMore(currentPage + 1);
  };
  return (
    <button className={css.btnLoadMore} onClick={handleClick} type="button">
      Load more
    </button>
  );
}
