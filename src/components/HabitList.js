import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { backgroundColor, darkBlue, ligthBlue } from "../constants/colors";
import { base_url } from "../constants/urls";
import AuthContext from "../contexts/AuthContext";
import UserContext from "../contexts/UserContext";
import Footer from "./Footer";
import Header from "./Header";
import NewHabit from "./NewHabit";

export default function HabitList() {
  const [plus, setPlus] = useState(false);
  const { user } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${base_url}/habits`, config)
      .then((res) => {
        console.log("Chegaram os dados")
        console.log(res.data)
        setHabits(res.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
        console.log(err.response)
      })
  }, []);

  function newHabit() {
    setPlus(true);
  }

  return (
    <>
      <Header />
      <ContainerBody>
        <HabitsTitle>
          <h3>Meus Hábitos</h3>
          <div onClick={newHabit}>+</div>
        </HabitsTitle>

        {plus && <NewHabit plus={plus} setPlus={setPlus} />}
        {/* map do Myhabits */}
        <p>
          {user.name ? `${user.name}, v` : "V"}ocê não tem nenhum hábito
          cadastrado ainda. Adicione um hábito para começar a trackear!
        </p>
      </ContainerBody>

      <Footer />
    </>
  );
}

const ContainerBody = styled.div`
  width: 100vw;
  min-height: 560px;
  margin: 70px auto;
  padding: 20px;
  background-color: ${backgroundColor};
  p {
    margin: 30px 0px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

const HabitsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${darkBlue};
  font-size: 23px;
  margin-bottom: 20px;
  div {
    width: 40px;
    height: 33px;
    color: white;
    font-size: 27px;
    background-color: ${ligthBlue};
    text-align: center;
    border-radius: 4.63636px;
  }
`;
