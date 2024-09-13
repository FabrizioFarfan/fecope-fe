import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { base64ToFile, determineImageType, getCookie } from "../../util";
import { MoveLeft } from "lucide-react";

const token = localStorage.getItem("token");

export default function NoticiaEdit() {
  const navigate = useNavigate();
  const imagenInputRef = useRef();
  const tituloInputRef = useRef();
  const descripcionInputRef = useRef();
  const contenidoInputRef = useRef();
  const { noticiaId } = useParams();
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    // Asignar valores predefinidos a los inputs
    async function fetchNoticia(id) {
      try {
        const response = await fetch(`http://api.fecope.eu/v0/noticia/${id}`);
        if (response.ok) {
          const noticia = await response.json();
          console.log(noticia);
          // Mostrar la imagen existente en una vista previa
          if (noticia.imagen) {
            const imageType = determineImageType(
              noticia.imageType || "image/jpeg"
            );
            const imageSrc = `data:${imageType};base64,${noticia.imagen}`;
            setPreviewImage(imageSrc);
          }
          if (tituloInputRef.current) {
            tituloInputRef.current.value = noticia.titulo;
          }

          if (descripcionInputRef.current) {
            descripcionInputRef.current.value = noticia.descripcion;
          }
          if (contenidoInputRef.current) {
            contenidoInputRef.current.value = noticia.contenido;
          }
        } else {
          console.error("Error al obtener el noticia:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
    fetchNoticia(noticiaId);
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
    formData.append("descripcion", descripcionInputRef.current.value);
    formData.append("contenido", contenidoInputRef.current.value);
    console.log(formData);
    fetch(`http://api.fecope.eu/v1/noticia/${noticiaId}`, {
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
          //   setIsSubmitting(true);
          alert("Noticia editada con éxito");
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
        <h2 className="text-xl font-bold my-4">Edita Noticia</h2>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Input para cargar imagen */}
        <div className="mb-4">
          {previewImage && (
            <div className="mb-4 grid">
              <div className="flex justify-center">
                <img
                  src={previewImage}
                  alt=" Noticia Imagen"
                  className="rounded-lg h-[150px] w-[150-px]"
                />
              </div>
              <div className="flex justify-center">
                <p className="text-xs font-extralight">
                  Imagen actual de la noticia(si desea abajo puede modificarla)
                </p>
              </div>
            </div>
          )}
          <label className="block text-sm font-bold mb-2">
            Nueva Imagen de la Noticia
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
            Título de la Noticia
          </label>
          <input
            type="text"
            placeholder="Título"
            className="w-full px-3 py-2 border rounded-lg"
            ref={tituloInputRef}
          />
        </div>

        {/* Descripción del Evento */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Descripción de la Noticia
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
            Contenido del Noticia
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
            Edita Noticia
          </button>
        </div>
      </form>
    </div>
  );
}
