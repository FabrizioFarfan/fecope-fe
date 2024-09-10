import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import { determineImageType } from "../util";

export const Carousel = ({ diasporas }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState("scale(1)");
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? diasporas.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isFirstSlide = currentIndex === diasporas.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 7500);

    return () => {
      clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    };
  }, [currentIndex, diasporas.length]); // Dependencia para asegurarte de que se actualiza con el índice actual
  const imageType = determineImageType(
    diasporas[currentIndex].imageType || "image/jpeg"
  );
  const imageSrc = `data:${imageType};base64,${diasporas[currentIndex].imagen}`;
  return (
    <div className="max-w-[350px] h-[580px] w-full m-auto py-16 px-4 relative group mb-16">
      <div className="flex justify-center underline text-2xl mb-5 text-dark-red italic">
        <h1>{diasporas[currentIndex].titulo}</h1>
      </div>
      <img
        src={imageSrc}
        alt="Cargando..."
        onClick={() => {
          scale === "scale(1)" ? setScale("scale(1.4)") : setScale("scale(1)");
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-1000 ease-in-out opacity-0 scale-95 blur-sm shadow-lg cursor-pointer "
        style={{ opacity: 1, transform: scale, filter: "blur(0)" }}
        key={currentIndex}
      ></img>
      {/*Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-5 text-2xl rounded-full p-2 bg-dark-red/40 hover:bg-dark-red/70 text-true-white cursor-pointer mt-14"
        onClick={prevSlide}
      >
        <ChevronLeft className="size-5"></ChevronLeft>
      </div>
      {/* Rigth Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-5 text-2xl rounded-full p-2 bg-dark-red/40 hover:bg-dark-red/70 text-true-white cursor-pointer mt-14"
        onClick={nextSlide}
      >
        <ChevronRight className="size-5"></ChevronRight>
      </div>
      <div className="flex top-4 justify-center py-2">
        {" "}
        {diasporas.map((diaspora, i) => (
          <div
            key={diaspora.id + diaspora.titulo}
            onClick={() => goToSlide(i)}
            className={`text-2xl cursor-pointer ${
              currentIndex === i ? "text-dark-red /95" : "text-light-red /20"
            }hover:text-dark-red`}
          >
            <Dot> </Dot>
          </div>
        ))}
      </div>
    </div>
  );
};
