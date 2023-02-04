import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  users: [],
  currentUser: null,
  currentUserTodos: [],
};

const ACTION_TYPES = {
  SET_USERS: "SET_USERS",
  ADD_USER: "ADD_USER",
  UPDATE_USER: "UPDATE_USER",
  DELETE_USER: "DELETE_USER",
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_CURRENT_USER_TODOS: "SET_CURRENT_USER_TODOS",
  ADD_USER_TODO: "ADD_USER_TODO",
  UPDATE_USER_TODO: "UPDATE_USER_TODO",
  DELETE_USER_TODO: "DELETE_USER_TODO",
};

const usersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_USERS:
      return {
        ...state,
        users: payload,
      };
    case ACTION_TYPES.ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case ACTION_TYPES.UPDATE_USER:
      const userIndex = state.users.findIndex((td) => td.id === payload.id);
      const updatedUser = {
        ...state.users[userIndex],
        ...payload,
      };
      const updatedUsers = [...state.users];
      updatedUsers[userIndex] = updatedUser;
      return {
        ...state,
        users: updatedUsers,
      };
    case ACTION_TYPES.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((us) => us.id !== payload),
      };

    case ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case ACTION_TYPES.SET_CURRENT_USER_TODOS:
      return {
        ...state,
        currentUserTodos: payload,
      };
    case ACTION_TYPES.ADD_USER_TODO:
      return {
        ...state,
        currentUserTodos: [payload, ...state.currentUserTodos],
      };
    case ACTION_TYPES.UPDATE_USER_TODO:
      const todoIndex = state.currentUserTodos.findIndex(
        (td) => td.id === payload.id
      );
      const updatedTodo = {
        ...state.currentUserTodos[todoIndex],
        ...payload,
      };
      const updatedUserTodos = [...state.currentUserTodos];
      updatedUserTodos[todoIndex] = updatedTodo;
      return {
        ...state,
        currentUserTodos: updatedUserTodos,
      };
    case ACTION_TYPES.DELETE_USER_TODO:
      return {
        ...state,
        currentUserTodos: state.currentUserTodos.filter(
          (td) => td.id !== payload
        ),
      };

    default:
      return state;
  }
};

export const UserContext = createContext({
  users: [],
  setUsers: () => {},
  addUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  currentUserTodos: [],
  setCurrentUserTodos: () => {},
  addUserTodo: () => {},
  updateUserTodo: () => {},
  deleteUserTodo: () => {},
});

export const UserProvider = ({ children }) => {
  const [{ users, currentUser, currentUserTodos }, dispatch] = useReducer(
    usersReducer,
    INITIAL_STATE
  );

  const setUsers = (users) =>
    dispatch({ type: ACTION_TYPES.SET_USERS, payload: users });

  const addUser = (user) =>
    dispatch({ type: ACTION_TYPES.ADD_USER, payload: user });

  const updateUser = (user) =>
    dispatch({ type: ACTION_TYPES.UPDATE_USER, payload: user });

  const deleteUser = (id) =>
    dispatch({ type: ACTION_TYPES.DELETE_USER, payload: id });

  const setCurrentUser = (user) =>
    dispatch({ type: ACTION_TYPES.SET_CURRENT_USER, payload: user });

  const setCurrentUserTodos = (todos) =>
    dispatch({ type: ACTION_TYPES.SET_CURRENT_USER_TODOS, payload: todos });

  const addUserTodo = (todo) =>
    dispatch({ type: ACTION_TYPES.ADD_USER_TODO, payload: todo });

  const updateUserTodo = (todo) =>
    dispatch({ type: ACTION_TYPES.UPDATE_USER_TODO, payload: todo });

  const deleteUserTodo = (id) =>
    dispatch({ type: ACTION_TYPES.DELETE_USER_TODO, payload: id });

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
        console.log("Failed to fetch todos");
      }
    };

    fetchUserTodos();
  }, [currentUser]);

  const value = {
    users,
    setUsers,
    addUser,
    updateUser,
    deleteUser,
    currentUser,
    setCurrentUser,
    currentUserTodos,
    setCurrentUserTodos,
    addUserTodo,
    updateUserTodo,
    deleteUserTodo,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
