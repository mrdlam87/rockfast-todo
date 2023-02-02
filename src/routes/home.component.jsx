import TodoList from "../components/todo-list/todo-list.component";
import UserList from "../components/user-list/user-list.component";

const Home = () => {
  return (
    <div className="container padding-top-md grid grid--2-cols">
      <UserList />
      <TodoList />
    </div>
  );
};

export default Home;
