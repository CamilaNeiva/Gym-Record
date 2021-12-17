import React from "react";
import { Container, Header, Titulo, Link } from "./style";

export const Menu = () => {
  return (
    <Header>
      <Titulo>Gym Record</Titulo>
      <Container>
        <li>
          <Link to="/">Treinos</Link>
        </li>
        <li>
          <Link to="/peso">Pesos</Link>
        </li>
      </Container>
    </Header>
  );
};
