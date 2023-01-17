import { useSelector } from "react-redux";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterdTodosState, filterState } from "../state/todos";
import TodoItem from "./TodoItem";

function TodoBody() {
  // const todos = useRecoilValue(filterdTodosState);
  // const setFilterState = useSetRecoilState(filterState);

  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {/* <label htmlFor="done">
        done
        <input
          type="radio"
          name="done"
          id="done"
          value="done"
          onChange={(e) => setFilterState(e.target.value)}
          defaultChecked
        />
      </label>
      <label htmlFor="undone">
        undone
        <input
          type="radio"
          name="done"
          id="undone"
          value="undone"
          onChange={(e) => setFilterState(e.target.value)}
        />
      </label> */}

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoBody;
