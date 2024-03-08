import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import galleryRequest from "../articles-api";

import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <SearchBar onSubmit={galleryRequest} />
      <ImageGallery servResponse={response} />
    </>
  );
}

export default App;
