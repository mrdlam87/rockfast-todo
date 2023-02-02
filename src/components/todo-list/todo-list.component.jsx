import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import TodoDetail from "../todo-detail/todo-detail.component";
import "./todo-list.style.scss";
import { IoAddCircle } from "react-icons/io5";
import { UIContext } from "../../contexts/ui.context";

const TodoList = () => {
  const { currentUserTodos } = useContext(UserContext);
  const { setModal } = useContext(UIContext);

  const addClickHandler = () => {
    console.log("click");
    setModal(true);
  };

  return (
    <div className="todo-list">
      <div className="title-bar">
        <h1>TODOS</h1>
        <IoAddCircle className="title-icon" onClick={addClickHandler} />
      </div>
      {currentUserTodos.map((todo) => (
        <TodoDetail key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
