import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import Sidebar from './Components/Sidebar/Sidebar';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Profile from './Pages/ProfilePage/Profile';
import Story from './Pages/Story/Story';
import Router from './Router';

function App() {
  return (
    <div className="App flex flex-col h-full">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
