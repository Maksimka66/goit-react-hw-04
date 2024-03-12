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

Modal.setAppElement("#root");

export default function ImageModal({ modalIsOpen, setIsOpen, image }) {
  function closeModal() {
    setIsOpen(false);
  }
  console.log(image);
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
    >
      {modalIsOpen && (
        <img className={css.modalImage} src={image} alt={image.description} />
      )}
    </Modal>
  );
}
