/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-empty-pattern
import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";

const todoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          TodoName={item.name}
          date={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default todoItems;
