import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ servResponse, cardClick }) {
  return (
    <ul className={css.imageList}>
      {servResponse.map((photo) => (
        <li onClick={() => cardClick(photo)} key={photo.id}>
          <ImageCard
            path={photo.urls.small}
            description={photo.alt_description}
            cardClick={cardClick}
          />
        </li>
      ))}
    </ul>
  );
}
