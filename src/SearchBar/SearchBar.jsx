import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const submitForm = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value;
    if (inputValue.trim() === "") {
      return (
        <div>
          {toast.error("All fields must be filled!")}
          <Toaster />
        </div>
      );
    }
    onSubmit(inputValue.trim());
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
