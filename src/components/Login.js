import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { ligthBlue } from "../constants/colors";
import { ThreeDots } from "react-loader-spinner";
import { useContext, useState } from "react";
import axios from "axios";
import { base_url } from "../constants/urls";
import UserContext from "../contexts/UserContext";
import AuthContext from "../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const {setUser} = useContext(UserContext)
  const {setToken} = useContext(AuthContext)

  function logar(event) {
    event.preventDefault();
    setloading(true);

    {
      axios
        .post(`${base_url}/auth/login`, {
          email: email,
          password: senha,
        })
        .then((res) => {
          console.log(res.data);
          setUser(res.data)
          setToken(res.data.token);
          navigate("/hoje");
        })
        .catch((err) => {
          console.log(err.response);
          alert(err.response.data.message)
          setloading(false)
        });
    }
  }

  return (
    <>
      <Form onSubmit={logar}>
        <img src={logo} alt="logo" />
        <input
          id="login"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={loading}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
          disabled={loading}
          required
        />

        <button type="submit" disabled={loading} >
          {!loading ? (
            "Entrar"
          ) : (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ marginTop: -15, marginLeft: 100 }}
              wrapperClassName=""
              visible={true}
            />
          )}
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
