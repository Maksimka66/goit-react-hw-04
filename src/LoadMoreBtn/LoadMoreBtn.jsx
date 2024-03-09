export default function LoadMoreBtn({ onLoadMore, hasMore, currentPage }) {
  const handleClick = () => {
    onLoadMore(currentPage + 1);
  };
  return (
    hasMore && (
      <button onClick={handleClick} type="button">
        Load more
      </button>
    )
  );
}
