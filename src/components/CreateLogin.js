import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { ligthBlue } from "../constants/colors";

export default function CreateLogin() {
  const navigate = useNavigate()
  const [loading, setloading] = useState(false)

  function cadastrar() {
    setloading(true)
    setTimeout(() => {
      navigate("/")
    }, 1000);

  }

  return (
    <>
      <Form>
        <img src={logo} alt="logo" />
        <input id="login" type="email" placeholder="Email" required />
        <input id="password" type="password" placeholder="Senha" required />
        <input id="name" type="text" placeholder="Nome" required />
        <input id="url" type="url" placeholder="Foto" />

        <button type="submit" onClick={cadastrar}>
        {!loading ? "Cadastrar" : 
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="white" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{marginTop:-15, marginLeft: 100}}
        wrapperClassName=""
        visible={true}
        />}
        </button>

        <Link to="/">
          <p href="">Já tem uma conta? Faça o Login!</p>
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
