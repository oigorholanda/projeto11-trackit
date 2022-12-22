import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import trackit from "../assets/TrackIt.png";
import { darkBlue } from "../constants/colors";
import UserContext from "../contexts/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <DivHeader>
      <Link to={"/"}>
        <img src={trackit} alt="trackIt logo" />
      </Link>

      <ImgUser src={user.image ? user.image : "http://tny.im/ufP"} />
    </DivHeader>
  );
}

const DivHeader = styled.div`
  width: 100vw;
  height: 70px;
  padding: 12px;
  background-color: ${darkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const ImgUser = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 98.5px;
  object-fit: contain;
`;
