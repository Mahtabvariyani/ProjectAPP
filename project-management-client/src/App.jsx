import HomePage from "./Pages/HomePage";
import ProjectListPage from "./Pages/ProjectListPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/projects" element={<ProjectListPage />} />
      </Routes>
    </div>
  );
}

export default App;
