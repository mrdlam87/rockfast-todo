import "./check-input.style.scss";

const CheckInput = ({ label, checked, onChange }) => {
  return (
    <div className="check-input">
      <label>{label}</label>
      <input type="checkbox" onChange={onChange} checked={checked} />
    </div>
  );
};

export default CheckInput;
