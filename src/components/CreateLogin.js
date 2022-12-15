import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png"
import { ligthBlue } from "../constants/colors";

export default function CreateLogin() {
    return (
        <>
            <Form>
                <img src={logo} alt="logo" />
                <input id="login" type="email" placeholder="Email" required />
                <input id="password" type="password" placeholder="Senha" required />
                <input id="name" type="text" placeholder="Nome" required />
                <input id="url" type="photo" placeholder="Foto" />

                <button type="submit">Cadastrar</button><br/>

                <Link to="/">
                    <p href="">Já tem uma conta? Faça o Login!</p>
                </Link>

            </Form>
        </>
    )
}

const Form = styled.form`
    width: 303px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    margin: 90px auto;
    
    input {
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        &::placeholder {
        font-size: 15px;
        color: #DBDBDB;
        }
    }
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
    }
    p{
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: ${ligthBlue};  
    }

    

`