// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Verify from "./components/VerificationPage";
import AddDegree from "./components/AddDegree";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Layout>
          <main>
            <Routes>
              <Route path="/add-degree" element={<AddDegree />} />
              <Route path="/verify-degree" element={<Verify />} />
              <Route
                path="/*"
                element={<Navigate to="/verify-degree" replace />}
              />
            </Routes>
          </main>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
