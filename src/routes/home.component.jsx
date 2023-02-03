import { useContext } from "react";
import ListCard from "../components/list-card/list-card.component";
import ListItem from "../components/list-item/list-item.component";
import ModalOverlay from "../components/modal-overlay/modal-overlay.component";
import Modal from "../components/modal/modal.component";
import TodoForm from "../components/todo-form/todo-form.component";
import { UIContext } from "../contexts/ui.context";
import { UserContext } from "../contexts/user.context";

const Home = () => {
  const { users, currentUser, setCurrentUser, currentUserTodos } =
    useContext(UserContext);
  const { isModalOpen, setModal } = useContext(UIContext);
  const todoAddClick = () =>
    currentUser !== null ? setModal(true) : alert("Please select a user");

  return (
    <>
      <ModalOverlay show={isModalOpen} onClick={() => setModal(false)} />
      <Modal show={isModalOpen}>
        {currentUser && <TodoForm user={currentUser} />}
      </Modal>
      <div className="container padding-top-md grid grid--2-cols">
        <ListCard title="Users">
          {users.map((user) => (
            <ListItem
              item={user}
              key={user.id}
              isSelected={user === currentUser}
              onClick={() => setCurrentUser(user)}
            />
          ))}
        </ListCard>
        <ListCard title="Todos" onAddClick={todoAddClick}>
          {currentUserTodos.map((todo) => (
            <ListItem item={todo} key={todo.id} />
          ))}
        </ListCard>
      </div>
    </>
  );
};

export default Home;
