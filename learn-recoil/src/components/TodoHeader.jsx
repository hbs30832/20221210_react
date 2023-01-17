import { useSelector } from "react-redux";
import { useRecoilValue } from "recoil";
import { countState, undoneCountState } from "../state/todos";
import {
  getDoneCount,
  getPercentage,
  getUndoneCount,
  getUndoneCount02,
} from "../state/todos_redux";

function TodoHeader() {
  const count = useSelector(getDoneCount);
  const undoneCount = useSelector(getUndoneCount02);
  const percentage = useSelector(getPercentage);

  return (
    <div>
      <p>2023년 01월 14일</p>
      <p>
        할일 : {undoneCount} / {count} ({percentage}%)
      </p>
    </div>
  );
}

export default TodoHeader;
