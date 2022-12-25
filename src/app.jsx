import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./app.scss";
import Template from "./components/template/template.component";
import Auth from "./routes/auth/auth.component";
import CollectionPlaylist from "./routes/collection-playlist/collection-playlist.component";
import CollectionTrack from "./routes/collection-tracks/collection-track.component";
import Genre from "./routes/genre/genre.component";
import Home from "./routes/home/home.component";
import Playlist from "./routes/playlist/playlist.component";
import Search from "./routes/search/search.component";
import Section from "./routes/section/section.component";
import UserPlaylist from "./routes/user-playlist/user-playlist.component";
const App = () => {
  return (
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
      </Route>
      <Route path="/auth/:auth" element={<Auth />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
// music app stroke
// https://youtu.be/oscPp3KghS8
export default App;
