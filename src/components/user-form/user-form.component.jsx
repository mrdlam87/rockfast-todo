import { useContext, useState } from "react";
import { UIContext } from "../../contexts/ui.context";
import { UserContext } from "../../contexts/user.context";
import Form from "../form/form.component";
import TextInput from "../text-input/text-input.component";

const UserForm = ({ user, edit }) => {
  const { setModal } = useContext(UIContext);
  const { users, addUser, updateUser, deleteUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    id: user ? user.id : users[users.length - 1].id + 1,
    name: user ? user.name : "",
  });

  const onCancelHandler = () => {
    // DELETE
    if (edit) {
      deleteUser(user.id);
      console.log("DELETING: ", user);
    }

    setModal(false);
  };
  const onAddHandler = () => {
    // POST
    if (!edit) {
      addUser(formData);
      console.log("ADDING: ", formData);
    } else {
      // PUT
      user.name = formData.name;
      updateUser(user);
      console.log("UPDATING: ", user);
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
      title={`${edit ? "Update" : "Add"} User`}
      edit={edit}
      onCancelClick={onCancelHandler}
      onCloseClick={() => setModal(false)}
      onAddClick={onAddHandler}
    >
      <TextInput
        label="Full Name"
        placeholderText="Enter full name"
        value={formData.name}
        onChange={inputChangeHandler.bind(this, "name")}
      />
    </Form>
  );
};

export default UserForm;
