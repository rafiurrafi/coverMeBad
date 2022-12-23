import { useContext } from "react";
import { ContentContainer } from "./content.style";
import { ThemeContext } from "../../context/theme.context";
const Content = ({ children, space }) => {
  const { theme } = useContext(ThemeContext);
  return (
    // <div className={`content ${full ? "" : "content--pad"}`}>{children}</div>
    <ContentContainer theme={theme} space={space}>
      {children}
    </ContentContainer>
  );
};

export default Content;
