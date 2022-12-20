import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CreateLogin from "./components/CreateLogin";
import Login from "./components/Login";
import HabitList from "./components/HabitList";
import Today from "./components/Today";
import Historic from "./components/Historic";
import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";
import PercentageContext from "./contexts/PercentageContext"
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [percentage, setPercentage] = useState(66);

  return (
    <ContainerApp>
      <UserContext.Provider value={{ user, setUser }}>
        <AuthContext.Provider value={{ token, setToken }}>
          <PercentageContext.Provider value={{ percentage, setPercentage }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<CreateLogin />} />
                <Route path="/habitos" element={<HabitList />} />
                <Route path="/hoje" element={<Today />} />
                <Route path="/historico" element={<Historic />} />
              </Routes>
            </BrowserRouter>
          </PercentageContext.Provider>
        </AuthContext.Provider>
      </UserContext.Provider>
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
  max-width: 375px;
`;
