import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/home.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
// music app stroke
// https://youtu.be/oscPp3KghS8
export default App;
