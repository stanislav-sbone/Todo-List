import React from "react";
import { Button } from "antd";
import { CheckOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./Task.module.css";

function TodoItem(props) {
  const { id, text, isCompleted, removeTask, completeTask, editTodo } = props;

  return (
    <li
      className={
        isCompleted
          ? `${styles.todo_list__task} ${styles.task_done}`
          : styles.todo_list__task
      }
    >
      <p
        className={styles.todo_list__task_text}
        onClick={() => completeTask(id)}
      >
        {text}
      </p>
      <div className={styles.todo_list__task_buttons}>
        <EditOutlined
          title="Изменить"
          onClick={() => {
            editTodo(id);
          }}
          className={styles.todo_list__task_edit}
        />
        <Button onClick={() => completeTask(id)} color="green" variant="solid">
          <CheckOutlined />
        </Button>
        <Button onClick={() => removeTask(id)} color="danger" variant="solid">
          <DeleteOutlined onClick={() => removeTask(id)} />
        </Button>
      </div>
    </li>
  );
}

export default TodoItem;
