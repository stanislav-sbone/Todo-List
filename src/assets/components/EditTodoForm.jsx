import React, { useState } from "react";
import styles from "./EditTodoForm.module.css";

function EditTodoForm({ todo, editText }) {
  const [value, setValue] = useState(todo.text);

  return (
    <form
      className={styles.todo_list__form_edit}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        className={styles.todo_list__input_edit}
        type="text"
        value={value}
        onChange={(elem) => setValue(elem.target.value)}
        placeholder="Изменить задачу"
      />
      <button
        className={styles.todo_list__btn_edit}
        type="submit"
        onClick={() => {
          editText(value, todo.id);
        }}
      >
        Изменить
      </button>
    </form>
  );
}

export default EditTodoForm;
