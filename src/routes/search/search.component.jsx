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
import {
  BlankResult,
  SearchBox,
  SearchGenres,
  SearchPageContainer,
  SearchResultArtist,
  SearchResultBody,
  SearchResultBoxs,
  SearchResultCat,
  SearchResultHeader,
  SearchResultMain,
  SearchResultOptions,
} from "./search.style";
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
    <SearchPageContainer>
      <h3>Browse All</h3>
      <SearchGenres>
        {genres?.map(({ id, title, color, cover }) => (
          <SearchBox
            to={`/genre/${id}`}
            style={{ backgroundColor: color }}
            key={id}
          >
            <h3>{title}</h3>
            <img src={cover} alt={title} />
          </SearchBox>
        ))}
      </SearchGenres>
    </SearchPageContainer>
  );
}
function SearchResultFound({ filteredSongs, songs, playlists }) {
  const { artists } = useContext(ArtistContext);
  const artistsFromSong = filteredSongs[0].artists.map((item) => {
    return artists.filter((artist) => artist.id === item)[0];
  });
  const song = filteredSongs[0];
  return (
    <SearchPageContainer>
      <SearchResultHeader>
        <SearchResultMain>
          <img src={song.cover} alt="" />
          <h3>{song.title}</h3>
          <div style={{ marginTop: "2rem" }}>
            {artistsFromSong.map((artist) => (
              <SearchResultArtist>{artist.name}</SearchResultArtist>
            ))}{" "}
            <SearchResultCat>Song</SearchResultCat>
          </div>
        </SearchResultMain>
        <SearchResultOptions>
          {filteredSongs
            .filter((_, idx) => idx < 3)
            .map((song, idx) => (
              <SongList key={song.id} song={song} idx={idx} />
            ))}
        </SearchResultOptions>
      </SearchResultHeader>
      <SearchResultBody>
        <h3>Artist</h3>
        <SearchResultBoxs>
          {artistsFromSong.map((artist) => (
            <CardRound key={artist.id} artist={artist} />
          ))}
        </SearchResultBoxs>
      </SearchResultBody>
      <SearchResultBody style={{ marginBottom: "5rem" }}>
        <h3>Album</h3>
        <SearchResultBoxs>
          {playlists.map((album) => (
            <Card key={album.id} content={album} />
          ))}
        </SearchResultBoxs>
      </SearchResultBody>
    </SearchPageContainer>
  );
}
function SearchResultBlank({ query }) {
  return (
    <BlankResult style={{ color: "white" }}>
      <h3>
        No results found for <span style={{ color: "red" }}>{query}</span>
      </h3>
      <p>
        Please make sure your words are spelled correctly or use less or
        different keywords.
      </p>
    </BlankResult>
  );
}
