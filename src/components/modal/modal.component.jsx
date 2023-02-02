import { useContext } from "react";
import { UIContext } from "../../contexts/ui.context";
import "./modal.style.scss";

const Modal = () => {
  const { isModalOpen } = useContext(UIContext);

  return (
    <div className={`modal-container ${isModalOpen ? "" : "hidden"}`}>
      <h2>MODAL</h2>
    </div>
  );
};

export default Modal;
