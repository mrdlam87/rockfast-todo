import { useContext } from "react";
import { UIContext } from "../../contexts/ui.context";
import "./modal-overlay.style.scss";

const ModalOverlay = () => {
  const { isModalOpen, setModal } = useContext(UIContext);

  const clickHandler = () => setModal(false);

  return (
    <div
      className={`modal-overlay ${isModalOpen ? "" : "hidden"}`}
      onClick={clickHandler}
    />
  );
};

export default ModalOverlay;
