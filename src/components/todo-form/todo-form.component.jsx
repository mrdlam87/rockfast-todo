import { useContext, useState } from "react";
import { UIContext } from "../../contexts/ui.context";
import { UserContext } from "../../contexts/user.context";
import CheckInput from "../check-input/check-input.component";
import DatePicker from "../date-picker/date-picker.component";
import Form from "../form/form.component";
import TextInput from "../text-input/text-input.component";

const TodoForm = ({ user, todo, edit }) => {
  const { setModal } = useContext(UIContext);
  const { currentUserTodos, addUserTodo, updateUserTodo, deleteUserTodo } =
    useContext(UserContext);
  const [formData, setFormData] = useState({
    id: todo ? todo.id : currentUserTodos[currentUserTodos.length - 1].id + 1,
    userId: user.id,
    name: todo ? todo.name : "",
    dateCompleted: todo ? todo.dateCompleted : "",
    complete: todo ? todo.complete : false,
  });

  const onCancelHandler = () => {
    // DELETE
    if (edit) {
      deleteUserTodo(todo.id);
      console.log("DELETING: ", todo);
    }

    setModal(false);
  };
  const onAddHandler = () => {
    // POST
    if (!edit) {
      formData.dateCreated = Date.now();
      addUserTodo(formData);
      console.log("ADDING: ", formData);
    } else {
      // PUT
      todo.name = formData.name;
      todo.dateCompleted = formData.dateCompleted;
      todo.complete = formData.complete;
      updateUserTodo(todo);
      console.log("UPDATING: ", todo);
    }

    setModal(false);
  };
  const inputChangeHandler = (identifier, event) =>
    setFormData((currentData) => {
      return {
        ...currentData,
        [identifier]: event.target.value,
      };
    });

  return (
    <Form
      title={`${edit ? "Update" : "Add"} Todo`}
      edit={edit}
      onCancelClick={onCancelHandler}
      onCloseClick={() => setModal(false)}
      onAddClick={onAddHandler}
    >
      <CheckInput
        label="Completed"
        checked={formData.complete}
        // onChange={(e) =>
        //   setFormData((currentData) => {
        //     return { ...currentData, complete: e.target.checked };
        //   })
        // }
        onClick={() =>
          setFormData((currentData) => {
            return { ...currentData, complete: !formData.complete };
          })
        }
      />

      <TextInput
        label="Description"
        placeholderText="Enter Todo description"
        value={formData.name}
        onChange={inputChangeHandler.bind(this, "name")}
      />
      <DatePicker
        label="Date Completed"
        value={formData.dateCompleted ?? ""}
        onChange={inputChangeHandler.bind(this, "dateCompleted")}
      />
    </Form>
  );
};

export default TodoForm;
