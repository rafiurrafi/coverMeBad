import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Auth from "./routes/auth/auth.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
};

export default App;
