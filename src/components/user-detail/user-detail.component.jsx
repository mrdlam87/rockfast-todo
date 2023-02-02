import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import "./user-detail.style.scss";

const UserDetail = ({ user }) => {
  const { name } = user;
  const { currentUser, setCurrentUser } = useContext(UserContext);

  let selectedClassName = currentUser === user ? "user-selected" : "";

  const clickHandler = () => setCurrentUser(user);

  return (
    <h2 className={`user-detail ${selectedClassName}`} onClick={clickHandler}>
      {name}
    </h2>
  );
};

export default UserDetail;
