import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ servResponse, cardClick }) {
  return (
    <ul className={css.imageList}>
      {servResponse.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            path={photo.urls.small}
            secondPath={photo.urls.regular}
            description={photo.alt_description}
            cardClick={cardClick}
          />
        </li>
      ))}
    </ul>
  );
}
