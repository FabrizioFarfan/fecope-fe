import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../util";

const token = localStorage.getItem("token");
export const EventoForm = () => {
  const navigate = useNavigate();
  const imagenInputRef = useRef();
  const tituloInputRef = useRef();
  const lugarInputRef = useRef();
  const descripcionInputRef = useRef();
  const contenidoInputRef = useRef();
  const fechaInicioInputRef = useRef();
  const fechaFinalInputRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imagen", imagenInputRef.current.files[0]);
    formData.append("titulo", tituloInputRef.current.value);
    formData.append("lugar", lugarInputRef.current.value);
    formData.append("descripcion", descripcionInputRef.current.value);
    formData.append("contenido", contenidoInputRef.current.value);
    formData.append("dataInicio", fechaInicioInputRef.current.value);
    formData.append("dataFinal", fechaFinalInputRef.current.value);
    console.log(formData);
    fetch("http://api.fecope.eu/v1/create-evento", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "X-XSRF-TOKEN": getCookie(),
      },
      credentials: "include",
      body: formData,
    })
      .then((response) => {
        if (response.status === 201) {
          //   setIsSubmitting(true);
          alert("Evento creado con éxito");
          navigate(-1);
        } else {
          //  setIsSubmitting(false);
          alert("Ha occurrido un error");
        }
      })
      .catch((error) => {
        alert("Ha occurrido un error");
        console.error("Network error:", error);
      });
  }

  return (
    <div className="text-dark-red max-w-lg mx-auto p-6 bg-white  rounded-lg">
      <h2 className="text-xl font-bold mb-4">Crea un Nuevo Evento</h2>

      <form onSubmit={handleSubmit}>
        {/* Input para cargar imagen */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Imagen del Evento
          </label>
          <input
            type="file"
            className="w-full px-3 py-2 border rounded-lg"
            accept="image/*"
            ref={imagenInputRef}
            required
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
            Crear Evento
          </button>
        </div>
      </form>
    </div>
  );
};
