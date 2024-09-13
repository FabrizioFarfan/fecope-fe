import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { paisesEuropeos } from "../../constants";
import { getCookie } from "../../util";

const token = localStorage.getItem("token");
export const AsociacionesForm = () => {
  const navigate = useNavigate();
  const tituloInputRef = useRef();
  const paisInputRef = useRef();
  const websiteInputRef = useRef();
  const instagramInputRef = useRef();
  const facebookInputRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(token);
    console.log(tituloInputRef.current.value);

    fetch("https://api.fecope.eu/v1/create-asociacion", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCookie(),
      },
      credentials: "include",
      body: JSON.stringify({
        titulo: tituloInputRef.current.value,
        pais: paisInputRef.current.value,
        linkWebSite: websiteInputRef.current.value,
        linkInstagram: instagramInputRef.current.value,
        linkFacebook: facebookInputRef.current.value,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          alert("Asociacón creada con éxito");
          navigate(-1);
        } else {
          alert("Ha occurrido un error");
          // Manejar errores
          console.error("Error:", response.status);
        }
      })
      .catch((error) => {
        alert("Ha occurrido un error");
        console.error("Network error:", error);
      });
  }

  return (
    <div className="text-dark-red max-w-lg mx-auto p-6 bg-white  rounded-lg">
      <h2 className="text-xl font-bold mb-4">Crea una Nueva Asociación</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre de la Asociacón:
          </label>
          <input
            type="text"
            placeholder="Título"
            className="w-full px-3 py-2 border rounded-lg"
            ref={tituloInputRef}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            País:
          </label>
          <select
            className="w-full px-3 py-2 border rounded-lg"
            ref={paisInputRef}
            required
          >
            <option value="" disabled>
              Selecciona un país
            </option>
            {paisesEuropeos.map((pais) => (
              <option key={pais.acronimo} value={pais.acronimo}>
                {pais.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Link Website: (No Obligatorio)
          </label>
          <input
            type="text"
            placeholder="Website"
            className="w-full px-3 py-2 border rounded-lg"
            ref={websiteInputRef}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Link Instagram: (No Obligatorio)
          </label>
          <input
            type="text"
            placeholder="Instagram"
            className="w-full px-3 py-2 border rounded-lg"
            ref={instagramInputRef}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Link Facebook: (No Obligatorio)
          </label>
          <input
            type="text"
            placeholder="Facebook"
            className="w-full px-3 py-2 border rounded-lg"
            ref={facebookInputRef}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-true-red text-true-white px-4 py-2 rounded-lg shadow hover:bg-dark-red transition duration-300"
          >
            Crear Asociación
          </button>
        </div>
      </form>
    </div>
  );
};
