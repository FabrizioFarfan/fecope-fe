import { ArrowLeft, ArrowRight, MoveLeft, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate } from "react-router-dom";

export const Fotos = ({ data, titulo }) => {
  console.log(data);
  const navigate = useNavigate();
  const [image, setImage] = useState({ img: "", id: 0 });
  const albumRef = useRef();
  const viewImage = (image, id) => {
    setImage({ img: image, id: id });
    albumRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    albumRef.current.focus();
  };
  const imgAction = (action) => {
    let id = image.id;
    // Encuentra el índice actual de la imagen en el array de datos
    const currentIndex = image.id;

    if (action === "next-img") {
      // Mover a la siguiente imagen si no es la última
      if (currentIndex < data.length - 1) {
        setImage({ img: data[currentIndex + 1], id: currentIndex + 1 });
      }
    }
    if (action === "previous-img") {
      // Mover a la imagen anterior si no es la primera
      if (currentIndex > 0) {
        setImage({ img: data[currentIndex - 1], id: currentIndex - 1 });
      }
    }

    // Resetea la imagen si no se proporciona una acción
    if (!action) {
      setImage({ img: "", id: 0 });
    }
  };

  useEffect(() => {
    if (albumRef.current) {
      albumRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      albumRef.current.focus();
    }
  }, []);
  return (
    <div className="border-dark-red bg-dark-red border-opacity-35 bg-opacity-5 border-2 m-6 rounded-2xl shadow-2xl">
      {image.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "white",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <button
            style={{ position: "absolute", top: "10px", right: "10px" }}
            ref={albumRef}
            onClick={() => imgAction()}
          >
            <X className="text-true-red m-5 h-10 w-10"></X>
          </button>

          {/* Botón para la imagen anterior */}
          <button
            onClick={() => imgAction("previous-img")}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            className="text-true-red h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
          >
            <ArrowLeft className="h-8 w-8 bg-true-red text-true-white bg-opacity-50 rounded-full hover:bg-opacity-90" />
          </button>
          <img
            src={`data:image/jpeg;base64,${image.img}`}
            alt={image.id}
            style={{ width: "auto", maxWidth: "100%", maxHeight: "100%" }}
          ></img>

          {/* Botón para la siguiente imagen */}
          <button
            onClick={() => imgAction("next-img")}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            className="text-true-red h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
          >
            <ArrowRight className="h-8 w-8 bg-true-red text-true-white bg-opacity-50 rounded-full hover:bg-opacity-90" />
          </button>
        </div>
      )}

      {!image.img && (
        <div className="p-5 md:p-10">
          <div
            className="flex items-center justify-between mb-5"
            ref={albumRef}
          >
            {/* Flecha en la esquina izquierda */}
            <MoveLeft
              className="text-dark-red h-10 w-10 cursor-pointer mb-16 mt-5 ml-8"
              onClick={() => navigate(-1)}
            />

            {/* Título centrado */}
            <h1 className="text-dark-red text-5xl md:text-7xl font-extralight mb-4 text-center flex-grow">
              {titulo}
            </h1>

            {/* Placeholder para mantener el espacio */}
            <div className="h-10 w-10"></div>
          </div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="20px">
              {data.map((foto, index) => (
                <img
                  key={index}
                  src={`data:image/jpeg;base64,${foto}`}
                  alt={`foto-${index}`}
                  style={{
                    width: "100%",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={() => viewImage(foto, index)}
                ></img>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
    </div>
  );
};
