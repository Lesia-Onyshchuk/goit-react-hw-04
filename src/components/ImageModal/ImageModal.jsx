import Modal from "react-modal";

export default function ImageModal({ isOpen, closeModal, selectedImage }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  if (!selectedImage) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={customStyles}
      overlayClassName="Overlay"
    >
      <h2>{selectedImage.alt_description || "Image"}</h2>
      <img
        src={selectedImage.urls.regular}
        alt={selectedImage.alt_description}
        style={{ width: "100%", height: "auto" }}
      />
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}
