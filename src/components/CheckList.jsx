import React from "react";
import presidente from "../assets/presidente.jpg";
import { checkList } from "../constants";
import { CheckCircle2 } from "lucide-react";

export const CheckList = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-true-red mb-10">
        Objetivos de FECOPE
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-1/2 lg:w-1/2">
          <img className="rounded-3xl shadow-2xl" src={presidente}></img>
        </div>
        <div className="pt-12 w-full lg:w-1/2  ">
          {checkList.map((item) => (
            <div key={item.id} className="flex mb-10">
              <div className="text-true-red mx-6 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2></CheckCircle2>
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl text-dark-red">
                  {item.titulo}
                </h5>
                <p className="text-md text-dark-red font-extralight">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
