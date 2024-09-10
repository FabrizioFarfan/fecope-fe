import React from "react";
import { caracteristicas } from "../constants";

export const Caracteristicas = () => {
  return (
    <div className="relative mt-10 border-b border-true-red min-h-[700px]">
      <div className="text-center">
        <span className="text-true-red rounded-full h-6 text-sm font-medium px-2 py-1 uppercase underline">
          CARACTERÍSTICAS
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-10 text-true-red tracking-wide">
          Lo que encontrarás con nosotros
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {caracteristicas.map((caracteristica) => (
          <div key={caracteristica.id} className="w-full sm:1/2 lg:w-1/3 ">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 text-medium-red justify-center items-center rounded-full shadow-lg ">
                {caracteristica.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-true-red">
                  {caracteristica.titulo}
                </h5>
                <p className="text-md p-2 mb-20 text-dark-red font-light">
                  {caracteristica.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
