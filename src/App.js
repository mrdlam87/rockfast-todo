import "./App.css";
import ModalOverlay from "./components/modal-overlay/modal-overlay.component";
import Modal from "./components/modal/modal.component";
import { TodoProvider } from "./contexts/todo.context";
import { UIProvider } from "./contexts/ui.context";
import { UserProvider } from "./contexts/user.context";
import Home from "./routes/home.component";

function App() {
  return (
    <UserProvider>
      <TodoProvider>
        <UIProvider>
          <Home />
          <Modal />
          <ModalOverlay />
        </UIProvider>
      </TodoProvider>
    </UserProvider>
  );
}

export default App;
