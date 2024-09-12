import { redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import { AlbumForm } from "../components/form/AlbumForm";
import { AsociacionesForm } from "../components/form/AsociacionesForm";
import { DiasporaForm } from "../components/form/DiasporaForm";
import { EventoForm } from "../components/form/EventoForm";
import { NoticiaForm } from "../components/form/NoticiaForm";
import { PartnerForm } from "../components/form/PartnerForm";
import { supportedImageTypes } from "../constants";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  return expirationDate.getTime() - now.getTime();
}
export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}
export function getCookie() {
  const cookie = new Cookies();

  console.log(cookie.getAll("XSRF-TOKEN"));
  return cookie.get("XSRF-TOKEN");
}

export function checkAuthLoader() {
  // this function will be added in the next lecture
  // make sure it looks like this in the end
  const token = getAuthToken();

  if (!token) {
    return redirect("/login");
  }

  return null; // this is missing in the next lecture video and should be added by you
}

export const formatFecha = (fechaISO) => {
  const opciones = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };
  return new Date(fechaISO).toLocaleDateString("es-ES", opciones);
};
export const determineImageType = (type) => {
  return supportedImageTypes.includes(type) ? type : "image/jpeg";
};

export function base64ToFile(base64String, fileName) {
  // Verifica si la cadena base64 contiene el prefijo "data:"
  const base64Regex = /^data:(.*?);base64,(.*)$/;
  const match = base64String.match(base64Regex);

  if (!match) {
    throw new Error("Cadena base64 no válida");
  }

  const mime = match[1];
  const data = match[2];

  // Decodifica la cadena base64
  const binary = atob(data);
  const array = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    array[i] = binary.charCodeAt(i);
  }

  return new File([array], fileName, { type: mime });
}
export const titulo = (param) => {
  switch (param) {
    case "eventos":
      return "Eventos";
    case "noticias":
      return "Noticias";
    case "diaspora":
      return "Diáspora";
    case "asociaciones-fecope":
      return "Asociaciones";
    case "albums-fotos":
      return "Álbumes";
    case "partners":
      return "Socios";

    default:
      break;
  }
};

export const form = (param) => {
  switch (param) {
    case "eventos":
      return <EventoForm></EventoForm>;
    case "noticias":
      return <NoticiaForm></NoticiaForm>;
    case "asociaciones-fecope":
      return <AsociacionesForm></AsociacionesForm>;
    case "albums-fotos":
      return <AlbumForm></AlbumForm>;
    case "partners":
      return <PartnerForm></PartnerForm>;
    case "diaspora":
      return <DiasporaForm></DiasporaForm>;
    default:
      break;
  }
};

export const urlToFetch = (param) => {
  switch (param) {
    case "eventos":
      return "http://api.fecope.eu/v1/all-eventos";
    case "noticias":
      return "http://api.fecope.eu/v1/all-noticias";
    case "asociaciones-fecope":
      return "http://api.fecope.eu/v1/all-asociaciones";
    case "albums-fotos":
      return "http://api.fecope.eu/v1/all-albums";
    case "partners":
      return "http://api.fecope.eu/v1/all-partners";
    case "diaspora":
      return "http://api.fecope.eu/v1/all-diasporas";
    default:
      break;
  }
};

export const urlToDelete = (param) => {
  switch (param) {
    case "eventos":
      return `http://api.fecope.eu/v1/evento/`;
    case "noticias":
      return "http://api.fecope.eu/v1/noticia/";
    case "asociaciones-fecope":
      return "http://api.fecope.eu/v1/asociacion/";
    case "albums-fotos":
      return "http://api.fecope.eu/v1/album/";
    case "partners":
      return "http://api.fecope.eu/v1/partner/";
    case "diaspora":
      return "http://api.fecope.eu/v1/partner/";
    default:
      break;
  }
};
