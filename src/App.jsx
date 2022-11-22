import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import OverviewPage from "./pages/OverviewPage";
import StationPage from "./pages/StationPage";
import Planner from "./pages/Planner";

function App() {

  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/:station" element={<StationPage />} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
