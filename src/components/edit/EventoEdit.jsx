import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { base64ToFile, determineImageType, getCookie } from "../../util";
import { MoveLeft } from "lucide-react";

const token = localStorage.getItem("token");

export default function EventoEdit() {
  const navigate = useNavigate();
  const imagenInputRef = useRef();
  const tituloInputRef = useRef();
  const lugarInputRef = useRef();
  const descripcionInputRef = useRef();
  const contenidoInputRef = useRef();
  const fechaInicioInputRef = useRef();
  const fechaFinalInputRef = useRef();
  const { eventoId } = useParams();
  const [previewImage, setPreviewImage] = useState(null);
  useEffect(() => {
    // Asignar valores predefinidos a los inputs
    async function fetchEvento(eventoId) {
      try {
        const response = await fetch(
          `http://localhost:8081/v0/evento/${eventoId}`
        );
        if (response.ok) {
          const evento = await response.json();
          console.log(evento);
          // Mostrar la imagen existente en una vista previa
          if (evento.imagen) {
            const imageType = determineImageType(
              evento.imageType || "image/jpeg"
            );
            const imageSrc = `data:${imageType};base64,${evento.imagen}`;
            setPreviewImage(imageSrc);
          }
          if (tituloInputRef.current) {
            tituloInputRef.current.value = evento.titulo;
          }
          if (lugarInputRef.current) {
            lugarInputRef.current.value = evento.lugar;
          }
          if (descripcionInputRef.current) {
            descripcionInputRef.current.value = evento.descripcion;
          }
          if (contenidoInputRef.current) {
            contenidoInputRef.current.value = evento.contenido;
          }
          if (fechaInicioInputRef.current) {
            fechaInicioInputRef.current.value = evento.dataInicio; // Formato de fecha y hora (ISO 8601)
          }
          if (fechaFinalInputRef.current) {
            fechaFinalInputRef.current.value = evento.dataFinal; // Formato de fecha y hora (ISO 8601)
          }
        } else {
          console.error("Error al obtener el evento:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
    fetchEvento(eventoId);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    // Verifica si hay una imagen seleccionada
    if (imagenInputRef.current.files.length === 0) {
      // Si no hay una nueva imagen, envía la vista previa en base64
      const base64Image = previewImage; // Obtén la parte base64 de la URL
      const file = base64ToFile(base64Image, "imagen.jpg"); // Asigna un nombre de archivo adecuado
      formData.append("imagen", file);
    } else {
      // Si hay una nueva imagen seleccionada, la envías como archivo
      formData.append("imagen", imagenInputRef.current.files[0]);
    }
    formData.append("titulo", tituloInputRef.current.value);
    formData.append("lugar", lugarInputRef.current.value);
    formData.append("descripcion", descripcionInputRef.current.value);
    formData.append("contenido", contenidoInputRef.current.value);
    formData.append("dataInicio", fechaInicioInputRef.current.value);
    formData.append("dataFinal", fechaFinalInputRef.current.value);
    console.log(formData);
    fetch(`http://localhost:8081/v1/evento/${eventoId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "X-XSRF-TOKEN": getCookie(),
      },
      credentials: "include",
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Evento editado con éxito");
          navigate(-1);
        } else {
          alert("Ha occurrido un error");
          //  setIsSubmitting(false);
        }
      })
      .catch((error) => {
        alert("Ha occurrido un error");
        console.error("Network error:", error);
      });
  }

  return (
    <div className="text-dark-red max-w-lg mx-auto p-6 bg-white  rounded-lg">
      <div className="flex justify-start gap-20">
        <MoveLeft
          className="h-8 w-8 hover:text-dark-red text-true-red cursor-pointer"
          onClick={() => navigate(-1)}
        ></MoveLeft>
        <h2 className="text-xl font-bold my-4">Edita Evento</h2>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Input para cargar imagen */}
        <div className="mb-4">
          {previewImage && (
            <div className="mb-4 grid">
              <div className="flex justify-center">
                <img
                  src={previewImage}
                  alt="Evento Imagen"
                  className="rounded-lg h-[150px] w-[150-px]"
                />
              </div>
              <div className="flex justify-center">
                <p className="text-xs font-extralight">
                  Imagen actual del evento(si desea abajo puede modificarla)
                </p>
              </div>
            </div>
          )}
          <label className="block text-sm font-bold mb-2">
            Nueva Imagen del Evento
          </label>
          <input
            type="file"
            className="w-full px-3 py-2 border rounded-lg"
            accept="image/*"
            ref={imagenInputRef}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Título del Evento(Máx. 70 letras)
          </label>
          <input
            type="text"
            placeholder="Título"
            className="w-full px-3 py-2 border rounded-lg"
            ref={tituloInputRef}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Lugar</label>
          <input
            type="text"
            placeholder="Lugar"
            className="w-full px-3 py-2 border rounded-lg"
            ref={lugarInputRef}
          />
        </div>
        {/* Fecha y Hora de Inicio */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Inicio del Evento
          </label>
          <input
            type="datetime-local"
            className="w-full px-3 py-2 border rounded-lg"
            ref={fechaInicioInputRef}
          />
        </div>
        {/* Fecha y Hora de Fin */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Final del Evento
          </label>
          <input
            type="datetime-local"
            className="w-full px-3 py-2 border rounded-lg"
            ref={fechaFinalInputRef}
          />
        </div>
        {/* Descripción del Evento */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Descripción del Evento(Máx. 150 letras)
          </label>
          <textarea
            placeholder="Descripción"
            className="w-full px-3 py-2 border rounded-lg"
            ref={descripcionInputRef}
          ></textarea>
        </div>
        {/* Contenido del Evento */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Contenido del Evento
          </label>
          <textarea
            placeholder="Contenido"
            className="w-full px-3 py-2 border rounded-lg"
            ref={contenidoInputRef}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-true-red text-true-white px-4 py-2 rounded-lg shadow hover:bg-dark-red transition duration-300"
          >
            Edita Evento
          </button>
        </div>
      </form>
    </div>
  );
}
