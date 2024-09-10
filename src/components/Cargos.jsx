import React from "react";
import { cargos } from "../constants";

export const Cargos = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-true-red italic">
        Junta Directiva FECOPE
      </h2>
      <div className="flex flex-wrap gap-1  justify-center">
        {cargos.map((cargo) => (
          <div key={cargo.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="rounded-xl p-6 text-md border border-true-red shadow-lg font-sans">
              <p className="text-dark-red font-light">{cargo.descripcion}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-14 h-14 mr-6 rounded-full border border-true-red"
                  src={cargo.imagen}
                  alt={cargo.id}
                ></img>
                <div>
                  <h6 className="text-dark-red font-bold">{cargo.nombre}</h6>
                  <span className="text-sm font-light italic text-dark-red">
                    {cargo.cargo}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
