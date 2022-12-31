import { Suspense } from "react";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./app.scss";

import Template from "./components/template/template.component";
const Artists = lazy(() => import("./routes/artists/artists.component"));
const Auth = lazy(() => import("./routes/auth/auth.component"));
const CollectionPlaylist = lazy(() =>
  import("./routes/collection-playlist/collection-playlist.component")
);
const CollectionTrack = lazy(() =>
  import("./routes/collection-tracks/collection-track.component")
);
const Genre = lazy(() => import("./routes/genre/genre.component"));
const Home = lazy(() => import("./routes/home/home.component"));
const Playlist = lazy(() => import("./routes/playlist/playlist.component"));
const Search = lazy(() => import("./routes/search/search.component"));
const Section = lazy(() => import("./routes/section/section.component"));
const UserPlaylist = lazy(() =>
  import("./routes/user-playlist/user-playlist.component")
);
const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="genre/:id" element={<Genre />} />
          <Route path="playlist/:id" element={<Playlist />} />
          <Route path="user-playlist/:id" element={<UserPlaylist />} />
          <Route path="collection/tracks" element={<CollectionTrack />} />
          <Route path="collection/playlist" element={<CollectionPlaylist />} />
          <Route path="section/:id" element={<Section />} />
          <Route path="artists/:id" element={<Artists />} />
        </Route>
        <Route path="/auth/:auth" element={<Auth />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
// music app stroke
// https://youtu.be/oscPp3KghS8
export default App;
