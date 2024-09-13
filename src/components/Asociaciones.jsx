import React from "react";
import { InicioPagina } from "./InicioPagina";
import { AsociacionesList } from "./AsociacionesList";
import asociaciones from "../assets/asociaciones.jpeg";

export const Asociaciones = () => {
  return (
    <>
      <InicioPagina imagen={asociaciones} text={"Asociaciones"}></InicioPagina>
      <AsociacionesList></AsociacionesList>
    </>
  );
};
