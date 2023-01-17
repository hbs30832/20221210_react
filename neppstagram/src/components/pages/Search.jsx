import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { searchUser } from "../../api/admin";
import UserInfo from "../common/UserInfo";
import { Input } from "../common/input";
import useDebounce from "../../hook/useDebounce";

function Search() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  const debounceSearch = useDebounce(input, 300);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      if (input === "") return;

      console.log(input);
      const data = await searchUser(debounceSearch);

      console.log(data);

      setUsers(data.data);
    };

    fetchUsers();
  }, [debounceSearch]);

  return (
    <Container>
      <InputBox>
        <Input
          type="text"
          placeholder="이름을 입력해주세요."
          onChange={handleInput}
        />
      </InputBox>

      <UserList>
        {users.map((user) => (
          <UserItem key={user.id}>
            <UserInfo user={user} key={user.id} />
          </UserItem>
        ))}
      </UserList>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  padding: 5px 10px;
`;

const UserList = styled.ul`
  flex: 1;
  overflow-y: auto;
`;

const UserItem = styled.li`
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

export default Search;
