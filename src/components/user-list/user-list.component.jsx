import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import UserDetail from "../user-detail/user-detail.component";
import "./user-list.style.scss";
import { IoAddCircle } from "react-icons/io5";

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="user-list">
      <div className="title-bar">
        <h1>USERS</h1>
        <IoAddCircle className="title-icon" />
      </div>
      {users.map((user) => (
        <UserDetail key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
