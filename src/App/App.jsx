import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import galleryRequest from "../articles-api";

import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <SearchBar onSubmit={galleryRequest} />
    </>
  );
}

export default App;
