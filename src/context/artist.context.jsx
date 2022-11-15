import { useState } from "react";
import { useContext } from "react";
import ArtistServer from "../fake-server/fakeArtist";

export const ArtistContext = useContext({ artists: [] });
const ArtistProvider = ({ children }) => {
  const [artists] = useState(ArtistServer);
  return (
    <ArtistContext.Provider value={{ artists }}>
      {children}
    </ArtistContext.Provider>
  );
};

export default ArtistProvider;
