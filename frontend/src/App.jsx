import { AddNewOrdersPage } from "./pages/AddNewOrdersPage";
import { AllOrdersPage } from "./pages/AllOrdersPage";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodaysOrdersPage } from "./pages/TodaysOrdersPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allorders" element={<AllOrdersPage />} />
          <Route path="/addneworders" element={<AddNewOrdersPage />} />
          <Route path="/todaysorders" element={<TodaysOrdersPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
