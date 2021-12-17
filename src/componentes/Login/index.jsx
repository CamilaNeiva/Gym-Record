import {
  Box,
  Container,
  Formulario,
  Titulo,
  Conta,
  Texto,
  Cadastro,
  Label,
  Mensagem,
} from "./style";

import { useNavigate } from "react-router-dom";
import React from "react";
import { Botao } from "../Botao";
import { Input } from "../Input";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [logar, setLogar] = React.useState(false);

  const navegar = useNavigate();

  const cadastrar = () => {
    navegar("/signup");
  };

  const removerAviso = () => {
    setLogar(false);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (email === "" || senha === "") {
      setLogar(true);
    } else {
      navegar("/");
    }
  }

  return (
    <>
      <Container>
        <Box>
          <Titulo>Gym Record</Titulo>
          <Formulario onSubmit={handleSubmit}>
            <Label htmlFor="email">E-mail</Label>

            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onClick={removerAviso}
            />

            <Label htmlFor="senha">Senha</Label>
            <Input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              onClick={removerAviso}
            />

            <Botao>Login</Botao>
            {logar && <Mensagem>Favor preencher todos os campos.</Mensagem>}
          </Formulario>
          <Conta>
            <Texto>Não possui conta ainda?</Texto>
            <Cadastro onClick={cadastrar} href="#">
              Cadastre-se
            </Cadastro>
          </Conta>
        </Box>
      </Container>
    </>
  );
};
