import SignIn from "./components/pages/SignIn";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./components/pages/SignUp";
import Main from "./components/pages/Main";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Edit from "./components/pages/Edit";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Container>
      <Wrapper>
        <Routes>
          <Route path="/*" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="edit" element={<Edit />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  background-color: #eee;
`;

const Wrapper = styled.div`
  width: 350px;

  background-color: #fff;
`;

export default App;
