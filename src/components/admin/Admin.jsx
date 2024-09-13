import React from "react";
import { InicioPagina } from "../InicioPagina";
import { Panel } from "./Panel";
import admin from "../../assets/admin.jpg";

export const Admin = () => {
  return (
    <>
      <InicioPagina
        text={"Bievenido Administrador"}
        imagen={admin}
      ></InicioPagina>
      <div className="md:ml-52">
        <Panel></Panel>
      </div>
    </>
  );
};
