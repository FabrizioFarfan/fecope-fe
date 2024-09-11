import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../util";

const token = localStorage.getItem("token");

export const NoticiaForm = () => {
  const navigate = useNavigate();
  const imagenInputRef = useRef();
  const tituloInputRef = useRef();
  const descripcionInputRef = useRef();
  const contenidoInputRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imagen", imagenInputRef.current.files[0]);
    formData.append("titulo", tituloInputRef.current.value);
    formData.append("descripcion", descripcionInputRef.current.value);
    formData.append("contenido", contenidoInputRef.current.value);
    console.log(formData);
    fetch("http://api.fecope.eu/v1/create-noticia", {
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
          alert("Noticia creada con éxito");
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
      <h2 className="text-xl font-bold mb-4">Crea una Nueva Noticia</h2>

      <form onSubmit={handleSubmit}>
        {/* Input para cargar imagen */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Imagen de la Noticia
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
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Título de la Noticia(Máx. 70 letras)
          </label>
          <input
            type="text"
            placeholder="Título"
            className="w-full px-3 py-2 border rounded-lg"
            ref={tituloInputRef}
            required
          />
        </div>

        {/* Descripción de la Noticia */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Descripción de la Noticia(Máx. 150 letras)
          </label>
          <textarea
            placeholder="Descripción"
            className="w-full px-3 py-2 border rounded-lg"
            ref={descripcionInputRef}
            required
          ></textarea>
        </div>
        {/* Contenido de la Noticia */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Contenido de la Noticia
          </label>
          <textarea
            placeholder="Contenido"
            className="w-full px-3 py-2 border rounded-lg"
            ref={contenidoInputRef}
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-true-red text-true-white px-4 py-2 rounded-lg shadow hover:bg-dark-red transition duration-300"
          >
            Crear Noticia
          </button>
        </div>
      </form>
    </div>
  );
};
