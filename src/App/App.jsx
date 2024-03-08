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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (inputValue) => {
    try {
      setResponse([]);
      setError(false);
      setLoading(true);
      const request = await galleryRequest(inputValue);
      setResponse(request.results);
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
      <ImageGallery servResponse={response} />
      {response.length > 0 && <LoadMoreBtn />}
      <ImageModal />
    </>
  );
}

export default App;
