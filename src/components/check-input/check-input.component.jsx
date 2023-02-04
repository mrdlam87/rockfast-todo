import "./check-input.style.scss";
import { IoCheckbox, IoSquareOutline } from "react-icons/io5";

const CheckInput = ({ label, checked, onClick, onChange }) => {
  return (
    <div className="check-input" onClick={onClick}>
      {/* <input type="checkbox" onChange={onChange} checked={checked} /> */}
      {checked ? (
        <IoCheckbox className="check-icon" />
      ) : (
        <IoSquareOutline className="check-icon" />
      )}
      {label && <label>{label}</label>}
    </div>
  );
};

export default CheckInput;
