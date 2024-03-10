import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import Modal from "react-modal";
import galleryRequest from "../articles-api";

import { useState, useEffect } from "react";

import "./App.css";

Modal.setAppElement("#root");

function App() {
  const [response, setResponse] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (inputValue) => {
    setQuery(inputValue);
    setResponse([]);
    setModal(false);
    setError(false);
  };

  const handleClick = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    const fetchImages = async () => {
      if (!query) {
        return;
      }

      try {
        setLoading(true);
        const request = await galleryRequest(query, page);
        setResponse((prevResponse) => [...prevResponse, ...request.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery servResponse={response} cardClick={setModal} />
      {response.length > 0 && (
        <LoadMoreBtn onLoadMore={handleClick} currentPage={page} />
      )}
      {loading && <Loader />}
      <ImageModal open={modal} setOpen={setModal} />
    </>
  );
}

export default App;
