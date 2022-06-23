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
          element={<Navigate to='/bookstore-googleapi' replace />}
        />
        <Route path="/bookstore-googleapi" element={<Homepage />} />
        <Route path="/bookstore-googleapi/:id" element={<BookPage />} />
      </Routes>
    </div>
  );
}

