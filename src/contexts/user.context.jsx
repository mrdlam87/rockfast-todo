import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  users: [],
  currentUser: null,
  setCurrentUser: () => {},
  currentUserTodos: [],
});

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserTodos, setCurrentUserTodos] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5086/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUserTodos = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5086/users/${currentUser.id}/todos`
        );
        setCurrentUserTodos(response.data);
      } catch (error) {
        console.log("Failed to fetch users");
      }
    };

    fetchUserTodos();
  }, [currentUser]);

  const value = {
    users,
    currentUser,
    setCurrentUser,
    currentUserTodos,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
