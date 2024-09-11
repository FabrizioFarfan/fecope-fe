import React from "react";

export const InicioPagina = ({
  text,
  imagen,
  textColor = "text-true-white",
  opacity = "bg-opacity-20",
  opacityText = "bg-opacity-45",
  contain = "bg-cover",
}) => {
  return (
    <div className={`relative py-24 text-center ${textColor}`}>
      {/* Div para el fondo con blur */}
      <img
        src={imagen}
        alt="Descripción de la imagen"
        className={`absolute inset-0 ${contain} bg-no-repeat bg-center w-full lg:h-[370px] h-5/6 object-cover object-center`}
        aria-hidden="true"
      />

      {/* Overlay rojo con opacidad */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-light-red ${opacity}`}
      ></div>

      {/* Contenido encima del fondo */}
      <div
        className={`relative justify-center flex  bg-true-red ${opacityText}`}
      >
        <h2 className="text-4xl lg:text-7xl lobster-regular  mb-5 w-full p-10 ">
          {text}
        </h2>
      </div>
    </div>
  );
};
