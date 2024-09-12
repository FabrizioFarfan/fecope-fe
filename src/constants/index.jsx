import {
  CalendarCheck2,
  Earth,
  Newspaper,
  Handshake,
  PersonStanding,
  LibraryBig,
} from "lucide-react";
import martin from "../../dist/assets/martin.jpeg";
import tipo1 from "../../dist/assets/tipo1.jpeg";
import tipo from "../../dist/assets/tipo.jpeg";
import tesorera from "../../dist/assets/tesorerajpeg.jpeg";
import yt from "../../dist/assets/Youtube_logo.png";
import tt from "../../dist/assets/tiktok.png";
import fb from "../../dist/assets/Facebook.png";
import inst from "../../dist/assets/instagram.svg";
import { NavLink } from "react-router-dom";

export const extravideos = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=5VBdkMiis04&t=4s",
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=SQSIF1qrNY8",
  },
  {
    id: 3,
    link: "https://www.youtube.com/watch?v=v4gRhn1HwN0",
  },
];

export const videos = [
  {
    id: 1,
    bg: "bg-true-red",
    titulo: "Explora Nuestros Videos en YouTube",
    descripcion:
      "Descubre nuestra colección de videos en YouTube, donde compartimos contenido relevante sobre nuestras actividades, eventos y más. Encuentra detalles sobre lo que hacemos y cómo impactamos a la comunidad peruana en Europa.",
    url: yt,
    opacity: "",
    cuenta: "@DIASPORAPERUANA",
    link: "https://www.youtube.com/@DIASPORAPERUANA",
  },
  {
    id: 2,
    bg: "bg-[#3512c2]",
    titulo: "Conéctate con Nosotros en Facebook",
    descripcion:
      "En nuestra página de Facebook, encontrarás videos que destacan nuestras actividades, eventos y noticias importantes. Únete a la conversación y mantente al día con nuestras últimas actualizaciones.",
    url: fb,
    opacity: "bg-opacity-60",
    cuenta: "Fecope Federación PEX",
    link: "https://www.facebook.com/fecope.federacionpex",
  },
  {
    id: 3,
    bg: "bg-[#000000]",
    titulo: "Síguenos en TikTok",
    descripcion:
      "No te pierdas nuestros videos en TikTok, donde compartimos contenido dinámico y entretenido sobre nuestras iniciativas y eventos. Síguenos para ver cómo estamos conectando a la comunidad peruana en Europa.",
    url: tt,
    opacity: "",
    cuenta: "@fecopeoficial",
    link: "https://www.tiktok.com/@fecopeoficial",
  },
  {
    id: 4,
    bg: "bg-[#f099db]",
    titulo: "Mira Nuestros Videos en Instagram",
    descripcion:
      "Explora nuestros videos en Instagram, donde publicamos contenido visualmente atractivo sobre nuestras actividades y eventos. Síguenos para ver lo que está pasando en FECOPE y cómo estamos haciendo una diferencia.",
    url: inst,
    opacity: "bg-opacity-100",
    cuenta: "@fecope.pex",
    link: "https://www.instagram.com/reel/C_sPanriu_m/?igsh=MWNlYWNzanM1aGVibw%3D%3D",
  },
];

export const links = [
  {
    id: 3,
    name: "news",
    submenu: true,
    sublinks: [
      {
        Head: "eventos",
        link: "eventos",
        sublink: [],
      },
      {
        Head: "noticias",
        link: "noticias",
        sublink: [],
      },
    ],
  },
  {
    id: 5,
    name: "galería",
    submenu: true,
    sublinks: [
      {
        Head: "Álbumes",
        link: "album-fotos",
        sublink: [],
      },
      {
        Head: "videos",
        link: "videos",
        sublink: [],
      },
    ],
  },
];

export function linki(param) {
  switch (param) {
    case "eventos":
      return (
        <NavLink
          to="/eventos"
          className="text-lg hover:text-dark-red"
          onClick={() => {
            handleClose(false);
          }}
        >
          Eventos
        </NavLink>
      );

    case "noticias":
      return (
        <NavLink
          to="/noticias"
          className="text-lg hover:text-dark-red"
          onClick={() => {
            handleClose(false);
          }}
        >
          Noticias
        </NavLink>
      );
    case "album-fotos":
      return (
        <NavLink
          to="/album-fotos"
          className="text-lg hover:text-dark-red"
          onClick={() => {
            handleClose(false);
          }}
        >
          Álbumes
        </NavLink>
      );
    case "videos":
      return (
        <NavLink
          to="/videos"
          className="text-lg hover:text-dark-red"
          onClick={() => {
            handleClose(false);
          }}
        >
          Videos
        </NavLink>
      );

    default:
      break;
  }
}

export const caracteristicas = [
  {
    id: 1,
    icon: <Handshake />,
    titulo: "Comunidad",
    descripcion:
      "Únete a nuestra comunidad y conéctate con personas que comparten tus mismas metas y aspiraciones. Juntos, avanzamos y nos apoyamos mutuamente.",
  },
  {
    id: 2,
    icon: <CalendarCheck2 />,
    titulo: "Eventos",
    descripcion:
      "Participa en nuestros eventos exclusivos y mantente al tanto de actividades y encuentros que fortalecen la conexión entre los miembros de nuestra comunidad.",
  },
  {
    id: 3,
    icon: <LibraryBig />,
    titulo: "Cultura",
    descripcion:
      "Explora y celebra la rica cultura peruana en Europa a través de nuestras actividades culturales, recursos y eventos educativos.",
  },
  {
    id: 4,
    icon: <Newspaper />,
    titulo: "Noticias",
    descripcion:
      "Mantente informado con las últimas noticias y actualizaciones sobre nuestra comunidad, eventos y temas de interés general.",
  },
  {
    id: 5,
    icon: <PersonStanding />,
    titulo: "Identidad",
    descripcion:
      "Refuerza tu identidad y conecta con tus raíces peruanas mientras vives en Europa. Celebramos la diversidad y la riqueza de nuestra herencia cultural.",
  },
  {
    id: 6,
    icon: <Earth />,
    titulo: "Globalización",
    descripcion:
      "Participa en un diálogo global sobre la migración, integración y el impacto de esta comunidad peruana en el mundo. Tu voz y experiencia cuentan.",
  },
];

export const checkList = [
  {
    id: 1,
    titulo: "La Identidad Nacional con el Perú y el Gobierno Peruano",
    descripcion:
      "Explora cómo fortalecemos nuestra identidad nacional en el extranjero . A través de nuestras actividades, buscamos preservar y promover nuestra cultura y tradiciones.",
  },
  {
    id: 2,
    titulo: "La Integración de la Comunidad Peruana en los Países de Acogida",
    descripcion:
      "Trabajamos para apoyar a los inmigrantes peruanos en su adaptación a nuevas culturas y sociedades, fomentando el entendimiento mutuo y fortaleciendo el tejido social en nuestras nuevas comunidades.",
  },
  {
    id: 3,
    titulo: "La Solidaridad y Cooperación Mutua entre la Comunidad Peruana",
    descripcion:
      "A través de redes de apoyo y colaboración, buscamos crear un entorno de ayuda mutua donde cada miembro pueda contribuir al bienestar colectivo y al éxito de nuestra comunidad.",
  },
  {
    id: 4,
    titulo: "Los Principios de Comunicación entre la Comunidad Peruana",
    descripcion:
      "Nuestros principios de comunicación están diseñados para asegurar que la información fluya de manera clara y abierta, fortaleciendo los lazos y mejorando la coordinación en nuestras actividades y proyectos.",
  },
];

export const cargos = [
  {
    id: 1,
    cargo: "PRESIDENTE",
    nombre: "Martín López Chávez",
    descripcion:
      "Líder de FECOPE, representando la voz de nuestra comunidad en eventos clave y trabajando para fortalecer nuestros lazos y objetivos.",
    imagen: martin,
  },
  {
    id: 2,
    cargo: "SECRETARIO",
    nombre: "José Cruz Chamorro",
    descripcion:
      "Encargado de la organización y gestión administrativa, asegurando que todas las actividades de FECOPE se lleven a cabo de manera eficiente y efectiva.",
    imagen: tipo,
  },
  {
    id: 3,
    cargo: "TESORERA",
    nombre: "Maria Esther Nerio Cavero",
    descripcion:
      "Responsable de la administración financiera, velando por la correcta gestión y distribución de los recursos de FECOPE.",
    imagen: tesorera,
  },
  {
    id: 4,
    cargo: "VOCAL",
    nombre: "César Torres Mejía",
    descripcion:
      "Miembro activo en la toma de decisiones y planificación de proyectos, colaborando  con el equipo para alcanzar los objetivos .",
    imagen: tipo1,
  },
];

export const preguntas = [
  {
    id: 1,
    pregunta: "¿QUE TIPO DE ORGANIZACIÓN ES FECOPE?",
    respuesta:
      "FECOPE es una Organización de voluntariado que tiene objetivos y finalidades sociales no políticos partidarios, sin fines de lucro y de carácter plural, está compuesta por ciudadanos peruanos residentes en el continente europeo a título individual o colectivo reunidos en Asociaciones, Clubs, Hermandades, Familias, etc. ",
  },
  {
    id: 2,
    pregunta: "¿QUIENES COMPONEN FECOPE?",
    respuesta:
      "FECOPE está compuesta por individuos libres y autónomos, los cuales proponen criterios comunes basados en el carácter unitario de la Comunidad Peruana, dinamizando la acción social y reivindicativa de la misma en la construcción de una Organización que represente y enarbole las propuestas de los Peruanos Emigrantes Residentes en Europa, ante el Estado Peruano y Los Estados de la Comunidad Europea en general.",
  },

  {
    id: 3,
    pregunta: "¿PUEDO UNIRME A FECOPE?",
    respuesta:
      "Si deseas unirte a FECOPE, solo necesitas hacer clic en el ícono de mensaje al final de esta sección y enviar una presentación de la persona interesada, incluyendo:\n\n" +
      "-► Nombres y apellidos completos\n" +
      "-► Número de DNI\n" +
      "-► Dirección exacta\n" +
      "-► Año y lugar de nacimiento\n" +
      "-►Número de celular\n\n" +
      "Posteriormente, recibirás una comunicación de FECOPE para formalizar tu ingreso.",
  },
  {
    id: 4,
    pregunta: "¿Qué son las  Nuvas Generaciones?",
    respuesta:
      "Las nuevas generaciones están conformadas por los jóvenes peruanos emigrantes o de segunda generación, menores de 30 años, que residen en el exterior. Estos jóvenes tienen una visión más moderna y global, influenciada por su experiencia migratoria y la diversidad cultural en la que se desenvuelven.",
  },
];

export const supportedImageTypes = [
  "image/jpeg", // JPEG
  "image/png", // PNG
  "image/gif", // GIF
  "image/webp", // WebP
  "image/svg", // SVG
  "image/tiff", // TIFF
  "image/bmp", // BMP
  "image/x-icon", // ICO
];

// user: Admin1;
// password: Admin789$;

// user: Admin2;
// password: Fecope123$;

// user: Demo;
// password: demo12345;
export const paisesEuropeos = [
  { nombre: "Alemania", acronimo: "DE" },
  { nombre: "Andorra", acronimo: "AD" },
  { nombre: "Austria", acronimo: "AT" },
  { nombre: "Bélgica", acronimo: "BE" },
  { nombre: "Bulgaria", acronimo: "BG" },
  { nombre: "Chipre", acronimo: "CY" },
  { nombre: "Croacia", acronimo: "HR" },
  { nombre: "Dinamarca", acronimo: "DK" },
  { nombre: "Eslovaquia", acronimo: "SK" },
  { nombre: "Eslovenia", acronimo: "SI" },
  { nombre: "España", acronimo: "ES" },
  { nombre: "Estonia", acronimo: "EE" },
  { nombre: "Finlandia", acronimo: "FI" },
  { nombre: "Francia", acronimo: "FR" },
  { nombre: "Grecia", acronimo: "GR" },
  { nombre: "Hungría", acronimo: "HU" },
  { nombre: "Irlanda", acronimo: "IE" },
  { nombre: "Islandia", acronimo: "IS" },
  { nombre: "Italia", acronimo: "IT" },
  { nombre: "Kosovo", acronimo: "XK" },
  { nombre: "Letonia", acronimo: "LV" },
  { nombre: "Liechtenstein", acronimo: "LI" },
  { nombre: "Lituania", acronimo: "LT" },
  { nombre: "Luxemburgo", acronimo: "LU" },
  { nombre: "Malta", acronimo: "MT" },
  { nombre: "Mónaco", acronimo: "MC" },
  { nombre: "Montenegro", acronimo: "ME" },
  { nombre: "Noruega", acronimo: "NO" },
  { nombre: "Países Bajos", acronimo: "NL" },
  { nombre: "Polonia", acronimo: "PL" },
  { nombre: "Portugal", acronimo: "PT" },
  { nombre: "Rumania", acronimo: "RO" },
  { nombre: "San Marino", acronimo: "SM" },
  { nombre: "Serbia", acronimo: "RS" },
  { nombre: "Suecia", acronimo: "SE" },
  { nombre: "Suiza", acronimo: "CH" },
  { nombre: "Ucrania", acronimo: "UA" },
];
