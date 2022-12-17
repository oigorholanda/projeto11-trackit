import { Link } from "react-router-dom";
import styled from "styled-components";
import trackit from "../assets/TrackIt.png";
import { darkBlue } from "../constants/colors";

export default function Header() {
  return (
    <DivHeader>
      <Link to={"/"}>
        <img src={trackit} alt="trackIt logo" />
      </Link>

      <ImgUser src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f60c6d7-d296-4413-96fa-4270a5e65041/df68se5-8e4ce224-2b91-4142-969d-ee2f6efd98bf.png/v1/fill/w_343,h_350,strp/son_goku__whis_uniform__render_1_by_mentos1800_df68se5-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA1IiwicGF0aCI6IlwvZlwvN2Y2MGM2ZDctZDI5Ni00NDEzLTk2ZmEtNDI3MGE1ZTY1MDQxXC9kZjY4c2U1LThlNGNlMjI0LTJiOTEtNDE0Mi05NjlkLWVlMmY2ZWZkOThiZi5wbmciLCJ3aWR0aCI6Ijw9NDk1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.CHU7_3--r5HR1NYGchhFvMUUHb9KOzabMXwkAWtowek" />
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
