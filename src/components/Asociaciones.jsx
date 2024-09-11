import React from "react";
import { InicioPagina } from "./InicioPagina";
import { AsociacionesList } from "./AsociacionesList";
import asociaciones from "../../dist/assets/asociaciones.jpeg";

export const Asociaciones = () => {
  return (
    <>
      <InicioPagina imagen={asociaciones} text={"Asociaciones"}></InicioPagina>
      <AsociacionesList></AsociacionesList>
    </>
  );
};
