import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CreateLogin from "./components/CreateLogin";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<CreateLogin />} />
          <Route path="/habitos" element={<Main />} />
          <Route path="/hoje" />
          <Route path="/historico" />
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
  max-width: 375px;
`;
