import "./list-item.style.scss";

const ListItem = ({ item, isSelected, onClick }) => {
  const { name } = item;

  let selectedClassName = isSelected ? "selected" : "";

  return (
    <h3 className={`list-item ${selectedClassName}`} onClick={onClick}>
      {name}
    </h3>
  );
};

export default ListItem;
