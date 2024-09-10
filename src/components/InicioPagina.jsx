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
      <div
        className={`absolute inset-0 ${contain}  bg-no-repeat bg-center `}
        style={{ backgroundImage: `url('src/assets/${imagen}')` }}
        aria-hidden="true" // Esto indica que este div es solo decorativo
      ></div>
      {/* Overlay rojo con opacidad */}
      <div className={`absolute inset-0 bg-light-red ${opacity}`}></div>

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
