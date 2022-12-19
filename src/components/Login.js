import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { ligthBlue } from "../constants/colors";
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../constants/urls";


export default function Login() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false)
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar() {
    setloading(true)

    {
      axios
        .post(`${base_url}/auth/login`, {
          email: email,
          password: senha,
        })
        .then((res) => {
          console.log(res.data)
          navigate("/hoje")
        })
        .catch((err) => {
          console.log(err.data)
        });
    }


    // setTimeout(() => {
    //   navigate("/hoje")
    // }, 1000); ;
  }

  return (
    <>
      <Form onSubmit={logar}>
        <img src={logo} alt="logo" />
        <input id="login" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
          value={email} required />
        <input id="password" type="password" placeholder="Senha" required />

        <button type="submit" onClick={logar}>
          {!loading ? "Entrar" : 
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
