export default function LoadMoreBtn({ onLoadMore, currentPage }) {
  const handleClick = () => {
    onLoadMore(currentPage + 1);
  };
  return (
    <button onClick={handleClick} type="button">
      Load more
    </button>
  );
}
