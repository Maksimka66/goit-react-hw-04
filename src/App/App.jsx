import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import galleryRequest from "../articles-api";

import { useState } from "react";

import "./App.css";

function App() {
  const [response, setResponse] = useState([]);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (inputValue) => {
    try {
      setResponse([]);
      setModal(false);
      setError(false);
      setLoading(true);
      const request = await galleryRequest(inputValue, page);
      setResponse(request.results);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery servResponse={response} cardClick={setModal} />
      {response.length > 0 && (
        <LoadMoreBtn
          onLoadMore={handleSearch}
          hasMore={true}
          currentPage={page}
        />
      )}
      <ImageModal open={modal} setOpen={setModal} />
    </>
  );
}

export default App;
