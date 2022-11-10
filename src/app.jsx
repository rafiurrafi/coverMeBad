import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Template from "./components/template/template.component";
import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/home.component";
import Search from "./routes/search/search.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>
      {/* <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} /> */}
    </Routes>
  );
};
// music app stroke
// https://youtu.be/oscPp3KghS8
export default App;
