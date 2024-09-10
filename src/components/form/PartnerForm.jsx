import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../util";

const token = localStorage.getItem("token");
export const PartnerForm = () => {
  const navigate = useNavigate();
  const imagenInputRef = useRef();
  const tituloInputRef = useRef();
  const linkInputRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titulo", tituloInputRef.current.value);
    formData.append("link", linkInputRef.current.value);
    formData.append("imagen", imagenInputRef.current.files[0]);
    formData.append("diaspora", false);

    console.log(formData);
    fetch("http://localhost:8081/v1/create-partner", {
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
          alert("Socio creado con éxito");
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
      <h2 className="text-xl font-bold mb-4">Crea un Nuevo Socio</h2>

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
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-true-red text-true-white px-4 py-2 rounded-lg shadow hover:bg-dark-red transition duration-300"
          >
            Crear Socio
          </button>
        </div>
      </form>
    </div>
  );
};
