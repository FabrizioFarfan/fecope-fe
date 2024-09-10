import React, { useState } from "react";
import { preguntas } from "../constants";
import { LucideArrowBigUp } from "lucide-react";

export const AcordionHome = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFunction = (index) => {
    setActiveId(activeId === index ? null : index);
  };

  return (
    <div className="w-full pt-16 flex justify-center bg-gray-100 text-dark-red">
      <div className="sm:w-[300px] xl:w-[900px] bg-white border border-dark-red rounded-lg shadow-lg overflow-hidden">
        {preguntas.map((pregunta) => (
          <div
            key={pregunta.id}
            className={`border-b last:border-b-0 cursor-pointer transition-colors duration-300 ${
              activeId === pregunta.id
                ? "bg-true-red text-true-white"
                : "bg-white text-true-red"
            } hover:bg-dark-red hover:text-true-white`}
            onClick={() => toggleFunction(pregunta.id)}
          >
            <div className="px-5 py-4 flex items-center justify-between">
              <p className="flex-1 font-semibold">
                {pregunta.pregunta.toUpperCase()}
              </p>
              <span>
                {activeId === pregunta.id ? (
                  <LucideArrowBigUp className="w-5 h-5 transition-transform duration-300 transform" />
                ) : (
                  <LucideArrowBigUp className="w-5 h-5 transition-transform duration-300 transform rotate-180" />
                )}
              </span>
            </div>
            {activeId === pregunta.id && (
              <div
                className="px-5 py-4 bg-light-red text-true-white italic transition-opacity duration-300 opacity-100"
                style={{ whiteSpace: "pre-line" }}
              >
                <p>{pregunta.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
