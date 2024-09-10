import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/Root";
import { HomePage } from "./pages/Home";
import { EventosPage } from "./pages/Eventos";
import { NoticiasPage } from "./pages/Noticias";
import { AlbumsPage } from "./pages/Albums";
import { VideosPage } from "./pages/Videos";
import { EventoPage } from "./pages/Evento";
import { AlbumPage } from "./pages/Album";
//import { AdminPage } from "./pages/Admin";
//import { AdminContentPage } from "./pages/AdminContent";
import { HistoriaPage } from "./pages/Historia";
import { LoginPage } from "./pages/Login";
import { NoticiaPage } from "./pages/Noticia";
//import { EventoEdit } from "./components/edit/EventoEdit";
//import { NoticiaEdit } from "./components/edit/NoticiaEdit";
//import { AlbumEdit } from "./components/edit/AlbumEdit";
import { AsociacionesPage } from "./pages/Asociaciones";
//import { DiasporaEdit } from "./components/edit/DiasporaEdit";
//import { PartnerEdit } from "./components/edit/PartnerEdit";
//import { AsociacionesEdit } from "./components/edit/AsociacionesEdit";
import { checkAuthLoader, tokenLoader } from "./util";
import { NuestraPrivacyPage } from "./pages/NuestraPrivacy";
import { ContactanosPage } from "./pages/Contactanos";
import { lazy, Suspense } from "react";

function App() {
  // lazy import
  const AdminPage = lazy(() => import("./pages/Admin"));
  const AdminContentPage = lazy(() => import("./pages/AdminContent"));
  const NoticiaEdit = lazy(() => import("./components/edit/NoticiaEdit"));
  const DiasporaEdit = lazy(() => import("./components/edit/DiasporaEdit"));
  const PartnerEdit = lazy(() => import("./components/edit/PartnerEdit"));
  const AsociacionesEdit = lazy(() =>
    import("./components/edit/AsociacionesEdit")
  );
  const AlbumEdit = lazy(() => import("./components/edit/AlbumEdit"));
  const EventoEdit = lazy(() => import("./components/edit/EventoEdit"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      id: "root",
      loader: tokenLoader,
      children: [
        { index: true, element: <HomePage></HomePage> },
        {
          path: "historia",
          element: <HistoriaPage></HistoriaPage>,
        },
        {
          path: "asociaciones",
          element: <AsociacionesPage></AsociacionesPage>,
        },
        {
          path: "eventos",
          children: [
            {
              index: true,
              element: <EventosPage></EventosPage>,
            },
            {
              path: ":eventoId",
              element: <EventoPage></EventoPage>,
            },
          ],
        },
        {
          path: "noticias",
          children: [
            {
              index: true,
              element: <NoticiasPage></NoticiasPage>,
            },
            {
              path: ":noticiaId",
              element: <NoticiaPage></NoticiaPage>,
            },
          ],
        },
        {
          path: "album-fotos",
          children: [
            { index: true, element: <AlbumsPage></AlbumsPage> },
            {
              path: ":albumId",
              element: <AlbumPage></AlbumPage>,
            },
          ],
        },
        { path: "videos", element: <VideosPage></VideosPage> },

        {
          path: "admin",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<p>Cargando...</p>}>
                  <AdminPage></AdminPage>
                </Suspense>
              ),
              loader: checkAuthLoader,
            },
            {
              path: ":adminContent",
              element: (
                <Suspense fallback={<p>Cargando...</p>}>
                  <AdminContentPage></AdminContentPage>
                </Suspense>
              ),
              loader: checkAuthLoader,
            },

            {
              path: "eventos/edit/:eventoId",
              element: (
                <Suspense fallback={<p>Cargando...</p>}>
                  <EventoEdit></EventoEdit>
                </Suspense>
              ),
              loader: checkAuthLoader,
            },
            {
              path: "noticias/edit/:noticiaId",
              element: (
                <Suspense fallback={<p>Cargando...</p>}>
                  <NoticiaEdit></NoticiaEdit>
                </Suspense>
              ),
              loader: checkAuthLoader,
            },
            {
              path: "albums-fotos/edit/:albumId",
              element: (
                <Suspense fallback={<p>Cargando...</p>}>
                  <AlbumEdit></AlbumEdit>
                </Suspense>
              ),
              loader: checkAuthLoader,
            },
            {
              path: "asociaciones-fecope/edit/:asociacionId",
              element: (
                <Suspense fallback={<p>Cargando...</p>}>
                  <AsociacionesEdit></AsociacionesEdit>
                </Suspense>
              ),
              loader: checkAuthLoader,
            },
            {
              path: "diaspora/edit/:diasporaId",
              element: (
                <Suspense fallback={<p>Cargando...</p>}>
                  <DiasporaEdit></DiasporaEdit>
                </Suspense>
              ),
              loader: checkAuthLoader,
            },
            {
              path: "partners/edit/:partnerId",
              element: (
                <Suspense fallback={<p>Cargando...</p>}>
                  <PartnerEdit></PartnerEdit>
                </Suspense>
              ),
              loader: checkAuthLoader,
            },
          ],
        },
        { path: "login", element: <LoginPage></LoginPage> },
        {
          path: "nuestra-privacy",
          element: <NuestraPrivacyPage></NuestraPrivacyPage>,
        },
        { path: "contactanos", element: <ContactanosPage></ContactanosPage> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
