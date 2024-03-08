export default function ImageCard({ path, description }) {
  return (
    <div>
      <img src={path} alt={description} />
    </div>
  );
}
