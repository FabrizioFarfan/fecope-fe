import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { formatFecha } from "../../util";

export const Noticia = () => {
  const noticiaRef = useRef();
  const { noticiaId } = useParams(); // Desestructura el id desde los parámetros de la URL
  const navigate = useNavigate();

  const [evento, setEvento] = useState({ imagen: "" }); // Inicializa con null
  const eventoRef = useRef(null);

  useEffect(() => {
    if (eventoRef.current) {
      eventoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      eventoRef.current.focus();
    }

    async function fetchEvento(noticiaId) {
      try {
        const response = await fetch(
          `http://api.fecope.eu/v0/noticia/${noticiaId}`
        );
        if (response.ok) {
          const data = await response.json();
          setEvento(data);
        } else {
          console.error("Error al obtener el evento:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
      if (noticiaRef.current) {
        noticiaRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        noticiaRef.current.focus();
      }
    }

    fetchEvento(noticiaId);
  }, [noticiaId]); // Añade eventoId como dependencia

  if (!evento) {
    <div
      className="text-dark-red italic text-2xl flex justify-center pt-80 pb-80"
      ref={noticiaRef}
    >
      <h1>Cargando...</h1>
    </div>;
  }

  const imageType = evento.imageType || "image/jpeg"; // Ajusta para evitar errores
  const imageSrc = `data:${imageType};base64,${evento.imagen}`;

  return (
    <div
      ref={noticiaRef}
      className="max-w-4xl mx-auto my-10 p-4 md:p-6 bg-white shadow-lg rounded-lg bg-true-red bg-opacity-15"
    >
      {/* Botón para volver */}
      <MoveLeft
        className="w-12 h-12 md:w-8 md:h-8 text-true-red m-6 cursor-pointer"
        onClick={() => navigate(-1)}
      />

      {/* Imagen de la noticia */}
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt={evento.id}
          className="w-1/3 h-1/3 rounded-t-lg object-cover"
        />
      </div>

      {/* Detalles de la noticia */}
      <div className="p-4 md:p-6 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-true-red text-center">
          {evento.titulo}
        </h2>

        <p className="text-dark-red text-opacity-65 mb-2 font-extralight text-center text-sm md:text-base">
          <span className="font-extralight">Publicado: </span>
          {formatFecha(evento.publicado)}
        </p>

        <p className="text-dark-red leading-relaxed text-center text-sm md:text-base">
          {evento.contenido}
        </p>
      </div>
    </div>
  );
};
