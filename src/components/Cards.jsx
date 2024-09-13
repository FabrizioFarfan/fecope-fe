import React from "react";
import { Link } from "react-router-dom";
import { determineImageType } from "../util";

export const Cards = ({ data, currentPage, pageSize }) => {
  const filteredData = data.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredData.map((item) => {
        // Asegúrate de que `item.imageType` esté presente y sea un tipo MIME válido
        const imageType = determineImageType(item.imageType || "image/jpeg");
        const imageSrc = `data:${imageType};base64,${item.imagen}`;
        return (
          <Link
            key={item.id}
            to={item.id + ""}
            state={{ page: currentPage }}
            className="p-5 shadow-xl cursor-pointer flex flex-col justify-center items-center hover:text-true-red text-dark-red bg-true-red bg-opacity-10 rounded-xl transition-all duration-300 ease-in-out"
          >
            <div>
              <img
                src={imageSrc}
                alt="imagen"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              ></img>
            </div>
            <h3 className="mt-4 mb-2 font-bold text-center text-lg sm:text-xl md:text-lg truncate">
              {item.titulo}
            </h3>
            <div className="flex justify-center w-full">
              <p className="font-light text-sm sm:text-base md:text-lg m-2 text-left text-ellipsis overflow-hidden max-h-[6.5rem] line-clamp-3">
                {item.descripcion}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
