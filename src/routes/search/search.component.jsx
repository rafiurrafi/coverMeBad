import "./search.style.scss";
import Content from "../../components/content/content.component";
import { useContext } from "react";
import { PageContext } from "../../context/page.context";
import { useEffect } from "react";
import { GenreContext } from "../../context/genre.context";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/search.context";
import { SongContext } from "../../context/song.context";
import { PlaylistContext } from "../../context/playlist.context";
import { ArtistContext } from "../../context/artist.context";
import SongList from "../../components/song-list/song-list.component";
import CardRound from "../../components/card-round/card-round.component";
import Card from "../../components/card/card.component";
const Search = () => {
  const { setCurrentPage } = useContext(PageContext);
  const { genres } = useContext(GenreContext);
  const { songs } = useContext(SongContext);
  const { playlists } = useContext(PlaylistContext);
  const { searchQuery } = useContext(SearchContext);
  useEffect(() => {
    setCurrentPage("search");
  }, []);
  const filteredSongs = songs.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  console.log(filteredSongs);
  return (
    <Content>
      {searchQuery ? (
        !filteredSongs.length ? (
          <SearchResultBlank query={searchQuery} />
        ) : (
          <SearchResultFound
            filteredSongs={filteredSongs}
            songs={songs}
            playlists={playlists}
          />
        )
      ) : (
        <SearchPageDefault genres={genres} />
      )}
    </Content>
  );
};

export default Search;
function SearchPageDefault({ genres }) {
  return (
    <div className="search-page">
      <h3>Browse All</h3>
      <div className="search-genres">
        {genres?.map(({ id, title, color, cover }) => (
          <Link
            to={`/genre/${id}`}
            className="search-box"
            style={{ backgroundColor: color }}
            key={id}
          >
            <h3>{title}</h3>
            <img src={cover} alt={title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
function SearchResultFound({ filteredSongs, songs, playlists }) {
  const { artists } = useContext(ArtistContext);
  const artistsFromSong = filteredSongs[0].artists.map((item) => {
    return artists.filter((artist) => artist.id === item)[0];
  });
  const song = filteredSongs[0];
  return (
    <div className="search-page">
      <div className="search-result-header">
        <div className="search-result-main">
          <img src={song.cover} alt="" />
          <h3>{song.title}</h3>
          <div style={{ marginTop: "2rem" }}>
            {artistsFromSong.map((artist) => (
              <a href="" className="search-result-artist">
                {artist.name}
              </a>
            ))}{" "}
            <span className="search-result-cat">Song</span>
          </div>
        </div>
        <div className="search-result-options">
          {filteredSongs
            .filter((_, idx) => idx < 3)
            .map((song, idx) => (
              <SongList key={song.id} song={song} idx={idx} />
            ))}
        </div>
      </div>
      <div className="search-result-body">
        <h3>Artist</h3>
        <div className="search-result-boxes">
          {artistsFromSong.map((artist) => (
            <CardRound key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
      <div className="search-result-body" style={{ marginBottom: "5rem" }}>
        <h3>Album</h3>
        <div className="search-result-boxes">
          {playlists.map((album) => (
            <Card key={album.id} content={album} />
          ))}
        </div>
      </div>
    </div>
  );
}
function SearchResultBlank({ query }) {
  return (
    <div style={{ color: "white" }} className="blank-result">
      <h3>
        No results found for <span style={{ color: "red" }}>{query}</span>
      </h3>
      <p>
        Please make sure your words are spelled correctly or use less or
        different keywords.
      </p>
    </div>
  );
}
