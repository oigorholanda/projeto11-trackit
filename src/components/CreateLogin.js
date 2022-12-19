import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { ligthBlue } from "../constants/colors";
import { base_url } from "../constants/urls";

export default function CreateLogin() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");

  function cadastrar(event) {
    event.preventDefault();
    setloading(true);

    {
      axios
        .post(`${base_url}/auth/sign-up`, {
          email: email,
          name: nome,
          image: foto,
          password: senha,
        })
        .then((res) => {
          console.log(res.data)
          navigate("/")
        })
        .catch((err) => {
          alert(`Erro no formulário. Por favor verifique os dados e tente novamente.`)
          console.log(err.data)
        });
    }

    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <>
      <Form onSubmit={cadastrar}>
        <img src={logo} alt="logo" />
        <input
          id="login"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
          required
        />
        <input
          id="name"
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          required
        />
        <input
          id="url"
          type="url"
          placeholder="Foto"
          onChange={(e) => setFoto(e.target.value)}
          value={foto}
        />

        <button type="submit">
          {!loading ? (
            "Cadastrar"
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
