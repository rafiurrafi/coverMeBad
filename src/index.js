import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import ArtistProvider from "./context/artist.context";
import CreatedPlaylistProvider from "./context/created-playlist.context";
import GenreProvider from "./context/genre.context";
import LikedSongProvider from "./context/liked-song.context";
import PageProvider from "./context/page.context";
import PlaylistProvider from "./context/playlist.context";
import SearchProvider from "./context/search.context";
import SongProvider from "./context/song.context";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlaylistProvider>
        <GenreProvider>
          <ArtistProvider>
            <SongProvider>
              <LikedSongProvider>
                <CreatedPlaylistProvider>
                  <PageProvider>
                    <SearchProvider>
                      <App />
                    </SearchProvider>
                  </PageProvider>
                </CreatedPlaylistProvider>
              </LikedSongProvider>
            </SongProvider>
          </ArtistProvider>
        </GenreProvider>
      </PlaylistProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
