import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { users } from "./Hello";

function Detail() {
  const { userId } = useParams();

  const user = users.find((user) => user.id === parseInt(userId));

  console.log(user);
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
    </div>
  );
}

export default Detail;
