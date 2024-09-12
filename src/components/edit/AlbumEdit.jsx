import React, { useEffect, useState } from "react";
import { MoveLeft, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { base64ToFile, getCookie } from "../../util";

const token = localStorage.getItem("token");
export default function AlbumEdit() {
  const { albumId } = useParams();
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [fotos, setFotos] = useState([]);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const handleFotoChange = (e) => {
    const files = Array.from(e.target.files);
    const newFotos = files.map((file, index) => ({
      id: `new-${Date.now()}-${index}`,
      file: file,
      preview: URL.createObjectURL(file),
    }));
    setFotos((prevFotos) => [...prevFotos, ...newFotos]);

    if (newFotos.length > 0) {
      setPreview(newFotos[0].preview);
    }
  };

  const handleFotoRemove = async (id) => {
    // Eliminar foto de la vista previa
    setFotos((prevFotos) => prevFotos.filter((foto) => foto.id !== id));
  };

  useEffect(() => {
    async function fetchAlbum(albumId) {
      try {
        const response = await fetch(
          `http://api.fecope.eu/v0/album/${albumId}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          // Manejar fotos en Base64 del servidor
          const fotosBase64 = data.fotosBase64.map((foto, index) => ({
            id: `server-${index}`,
            preview: `data:image/jpeg;base64,${foto}`, // Asegurarte de que se trate como un base64 URL
            file: base64ToFile(`data:image/jpeg;base64,${foto}`, "imagen.jpg"), // No hay archivo porque viene del servidor
          }));
          setTitulo(data.titulo);
          setFecha(data.fecha);
          setFotos(fotosBase64);
        } else {
          console.error("Error al obtener el album:", response.statusText);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }

    fetchAlbum(albumId);
  }, [albumId]); // Añade eventoId como dependencia

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("fecha", fecha);

    fotos.forEach((foto) => {
      if (foto.file) {
        formData.append("fotos", foto.file);
        console.log(foto.file);
      }
    });

    try {
      const response = await fetch(`http://api.fecope.eu/v1/album/${albumId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`, // Añade el token aquí si es necesario
          "X-XSRF-TOKEN": getCookie(),
        },
        credentials: "include",
        body: formData,
      });
      // Fotos en Base64 desde el servidor

      if (response.ok) {
        alert("Álbum editado con éxito");
        navigate(-1);
      } else {
        const errorData = await response.json();
        console.error("Error al editar el álbum:", errorData);
        alert("Hubo un problema al editar el álbum");
      }
    } catch (error) {
      console.error("Error al editar el álbum:", error);
      alert("Hubo un problema al editar el álbum");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg text-dark-red">
      <div className="flex justify-start gap-20">
        <MoveLeft
          className="h-8 w-8 hover:text-dark-red text-true-red cursor-pointer"
          onClick={() => navigate(-1)}
        ></MoveLeft>
        <h2 className="text-xl font-bold my-4">Edita Álbum</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Título del Álbum(Máx. 70 letras)
          </label>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fecha del Álbum
          </label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Fotos del Álbum ({fotos.length})
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFotoChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
          {preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">Vista previa:</p>
              <img
                src={preview}
                alt="Vista previa"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {fotos.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2">Fotos Subidas:</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {fotos.map((foto) => (
                <li key={foto.id} className="flex items-center">
                  <div className="relative">
                    <img
                      src={foto.preview}
                      alt={`Foto ${foto.id}`}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleFotoRemove(foto.id)}
                      className="absolute top-0 right-0 bg-white rounded-full p-1 text-red-600 hover:text-true-red"
                    >
                      {/* Aquí asumo que tienes un componente X para el icono de cerrar */}
                      <X />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-true-red text-true-white px-4 py-2 rounded-lg shadow hover:bg-dark-red transition duration-300"
          >
            Editar Álbum
          </button>
        </div>
      </form>
    </div>
  );
}
