import React from "react";
import styles from "./TodoForm.module.css";

function TodoForm(props) {
  const { addTask } = props;
  return (
    <form
      className={styles.todo_list__form}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        className={styles.todo_list__input}
        id="todo-list__input"
        type="text"
        placeholder="Введите задачу"
      />
      <button className={styles.todo_list__btn} type="submit" onClick={addTask}>
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
