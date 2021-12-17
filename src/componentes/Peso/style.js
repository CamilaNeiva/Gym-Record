import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Texto = styled.div`
  display: flex;
  background-color: rgb(234, 234, 234);
  width: 450px;
  gap: 180px;
  justify-content: space-around;
  margin: 10px 0 5px;
  font-size: 30px;
  font-family: "Open Sans", sans-serif;
  color: #17a2b7;
  padding: 15px 35px;
`;

export const Conteudo = styled.div`
  display: flex;
  background-color: #eaeaea;
  font-size: 18px;
  width: 450px;
  margin: 5px 0;
  justify-content: space-around;
  padding: 10px;
  gap: 140px;
`;

export const Icone = styled(FontAwesomeIcon)`
  && {
    color: #17a2b7;
    font-size: 18px;
  }
`;
