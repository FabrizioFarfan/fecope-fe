import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export const Evento = () => {
  const { eventoId } = useParams(); // Desestructura el id desde los parámetros de la URL
  const navigate = useNavigate();

  const [evento, setEvento] = useState({ imagen: "" }); // Inicializa con null
  const eventoRef = useRef();

  useEffect(() => {
    async function fetchEvento(eventoId) {
      try {
        const response = await fetch(
          `http://api.fecope.eu/v0/evento/${eventoId}`
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
      if (eventoRef.current) {
        eventoRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        eventoRef.current.focus();
      }
    }

    fetchEvento(eventoId);
  }, []); // Añade eventoId como dependencia

  if (!evento) {
    <div
      className="text-dark-red italic text-2xl flex justify-center pt-80 pb-80"
      ref={eventoRef}
    >
      <h1>Cargando...</h1>
    </div>;
  }

  const imageType = evento.imageType || "image/jpeg"; // Ajusta para evitar errores
  const imageSrc = `data:${imageType};base64,${evento.imagen}`;

  const formatFechaHora = (fechaISO) => {
    const opciones = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Cambia a false si prefieres el formato de 24 horas
    };
    return new Date(fechaISO).toLocaleDateString("es-ES", opciones);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-4 md:p-6 bg-white shadow-lg rounded-lg">
      {/* Botón para volver a la lista de eventos */}
      <MoveLeft
        className="w-12 h-12 md:w-8 md:h-8 text-true-red m-6 cursor-pointer"
        onClick={() => navigate("/eventos")}
        ref={eventoRef}
      />
      <h2 className="text-2xl md:text-3xl font-bold  md:mb-4 text-true-red text-center">
        {evento.titulo}
      </h2>

      {/* Imagen del evento */}
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt={evento.id}
          className="w-1/3 h-1/3 rounded-t-lg object-cover"
        />
      </div>

      {/* Detalles del evento */}
      <div className="p-4 md:p-6 flex flex-col items-center">
        <p className="text-dark-red leading-relaxed text-center text-sm md:text-base">
          {evento.contenido}
        </p>
      </div>

      <div className="bg-true-red bg-opacity-15 my-10 mx-16 text-dark-red rounded-2xl shadow-xl">
        <div className="flex justify-center italic">
          <h1 className="my-4">Información Extra:</h1>
        </div>
        <hr className="mx-56 mb-3 opacity-50"></hr>
        <p className="text-gray-600 mb-2 font-extralight text-center text-sm md:text-base">
          <span className="font-extralight">Lugar: </span>
          {evento.lugar}
        </p>
        <div className="grid">
          <p className="text-gray-600 mb-2 font-extralight text-center text-sm md:text-base">
            <span className="font-extralight">Inicia: </span>
            {formatFechaHora(evento.dataInicio)}
          </p>

          <p className="text-gray-600 mb-6 font-extralight text-center text-sm md:text-base ">
            <span className="font-extralight">Termina: </span>
            {formatFechaHora(evento.dataFinal)}
          </p>
        </div>
      </div>
    </div>
  );
};
