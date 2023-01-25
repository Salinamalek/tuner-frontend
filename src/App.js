import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import PlaylistEdit from "./Pages/PlaylistEdit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import PlaylistIndex from "./Pages/PlaylistIndex";
import New from "./Pages/New";
import PlaylistNew from "./Pages/PlaylistNew";
import Show from "./Pages/Show";
import PlaylistShow from "./Pages/PlaylistShow";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/playlist" element={<PlaylistIndex />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/playlist/new" element={<PlaylistNew />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/playlist/:id" element={<PlaylistShow />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="/playlist/:id/edit" element={<PlaylistEdit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
