import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import UserProvider from "./components/card/user.context";
import ArtistProvider from "./context/artist.context";
import CreatedPlaylistProvider from "./context/created-playlist.context";
import GenreProvider from "./context/genre.context";
import LikedSongProvider from "./context/liked-song.context";
import PageProvider from "./context/page.context";
import PlayerProvider from "./context/player.context";
import PlaylistProvider from "./context/playlist.context";
import SearchProvider from "./context/search.context";
import SongProvider from "./context/song.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlaylistProvider>
        <GenreProvider>
          <ArtistProvider>
            <SongProvider>
              <CreatedPlaylistProvider>
                <PageProvider>
                  <SearchProvider>
                    <PlayerProvider>
                      <UserProvider>
                        <App />
                      </UserProvider>
                    </PlayerProvider>
                  </SearchProvider>
                </PageProvider>
              </CreatedPlaylistProvider>
            </SongProvider>
          </ArtistProvider>
        </GenreProvider>
      </PlaylistProvider>
    </BrowserRouter>
  </React.StrictMode>
);
