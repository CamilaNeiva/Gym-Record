import { Box, Container, Formulario, Titulo, Label, Mensagem } from "./style";

import { useNavigate } from "react-router-dom";
import React from "react";
import { Botao } from "../Botao";
import { Input } from "../Input";

export const Signup = () => {
  const navegar = useNavigate();

  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [conta, setConta] = React.useState(false);
  const [mensagem, setMensagem] = React.useState(false);

  const removerAviso = () => {
    setMensagem(false);
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || senha === "" || nome === "") {
      setMensagem(true);
    } else {
      setConta(true);
      setTimeout(() => {
        navegar("/");
      }, 2000);
    }
  }

  return (
    <>
      <Container>
        <Box>
          <Titulo>Gym Record</Titulo>
          <Formulario onSubmit={handleSubmit}>
            <Label htmlFor="nome">Nome</Label>
            <Input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              onClick={removerAviso}
            />

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

            <Botao>Criar Conta</Botao>
            {conta && <Mensagem>Conta criada com sucesso!</Mensagem>}
            {mensagem && <Mensagem>Favor preencher todos os campos.</Mensagem>}
          </Formulario>
        </Box>
      </Container>
    </>
  );
};
