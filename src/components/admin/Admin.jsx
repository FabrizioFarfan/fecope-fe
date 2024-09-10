import React from "react";
import { InicioPagina } from "../InicioPagina";
import { Panel } from "./Panel";

export const Admin = () => {
  return (
    <>
      <InicioPagina
        text={"Bievenido Administrador"}
        imagen={"admin.jpg"}
      ></InicioPagina>
      <div className="md:ml-52">
        <Panel></Panel>
      </div>
    </>
  );
};
