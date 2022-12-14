import "./content.style.scss";
const Content = ({ children, full }) => {
  return (
    <div className={`content ${full ? "" : "content--pad"}`}>{children}</div>
  );
};

export default Content;
