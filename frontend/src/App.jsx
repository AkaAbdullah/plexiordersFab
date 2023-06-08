import NavBar from "./components/NavBar";
import { AddNewOrdersPage } from "./pages/AddNewOrdersPage";
import { AllOrdersPage } from "./pages/AllOrdersPage";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allorders" element={<AllOrdersPage />} />
          <Route path="/addneworders" element={<AddNewOrdersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
