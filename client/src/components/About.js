import React from "react";
import { Link } from "react-router-dom";
import DadosHenrylle from "./DadosHenrylle";
const About = () => {
  return (
    <div>
      <h4>Meddiflux</h4>
      <h5>Meddiflux CI/CD</h5>
      <Link to="/">Voltar</Link>
      <DadosHenrylle />
    </div>
  );
};

export default About;
