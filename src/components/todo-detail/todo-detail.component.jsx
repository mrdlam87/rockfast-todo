import "./todo-detail.style.scss";

const TodoDetail = ({ todo }) => {
  const { name } = todo;

  return <h2 className="todo-detail">{name}</h2>;
};

export default TodoDetail;
