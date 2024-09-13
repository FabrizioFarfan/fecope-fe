import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { base64ToFile, determineImageType, getCookie } from "../../util";
import { MoveLeft } from "lucide-react";

const token = localStorage.getItem("token");

export default function PartnerEdit() {
  const navigate = useNavigate();
  const imagenInputRef = useRef();
  const tituloInputRef = useRef();
  const linkInputRef = useRef();
  const { partnerId } = useParams();
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    // Asignar valores predefinidos a los inputs
    async function fetchPartner(id) {
      try {
        const response = await fetch(`https://api.fecope.eu/v0/partner/${id}`);
        if (response.ok) {
          const partner = await response.json();
          console.log(partner);
          // Mostrar la imagen existente en una vista previa
          if (partner.imagen) {
            const imageType = determineImageType(
              partner.imageType || "image/jpeg"
            );
            const imageSrc = `data:${imageType};base64,${partner.imagen}`;
            setPreviewImage(imageSrc);
          }
          if (tituloInputRef.current) {
            tituloInputRef.current.value = partner.titulo;
          }

          if (linkInputRef.current) {
            linkInputRef.current.value = partner.link;
          }
        } else {
          console.error("Error al obtener el partner:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
    fetchPartner(partnerId);
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titulo", tituloInputRef.current.value);
    formData.append("link", linkInputRef.current.value);
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
    formData.append("diaspora", false);

    console.log(formData);
    fetch(`https://api.fecope.eu/v1/partner/${partnerId}`, {
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
          alert("Socio editado con éxito");
          navigate(-1);
        } else {
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
      <div className="flex justify-start gap-20">
        <MoveLeft
          className="h-8 w-8 hover:text-dark-red text-true-red cursor-pointer"
          onClick={() => navigate(-1)}
        ></MoveLeft>
        <h2 className="text-xl font-bold my-4">Edita Socio</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre(Máx. 100 letras)
          </label>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-3 py-2 border rounded-lg"
            ref={tituloInputRef}
            required
          />
        </div>{" "}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Link
          </label>
          <input
            type="text"
            placeholder="Link"
            className="w-full px-3 py-2 border rounded-lg"
            ref={linkInputRef}
            required
          />
        </div>
        {/* Input para cargar imagen */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Logo
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
            Edita Socio
          </button>
        </div>
      </form>
    </div>
  );
}
