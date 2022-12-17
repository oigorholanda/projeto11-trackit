import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { ligthBlue } from "../constants/colors";

export default function Login() {
  const navigate = useNavigate();

  function logar() {
    navigate("/habitos");
  }

  return (
    <>
      <Form>
        <img src={logo} alt="logo" />
        <input id="login" type="email" placeholder="Email" required />
        <input id="password" type="password" placeholder="Senha" required />

        <button type="submit" onClick={logar}>
          Entrar
        </button>

        <Link to="/cadastro">
          <p href="">Não tem uma conta? Cadastre-se!</p>
        </Link>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin: 90px auto;
  button {
    color: white;
    width: 100%;
    height: 45px;
    border: none;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    background: ${ligthBlue};
    border-radius: 4.63636px;
    margin-bottom: 15px;
  }
  p {
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: ${ligthBlue};
  }
`;
