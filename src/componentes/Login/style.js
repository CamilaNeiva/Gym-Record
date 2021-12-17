import styled from "styled-components";

export const Container = styled.div`
  background-color: #17a2b7;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

export const Box = styled.div`
  margin: 80px;
  background-color: #eaeaea;
  width: 400px;
  height: 600px;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;

export const Titulo = styled.h1`
  color: #17a2b7;
  text-align: center;
  margin-top: 80px;
  font-size: 30px;
  font-family: "Open Sans", sans-serif;
`;

export const Conta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Texto = styled.p`
  color: #0b050f;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  margin-top: 35px;
`;

export const Cadastro = styled.a`
  text-transform: uppercase;
  margin-top: 10px;
  color: #17a2b7;
  &:hover {
    color: tomato;
  }
`;

export const Mensagem = styled.p`
  font-size: px;
  font-family: "Open Sans", sans-serif;
  margin-top: 8px;
  text-align: center;
`;

export const Label = styled.p`
  color: #17a2b7;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  margin-top: 45px;
`;
