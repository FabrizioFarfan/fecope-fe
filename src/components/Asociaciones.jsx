import React from "react";
import { InicioPagina } from "./InicioPagina";
import { AsociacionesList } from "./AsociacionesList";

export const Asociaciones = () => {
  return (
    <>
      <InicioPagina
        imagen={"asociaciones.jpeg"}
        text={"Asociaciones"}
      ></InicioPagina>
      <AsociacionesList></AsociacionesList>
    </>
  );
};
