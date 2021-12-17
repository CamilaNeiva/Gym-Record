import React, { useEffect, useState } from "react";
import { carregarPesos } from "../../mock/pesos";
import { Menu } from "../Menu";
import { Box, Container, Conteudo, Icone, Texto } from "./style";
import { faCalendarAlt, faWeight } from "@fortawesome/free-solid-svg-icons";

export const Peso = () => {
  const [pesos, setPesos] = useState(null);
  useEffect(async () => {
    const dados = await carregarPesos();
    setPesos(dados);
  }, []);
  return (
    <>
      <Menu />
      <Container>
        <Texto>
          <Box>
            <Icone icon={faCalendarAlt} />
            <p>Data</p>
          </Box>

          <Box>
            <Icone icon={faWeight} />
            <p>Peso</p>
          </Box>
        </Texto>
      </Container>

      {pesos &&
        pesos.map(({ peso, data }) => {
          return (
            <Container>
              <Conteudo>
                <p>{data}</p>
                <p>{peso} kg</p>
              </Conteudo>
            </Container>
          );
        })}
    </>
  );
};
