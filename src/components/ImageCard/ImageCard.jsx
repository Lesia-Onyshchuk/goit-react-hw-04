export default function ImageCard({ picture }) {
  return (
    <div>
      <img
        src={picture.urls.small}
        alt={picture.alt_description || "No description"}
      />
    </div>
  );
}
