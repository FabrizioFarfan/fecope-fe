import React, { useEffect, useState } from "react";
import { Carousel } from "./Carousel";
import { Link } from "react-router-dom";

export const DiasporaPeruana = () => {
  const [diasporas, setDiasporas] = useState([
    { titulo: "Cargando...", imageType: "", imagen: "" },
  ]);
  useEffect(() => {
    async function fetchDiasporas() {
      let url = "https://api.fecope.eu/v0/all-diasporas";
      console.log("Fetching URL:", url);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDiasporas(data);
      } catch (error) {
        console.error("Error fetching diasporas:", error);
      }
    }
    fetchDiasporas();
    console.log(diasporas);
  }, []);

  return (
    <div className="mb-24">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide text-true-red font-bold mb-10">
        Encuentro Mundial de la Diáspora Peruana
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-5">
        <div className="lg:w-1/3 px-4 xl:mt-44 lg:mt-16">
          <p className="lg:text-xl text-lg text-center lg:text-left font-extralight text-dark-red max-w-full lg:max-w-4xl">
            Cada año, personas de todas partes del mundo se reúnen para formar
            parte de uno de los eventos más importantes organizados por FECOPE.
            Es una oportunidad única para conectar, compartir experiencias y
            fortalecer los lazos entre la comunidad peruana . Este encuentro no
            solo es un espacio de diálogo y reflexión, sino también una
            plataforma para impulsar el cambio y la participación activa en
            temas clave que afectan a nuestra diáspora. Sé parte de este evento
            histórico, donde juntos construimos el futuro de nuestra comunidad y
            dejamos una huella imborrable en la historia.
          </p>
        </div>
        <Carousel
          className="my-8 lg:my-0 lg:w-1/3"
          diasporas={diasporas.slice(0, 5)}
        />
        <div className="lg:w-1/3 px-4 xl:mt-44 lg:mt-16 ">
          <p className="lg:text-xl text-lg text-center lg:text-left font-extralight text-dark-red max-w-full lg:max-w-4xl">
            No te pierdas la oportunidad de revivir los momentos más destacados
            de nuestros eventos y actividades. Haz clic en nuestra sección de{" "}
            <Link to="/videos" className="font-semibold underline">
              videos
            </Link>{" "}
            para ver las grabaciones más emocionantes y en{" "}
            <Link to="/album-fotos" className="font-semibold underline">
              fotos
            </Link>{" "}
            para descubrir las mejores imágenes que capturan la esencia de cada
            evento. Sumérgete en nuestras experiencias y mantente conectado con
            todo lo que hacemos. Esto y mucho más te espera en este lugar, todos
            están bienvenidos a formar parte de está gran familia.
          </p>
        </div>
      </div>
    </div>
  );
};
