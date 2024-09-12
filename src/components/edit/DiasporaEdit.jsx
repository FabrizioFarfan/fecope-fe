import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { base64ToFile, determineImageType, getCookie } from "../../util";
import { MoveLeft } from "lucide-react";

const token = localStorage.getItem("token");

export default function DiasporaEdit() {
  const navigate = useNavigate();
  const imagenInputRef = useRef();
  const tituloInputRef = useRef();
  const { diasporaId } = useParams();
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    // Asignar valores predefinidos a los inputs
    async function fetchDiaspora(id) {
      try {
        const response = await fetch(`http://api.fecope.eu/v0/partner/${id}`);
        if (response.ok) {
          const diaspora = await response.json();
          console.log(diaspora);
          // Mostrar la imagen existente en una vista previa
          if (diaspora.imagen) {
            const imageType = determineImageType(
              diaspora.imageType || "image/jpeg"
            );
            const imageSrc = `data:${imageType};base64,${diaspora.imagen}`;
            setPreviewImage(imageSrc);
          }
          if (tituloInputRef.current) {
            tituloInputRef.current.value = diaspora.titulo;
          }
        } else {
          console.error("Error al obtener el partner:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
    fetchDiaspora(diasporaId);
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titulo", tituloInputRef.current.value);
    formData.append("link", "");
    if (imagenInputRef.current.files.length === 0) {
      // Si no hay una nueva imagen, envía la vista previa en base64
      const base64Image = previewImage; // Obtén la parte base64 de la URL
      const file = base64ToFile(base64Image, "imagen.jpg"); // Asigna un nombre de archivo adecuado
      formData.append("imagen", file);
    } else {
      // Si hay una nueva imagen seleccionada, la envías como archivo
      formData.append("imagen", imagenInputRef.current.files[0]);
    }
    formData.append("diaspora", true);

    console.log(formData);
    fetch(`http://api.fecope.eu/v1/partner/${diasporaId}`, {
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
          alert("Diáspora editada con éxito");
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
          onClick={() => navigate("/admin")}
        ></MoveLeft>
        <h2 className="text-xl font-bold my-4">Edita Diáspora</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre(Máx. 70 letras)
          </label>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-3 py-2 border rounded-lg"
            ref={tituloInputRef}
            required
          />
        </div>{" "}
        {/* Input para cargar imagen */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Foto Evento
          </label>
          <input
            type="file"
            className="w-full px-3 py-2 border rounded-lg"
            accept="image/*"
            ref={imagenInputRef}
          />
        </div>
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
                Imagen actual del logo(si desea puede modificarla)
              </p>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-true-red text-true-white px-4 py-2 rounded-lg shadow hover:bg-dark-red transition duration-300"
          >
            Edita Diáspora
          </button>
        </div>
      </form>
    </div>
  );
}
