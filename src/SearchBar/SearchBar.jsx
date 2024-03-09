import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const submitForm = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value;
    if (inputValue.trim() === "") {
      toast.error("All fields must be filled!");
      return;
    }
    onSubmit(inputValue.trim());
    e.currentTarget.reset();
  };

  return (
    <div className={css.containerForm}>
      <header className={css.headerForm}>
        <form className={css.form} onSubmit={submitForm}>
          <input
            className={css.inputForm}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.submitBtn} type="submit">
            Search
          </button>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </header>
    </div>
  );
}
