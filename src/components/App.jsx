import "../App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import BookPage from "./BookPage";
import { SearchPanel } from "./SearchPanel";



export default function App() {




  return (
    <div className="container">
      <SearchPanel />
      <Routes>
        <Route
          path="/"
          element={<Navigate to='/mainPage' replace />}
        />
        <Route path="/mainPage" element={<Homepage />} />
        <Route path="/mainPage/:id" element={<BookPage />} />
      </Routes>
    </div>
  );
}

