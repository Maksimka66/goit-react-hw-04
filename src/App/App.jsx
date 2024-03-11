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
  const [selectedImage, setSelectedImage] = useState(null);
  const [maxPhotos, setMaxPhotos] = useState(null);

  const handleSearch = async (inputValue) => {
    if (inputValue.trim() === "") {
      setResponse([]);
      return;
    }
    setQuery(inputValue);
    setResponse([]);
    setModal(false);
    setError(false);
    setPage(1);
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
        setMaxPhotos(request.total);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModal(true);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery servResponse={response} cardClick={handleImageClick} />
      {response.length > 0 && response.length < maxPhotos && (
        <LoadMoreBtn onLoadMore={handleClick} currentPage={page} />
      )}
      {loading && <Loader />}
      <ImageModal
        modalIsOpen={modal}
        setIsOpen={setModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
