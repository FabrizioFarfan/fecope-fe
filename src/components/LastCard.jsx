import React from "react";
import { Link } from "react-router-dom";
import { determineImageType } from "../util";

export const LastCard = ({ data, news }) => {
  const param = news;
  const imageType = determineImageType(data.imageType || "image/jpeg");
  const imageSrc = `data:${imageType};base64,${data.imagen}`;
  return (
    <div className="p-2 sm:p-3 lg:p-4   rounded-md overflow-hidden max-w-xs border border-true-red shadow-lg">
      <Link
        to={`/${param}/${data.id}`} // Asegúrate de que data.id sea una ruta válida
        className="block group"
      >
        <div className="relative mb-2">
          <img
            src={imageSrc}
            alt={data.titulo || "Imagen del artículo"} // Añadir alt con fallback
            className="w-full h-24 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex justify-center">
          <h3 className="text-xs sm:text-sm lg:text-md font-semibold text-true-red text-center mb-1 group-hover:text-dark-red">
            {data.titulo}
          </h3>
        </div>
      </Link>
    </div>
  );
};
