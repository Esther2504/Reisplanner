import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import OverviewPage from "./pages/OverviewPage";
import StationPage from "./pages/StationPage";
import Planner from "./pages/Planner";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="Profile" element={<ProfilePage />} />
        <Route path="Planner" element={<Planner />} />
        <Route path="Overview" element={<OverviewPage />} />
        <Route path="Station" element={<StationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
