import "./form.style.scss";

const Form = ({ title, titleItem, children, onCancelClick, onAddClick }) => {
  return (
    <div className="form">
      <div className="form-title">
        <h2>{title}</h2>
        {titleItem}
      </div>
      <div className="form-body">{children}</div>
      <div className="form-footer">
        <button className="clear-btn" onClick={onCancelClick}>
          CANCEL
        </button>
        <button className="submit-btn" onClick={onAddClick}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default Form;
