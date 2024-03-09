export default function LoadMoreBtn({ onLoadMore, hasMore, currentPage }) {
  const handleClick = () => {
    onLoadMore(currentPage + 1);
  };
  return (
    <button onClick={handleClick} disabled={!hasMore} type="button">
      Load more
    </button>
  );
}
