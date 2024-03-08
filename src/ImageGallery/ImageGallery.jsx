import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ servResponse }) {
  return (
    <ul>
      {servResponse.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            path={photo.urls.small}
            description={photo.alt_description}
          />
        </li>
      ))}
    </ul>
  );
}
