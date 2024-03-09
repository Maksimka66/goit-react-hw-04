import ImageCard from "../ImageCard/ImageCard";
import Modal from "react-modal";

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

Modal.setAppElement(ImageCard);

export default function ImageModal({ open, setOpen }) {
  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <Modal isOpen={open} style={customStyles} onRequestClose={closeModal} />
  );
}
