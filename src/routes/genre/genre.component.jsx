import { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Content from "../../components/content/content.component";
import { GenreContext } from "../../context/genre.context";
import { PageContext } from "../../context/page.context";
import { PlaylistContext } from "../../context/playlist.context";
import Card from "../../components/card/card.component";
import { GenreSearchGrid, GenreSearchPage } from "./genre.style";

const Genre = () => {
  const { id } = useParams();
  const { setCurrentPage } = useContext(PageContext);
  const { genres } = useContext(GenreContext);
  const { playlists: playlistIds } = genres.find((g) => g.id === id);
  const { playlists } = useContext(PlaylistContext);
  const items = playlistIds.map((list) => {
    return playlists.filter((item) => item.id === list)[0];
  });
  useEffect(() => {
    setCurrentPage("genre");
  }, []);
  return (
    <Content space>
      <GenreSearchPage>
        <h3>Genre</h3>
        <GenreSearchGrid>
          {items.map((item) => (
            <Link key={item?.id} to={`/playlist/${item?.id}`}>
              {" "}
              {item && <Card content={item} />}
            </Link>
          ))}
        </GenreSearchGrid>
      </GenreSearchPage>
    </Content>
  );
};

export default Genre;
