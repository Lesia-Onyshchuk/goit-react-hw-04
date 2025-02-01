import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ pictures }) {
  return (
    <ul>
      {pictures.map((picture) => {
        return (
          <li key={picture.id}>
            <ImageCard picture={picture} />
          </li>
        );
      })}
    </ul>
  );
}
