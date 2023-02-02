import "./App.css";
import { TodoProvider } from "./contexts/todo.context";
import { UserProvider } from "./contexts/user.context";
import Home from "./routes/home.component";

function App() {
  return (
    <UserProvider>
      <TodoProvider>
        <Home />
      </TodoProvider>
    </UserProvider>
  );
}

export default App;
