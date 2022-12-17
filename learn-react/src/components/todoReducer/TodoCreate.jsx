import { useInputs02 } from "../../hooks/useInputs";
import { useTodoState } from "../../contexts/todos";
import { useRef } from "react";

function TodoCreate() {
  const nextId = useRef(4);

  const dispatch = useTodoState();

  // const [inputs, inputDispatch] = useInputs({
  //   text: "",
  // });

  const [inputs, onChange, reset] = useInputs02({
    text: "",
  });

  const onCreate = () => {
    dispatch({ type: "CREATE_TODO", text: inputs.text, id: nextId.current });
    nextId.current++;
    reset();
  };

  return (
    <form
      onSubmit={(e) => {
        // form태그의 onSubmit 새로고침 방지
        e.preventDefault();
        onCreate();
      }}
    >
      <input type="text" name="text" onChange={onChange} value={inputs.text} />
      <button>등록</button>
    </form>
  );
}

export default TodoCreate;
