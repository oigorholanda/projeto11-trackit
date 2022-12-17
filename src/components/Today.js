import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Today() {
  return (
    <>
      <Header/>
      <h1 style={{marginTop: 300, marginLeft: 150, fontSize:22}}>Hoje</h1>
      <Footer/>
    </>
  );
}
