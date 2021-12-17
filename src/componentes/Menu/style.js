import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Header = styled.div`
  background-color: #17a2b7;
  display: flex;
  justify-content: space-between;
  padding: 20px 80px;
`;
export const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Link = styled(RouterLink)`
  font-size: 22px;
  color: #ffff;
  font-family: "Open Sans", sans-serif;
`;

export const Titulo = styled.p`
  font-size: 40px;
  color: #ffff;
  font-family: "Open Sans", sans-serif;
`;
