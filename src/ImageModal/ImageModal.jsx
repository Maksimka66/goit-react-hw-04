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

export default function ImageModal({ modalIsOpen, setIsOpen, img }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
    >
      {img && <img src={img} alt="Selected" />}
    </Modal>
  );
}
