import { useTodoState } from "../../contexts/todos";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useTodoState();

  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

export default TodoList;
