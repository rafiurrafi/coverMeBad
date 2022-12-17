import { ContentContainer } from "./content.style";

const Content = ({ children, full }) => {
  return (
    // <div className={`content ${full ? "" : "content--pad"}`}>{children}</div>
    <ContentContainer full>{children}</ContentContainer>
  );
};

export default Content;
