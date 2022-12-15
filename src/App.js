import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateLogin from "./components/CreateLogin";
import Login from "./components/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<CreateLogin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
