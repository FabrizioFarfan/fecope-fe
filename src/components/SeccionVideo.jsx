import React from "react";

export const SeccionVideo = ({
  bg,
  titulo = "DIÁSPORA PERUANA",
  descripcion,
  url,
  opacity = "",
  cuenta = "",
  link = "",
}) => {
  return (
    <div
      className={`${bg} ${opacity} p-4 md:p-8 flex flex-col md:flex-row items-center mb-16 rounded-3xl`}
    >
      {/* Video de YouTube a la izquierda */}
      <div className="flex justify-around  w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
        <img
          src={url}
          alt={url}
          className="shadow-xl rounded-full h-1/2 w-1/2"
        ></img>
      </div>

      {/* Información del video a la derecha */}
      <div className="flex-1 text-true-white">
        <div className="flex justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 italic">
            {titulo}
          </h2>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light">
          {descripcion}
        </p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-center border mt-7 hover:bg-true-white hover:bg-opacity-40 py-3 cursor-pointer rounded-xl text-sm lg:mx-20">
              © Cuenta Oficial: {cuenta}
            </div>
          </a>
        )}
      </div>
    </div>
  );
};
