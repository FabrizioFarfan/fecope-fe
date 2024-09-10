import React from "react";
import { Link } from "react-router-dom";
import { determineImageType, formatFecha } from "../util";

export const AlbumsCard = ({ data, currentPage, pageSize }) => {
  const filteredData = data.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );
  console.log(filteredData);
 
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:border px-24 pt-24 pb-16 rounded-lg border-[#e9b9b0] gap-1 shadow-xl">
      {filteredData.map((item) => {
        const imageType = determineImageType(item.imageType || "image/jpeg");
        const imageSrc = `data:${imageType};base64,${item.fotosBase64[0]}`;
        return (
          <div
            className="flex flex-col  items-center mb-3 "
            key={item.id + item.titulo}
          >
            <div className="inline-block text-dark-red shadow-2xl bg-true-red bg-opacity-20 rounded-xl ">
              <Link
                to={item.id + ""}
                className="mb-1 cursor-pointer flex flex-col justify-center items-center hover:text-true-red hover:underline "
              >
                <img
                  src={imageSrc}
                  alt={item.tiulo}
                  className="w-48 h-48 rounded-md m-2 object-cover"
                ></img>
                <div>
                  <h3 className="mt-2 font-semibold cursor-pointer text-center">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-600 font-extralight text-center">
                    Fotos: {item.fotosBase64.length}
                  </p>
                </div>
              </Link>
              <h6 className="mt-1 mb-7 text-sm text-gray-600 italic font-extralight text-center">
                Publicado: {formatFecha(item.fecha)}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};
