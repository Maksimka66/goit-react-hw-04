import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import galleryRequest from "../articles-api";

import { useState, useEffect } from "react";

import "./App.css";

function App() {
  return (
    <>
      <SearchBar onSubmit={galleryRequest} />
      <ImageGallery />
    </>
  );
}

export default App;
