import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ pictures, onClick }) {
  return (
    <ul>
      {pictures.map((picture) => {
        return (
          <li key={picture.id}>
            <ImageCard picture={picture} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}
