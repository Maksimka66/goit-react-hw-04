import Modal from "react-modal";

import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "",
  },
};

export default function ImageModal({ modalIsOpen, setIsOpen, image }) {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
    >
      {image && image.urls && image.urls.regular && (
        <img
          className={css.modalImage}
          src={image.urls.regular}
          alt={image.description}
        />
      )}
    </Modal>
  );
}
