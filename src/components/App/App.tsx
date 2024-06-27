import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";
import Footer from "../Footer/Footer";
import Homepage from "../../pages/Homepage/Homepage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Navigate to="/sobre-mi" />} />
        <Route path="/" element={<Navigate to="/contacto" />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </AppStyled>
  );
};

export default App;
