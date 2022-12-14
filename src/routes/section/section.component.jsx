import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import "./section.style.scss";
import { PlaylistContext } from "../../context/playlist.context";
import { PageContext } from "../../context/page.context";
import Content from "../../components/content/content.component";
import Cards from "../../components/cards/cards.component";

const sectionObj = {
  "section-1": [0, 9],
  "section-2": [6, 14],
  "section-3": [4, 12],
  "section-4": [6, 14],
  "section-5": [3, 11],
};
const Section = () => {
  const { id } = useParams();
  const { playlists } = useContext(PlaylistContext);
  const { setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("home");
  }, []);
  const [min, max] = sectionObj[id];
  console.log(min, max);
  return (
    <Content>
      <Cards
        title="Latest playlist"
        albums={playlists}
        min={min}
        max={max}
        section={1}
        page
      />
    </Content>
  );
};

export default Section;
