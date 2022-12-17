import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CreateLogin from "./components/CreateLogin";
import Login from "./components/Login";
import Habits from "./components/Habits";
import Today from "./components/Today";
import Historic from "./components/Historic";

function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<CreateLogin />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />}/>
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
  max-width: 375px;
`;
