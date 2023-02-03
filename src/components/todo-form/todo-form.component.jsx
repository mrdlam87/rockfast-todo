import { useContext, useState } from "react";
import { UIContext } from "../../contexts/ui.context";
import CheckInput from "../check-input/check-input.component";
import DatePicker from "../date-picker/date-picker.component";
import Form from "../form/form.component";
import TextInput from "../text-input/text-input.component";

const TodoForm = ({ user }) => {
  const { setModal } = useContext(UIContext);
  const [formData, setFormData] = useState({
    userId: user.id,
    name: "",
    dateCompleted: "",
    complete: false,
  });

  const onCancelHandler = () => setModal(false);
  const onAddHandler = async () => {
    console.log(formData);
  };
  const inputChangeHandler = (identifier, event) =>
    setFormData((currentData) => {
      return {
        ...currentData,
        [identifier]: event.target.value,
      };
    });

  const checkBox = (
    <CheckInput
      label="Completed"
      checked={formData.complete}
      onChange={(e) =>
        setFormData((currentData) => {
          return { ...currentData, complete: e.target.checked };
        })
      }
    />
  );

  return (
    <Form
      title="Add Todo"
      titleItem={checkBox}
      onCancelClick={onCancelHandler}
      onAddClick={onAddHandler}
    >
      <TextInput
        label="Description"
        placeholderText="Enter Todo description"
        value={formData.name}
        onChange={inputChangeHandler.bind(this, "name")}
      />
      <DatePicker
        label="Date Completed"
        value={formData.dateCompleted}
        onChange={inputChangeHandler.bind(this, "dateCompleted")}
      />
    </Form>
  );
};

export default TodoForm;
