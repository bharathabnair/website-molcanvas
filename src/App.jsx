import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CV from "./components/CV";
import Publications from "./components/Publications";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-gray-900 text-white">
        <nav className="flex justify-end space-x-6 p-6 text-sm uppercase tracking-wide">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/cv" className="hover:text-gray-400">CV</Link>
          <Link to="/publications" className="hover:text-gray-400">Publications</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </div>
    </Router>
  );
}
