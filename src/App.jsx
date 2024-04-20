import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import Sidebar from "./Components/Sidebar/Sidebar";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Profile from "./Pages/ProfilePage/Profile";
import Story from "./Pages/Story/Story";

function App() {
  return (
    <div className="App flex flex-col h-full">
      <BrowserRouter>
        <div className="flex flex-row h-full">
          <div className="w-64 flex-shrink-0 border-r border-gray">
            {/* Sidebar */}
            <Sidebar />
          </div>
          <div className="flex-grow overflow-auto p-10">
            {/* Content area */}
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/username" element={<Profile />} />
              <Route path="/story" element={<Story/>} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
