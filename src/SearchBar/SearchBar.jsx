import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const submitForm = (e) => {
    e.preventDefault();
    if (e.target.elements.search.value.trim() === "") {
      return (
        <div>
          {toast.error("All fields must be filled!")}
          <Toaster />
        </div>
      );
    }
    onSubmit(e.target.elements.search.value.trim());
    e.currentTarget.reset();
  };

  return (
    <header>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
