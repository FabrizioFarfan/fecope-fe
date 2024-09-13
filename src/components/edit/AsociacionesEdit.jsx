import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { paisesEuropeos } from "../../constants";
import { MoveLeft } from "lucide-react";
import { getCookie } from "../../util";

const token = localStorage.getItem("token");

export default function AsociacionesEdit() {
  const navigate = useNavigate();
  const tituloInputRef = useRef();
  const paisInputRef = useRef();
  const websiteInputRef = useRef();
  const instagramInputRef = useRef();
  const facebookInputRef = useRef();
  const { asociacionId } = useParams();

  useEffect(() => {
    // Asignar valores predefinidos a los inputs
    async function fetchAsociacion(id) {
      try {
        const response = await fetch(
          `https://api.fecope.eu/v0/asociacion/${id}`
        );
        if (response.ok) {
          const asociacion = await response.json();
          console.log(asociacion);

          if (tituloInputRef.current) {
            tituloInputRef.current.value = asociacion.titulo;
          }
          if (paisInputRef.current) {
            paisInputRef.current.value = asociacion.pais;
          }
          if (websiteInputRef.current) {
            websiteInputRef.current.value = asociacion.linkWebSite;
          }
          if (instagramInputRef.current) {
            instagramInputRef.current.value = asociacion.linkInstagram;
          }
          if (facebookInputRef.current) {
            facebookInputRef.current.value = asociacion.linkFacebook;
          }
        } else {
          console.error("Error al obtener el partner:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
    fetchAsociacion(asociacionId);
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://api.fecope.eu/v1/update-asociacion/${asociacionId}`, {
      method: "PUT",
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
        if (response.status === 200) {
          alert("Asociación editada con éxito");
          navigate(-1);
        } else {
          alert("Ha occurrido un error");
          console.error("Error:", response.status);
        }
      })
      .catch((error) => {
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
        <h2 className="text-xl font-bold my-4">Edita Asociación</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre de la Asociación:(Máx. 100 letras)
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
            Edita Asociación
          </button>
        </div>
      </form>
    </div>
  );
}
