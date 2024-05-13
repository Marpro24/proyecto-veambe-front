import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/" element={<Navigate to="/portfolio" />} />
          <Route path="/" element={<Navigate to="/sobre-mi" />} />
          <Route path="/" element={<Navigate to="/contacto" />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
