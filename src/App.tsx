import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Searcher, SearcherDetailed, NotFound, MyAlbums } from "./pages";
import "./App.css";

function AppContent() {
  return (
    <div className="app">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searcher" element={<Searcher />} />
          <Route path="/searcher-detailed" element={<SearcherDetailed />} />
          <Route path="/albums" element={<MyAlbums />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
