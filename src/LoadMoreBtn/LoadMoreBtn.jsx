export default function LoadMoreBtn({ photos, perPage, changePage }) {
  const pagination = () => {
    const totalPages = Math.ceil(photos / perPage);
  };

  return (
    <button onClick={pagination} type="click">
      Load more
    </button>
  );
}
